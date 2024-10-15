import React from "react";

/**
 * A functional component that renders a news item card.
 *
 * @param {string} title - The title of the news item.
 * @param {string} description - The description of the news item.
 * @param {string} imageUrl - The URL of the image associated with the news item.
 * @param {string} newsUrl - The URL of the news item.
 * @param {string} author - The author of the news item.
 * @param {Date} date - The date of the news item.
 * @param {string} source - The source of the news item.
 * @return {JSX.Element} The rendered component.
 */
const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
  return (
    <div className="my-3 position-relative">
      <div className="card" style={{ width: "20rem", height: "100%", backgroundColor: "#fff", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", borderRadius: "1rem", overflow: "hidden" }}>
        <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "cover", filter: "drop-shadow(0px 0px 10px rgba(0,0,0,0.2))" }} />
        <div className="badge rounded-pill bg-warning position-absolute" style={{ top: "0.5rem", right: "0.5rem", zIndex: "1", color: "#000" }}>
          {source}
        </div>
        <div className="card-body p-3" style={{ backgroundColor: "#fff", cursor: "pointer" }} onClick={() => { window.location.href = newsUrl }}>
          <h5 className="card-title" style={{ color: "#333", fontWeight: "bold", fontSize: "1.2rem" }}>{title}</h5>
          <p className="card-text" style={{ color: "#666", fontSize: "1rem", lineHeight: "1.5rem" }}>
            {description}
          </p>
          <p className="card-text" style={{ color: "#666", fontSize: "0.8rem" }}><small><i className="fa fa-user" aria-hidden="true"></i> By {author} | <i className="fa fa-calendar" aria-hidden="true"></i> {new Date(date).toLocaleString()}</small></p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-info btn-dark" style={{ borderColor: "#007bff", color: "#fff", fontSize: "1rem" }}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

