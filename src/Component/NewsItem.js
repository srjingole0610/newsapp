import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem",backgroundColor:"#FFC494" }}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{filter:"drop-shadow(0px 0px 10px )"}}/>
          <div className="card-body">
            <h5 className="card-title" style={{color:"#222222"}}>{title}</h5>
            <p className="card-text" style={{color:"#222222"}}>
                {description}
            </p>
            <a href="/newsdetails/" className="btn btn-sm btn-info">
             Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default NewsItem;
