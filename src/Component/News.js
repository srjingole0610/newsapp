import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  document.title = `${
    props.category.charAt(0).toUpperCase() +
    props.category.slice(1)
  } - NewsMonkey`;
  
   const updateNews = async () => {
    props.setProgress(10);
    const { country, category, pageSize } = props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  
useEffect(()=>{
 updateNews();
},[])

useEffect(()=>{
    setPage(1)
    updateNews()
    document.title = `${
      props.category.charAt(0).toUpperCase() +
      props.category.slice(1)
    } - NewsMonkey`;
  
},[props.category, props.country])

  const fetchMoreData = async () => {
    setPage(page+1)
    const { country, category, pageSize } = props;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${props.apiKey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true)
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
    return (
      <div className="container">
        <h1 className="text-center">
          NewsMonkey - Top{" "}
          {props.category.charAt(0).toUpperCase() +
            props.category.slice(1)}{" "}
          Headlines{" "}
        </h1>
        {/* {loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          style={{ overflow: "hidden" }}
        >
          <div className="row">
            {articles.map((ele) => (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  key={ele.url}
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
      </div>
    );
  }

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};


export default News
