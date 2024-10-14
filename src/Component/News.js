import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    apiKey: "fc870bc58a4649b3a621dbef4c595f2a",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const { country, category, pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fc870bc58a4649b3a621dbef4c595f2a&page=${this.state.page}&pageSize=${pageSize}`;

    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  componentDidMount() {
    this.updateNews();
  }

  componentDidUpdate(prevProps) {
    // Only update if the category or country has changed
    if (prevProps.category !== this.props.category || prevProps.country !== this.props.country) {
      this.setState({ page: 1 }, () => this.updateNews());
    }
  }

  handlePrevClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState(
        (prevState) => ({ page: prevState.page + 1 }),
        () => this.updateNews()
      );
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((ele) => (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title.slice(0, 45) : ""}
                  description={ele.description ? ele.description.slice(0, 88) : ""}
                  imageUrl={ele.urlToImage ? ele.urlToImage : ""}
                  newsUrl={ele.url ? ele.url : ""}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-sm btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-sm btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
