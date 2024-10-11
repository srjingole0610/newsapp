import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container mx-3 my-3 ">
        <h2>NewsMonkey-Top Headline</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="Suraj" description="My name is suraj" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Suraj" description="My name is suraj" />
          </div>
          <div className="col-md-4">
            <NewsItem title="Suraj" description="My name is suraj" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
