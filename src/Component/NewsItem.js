import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem",backgroundColor:"#fff",boxShadow:"0px 0px 10px rgba(0,0,0,0.2)",borderRadius:"1rem",overflow:"hidden" }}>
          <img src={imageUrl} className="card-img-top" alt="..." style={{height:"150px",objectFit:"cover",filter:"drop-shadow(0px 0px 10px rgba(0,0,0,0.2))"}}/>
          <div className="card-body p-3" style={{backgroundColor:"#fff", cursor:"pointer"}} onClick={()=>{window.location.href = newsUrl}}>
            <h5 className="card-title" style={{color:"#333",fontWeight:"bold",fontSize:"1.2rem"}}>{title}...</h5>
            <p className="card-text" style={{color:"#666",fontSize:"1rem",lineHeight:"1.5rem"}}>
                {description}...
            </p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info" style={{borderColor:"#007bff",color:"#007bff",fontSize:"1rem"}}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

}

export default NewsItem;
