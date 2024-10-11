import React, { Component } from "react";
import NewsItem from "./NewsItem";
 
export class News extends Component {
    /**
     * Constructor for the News class.
     *
     * This constructor initializes the state with an empty array of articles and
     * sets loading to false.
     */
    constructor() {
        super();
        this.state = {
           articles: [],
           loading:false
        }
      }
      /**
       * This lifecycle method is called when the component is mounted to the DOM.
       * It fetches the data from the given URL and updates the state with the
       * received data.
       * @memberof News
       */
      async componentDidMount() {
        console.log("I am componentDidMount from News Component")
        const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fc870bc58a4649b3a621dbef4c595f2a"
        const data = await fetch(url)
        const parsedData = await data.json();
        console.log(parsedData)
        this.setState(
          {
            articles: parsedData.articles
          }
        )
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
    console.log("I am render from News Component")
    return (

      <div className="container mx-3 my-3 ">
        <h2>NewsMonkey-Top Headline</h2>
        <div className="row">
        { /* Map over the articles array and render each article as a NewsItem component */
          this.state.articles.map((ele)=>{
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
      </div>
    );
  }

}

export default News;
