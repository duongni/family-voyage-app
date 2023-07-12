import React from "react";
import "./SearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="SearchResult">
      <img src={img} alt="" />
      <FontAwesomeIcon icon="fa-light fa-heart" className="heart" />
      <div className="SearchResult-info">
        <div className="SearchResult-info-top">
          <p>{location}</p>
          <h3>{title}</h3>
          <br />
          <p>{description}</p>
        </div>
        <div className="SearchResult-info-bottom">
          <div className="SearchResult-star">
            <p>
              <FontAwesomeIcon icon="fa-sharp fa-solid fa-star" />
              {star}
            </p>
          </div>
          <div className="SearchResult-price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
