import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
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
    if (
      prevProps.category !== this.props.category ||
      prevProps.country !== this.props.country
    ) {
      this.setState({ page: 1 }, () => this.updateNews());
      document.title = `${
        this.props.category.charAt(0).toUpperCase() +
        this.props.category.slice(1)
      } - NewsMonkey`;
    }
  }

  handlePageClick = async (page) => {
    this.setState({ page }, () => this.updateNews());
  };

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const { country, category, pageSize } = this.props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=fc870bc58a4649b3a621dbef4c595f2a&page=${this.state.page}&pageSize=${pageSize}`;

    this.setState({ loading: true });
    const data = await fetch(url);
    const parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    const {  articles} = this.state;
    // const lastPage = Math.ceil(totalResults / this.props.pageSize);

    return (
      <div className="container">
        <h1 className="text-center">
          NewsMonkey - Top{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Headlines{" "}
        </h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="row">
            {articles.map((ele) => (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title ? ele.title.slice(0, 45) : ""}
                  description={
                    ele.description ? ele.description.slice(0, 88) : ""
                  }
                  imageUrl={ele.urlToImage ? ele.urlToImage : ""}
                  newsUrl={ele.url ? ele.url : ""}
                  author={ele.author ? ele.author : "unknown"}
                  date={ele.publishedAt ? ele.publishedAt : ""}
                  source={ele.source.name ? ele.source.name : "unknown"}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-sm btn-dark"
            onClick={() => this.handlePageClick(page - 1)}
          >
            &larr; Prev
          </button>
          <button
            disabled={page >= lastPage}
            type="button"
            className="btn btn-sm btn-dark"
            onClick={() => this.handlePageClick(page + 1)}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
