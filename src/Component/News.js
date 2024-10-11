import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

 
export class News extends Component {
    /**
     * Constructor for the News class.
     *
     * This constructor initializes the state with an empty array of articles and
     * sets loading to false.
     */
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
        apiKey: 'fc870bc58a4649b3a621dbef4c595f2a'
      }   

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
      apiKey: PropTypes.string

    }
    constructor() {
        super();
        this.state = {
           articles: [],
           loading:false,
           page:1
        }
      }
      /**
       * This lifecycle method is called when the component is mounted to the DOM.
       * It fetches the data from the given URL and updates the state with the
       * received data.
       * @memberof News
       */
      async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc870bc58a4649b3a621dbef4c595f2a&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        const data = await fetch(url)
        const parsedData = await data.json();
        this.setState(
          {
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading:false
          }
        )
      }

       handlePrevClick = async ()=>{
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc870bc58a4649b3a621dbef4c595f2a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        const data = await fetch(url)
        const parsedData = await data.json();
        this.setState(
          {
            articles: parsedData.articles,
            page:this.state.page-1,
            loading:false
          }
        )
      }

     handleNextClick = async ()=>{
        if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fc870bc58a4649b3a621dbef4c595f2a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        const data = await fetch(url)
        const parsedData = await data.json();
        this.setState(
          {
            articles: parsedData.articles,
            page:this.state.page+1,
            loading:false
          }
        )
      }
    }
  /**
   * Renders the News component.
   *
   * This component renders a container with a heading and a row of NewsItem
   * components. It maps over the articles array and renders each article as a
   * NewsItem component. The NewsItem component is rendered with the title,
   * description, image URL, and news URL.
   *
   * @return {JSX.Element} The rendered component.
   */
  render() {
    return (

      <div className="container">
        <h1 className="text-center">NewsMonkey-Top Headline</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        { /* Map over the articles array and render each article as a NewsItem component */
          !this.state.loading && this.state.articles.map((ele)=>{
            return <div className="col-md-4"  key={ele.url}>
              { /* Render the NewsItem component with the title, description, image URL, and news URL */
                <NewsItem 
                  title={ele.title?ele.title.slice(0,45):""} 
                  description={ele.description?ele.description.slice(0,88):""} 
                  imageUrl = {ele.urlToImage?ele.urlToImage:""}  
                  newsUrl={ele.url?ele.url:""}/>
              }
            </div>
          })
        }
        </div>
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }

}

export default News;
