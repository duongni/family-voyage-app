import React from "react";
import "./SearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

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
      <FontAwesomeIcon icon={faHeart} className="heart" />
      <div className="SearchResult-info">
        <div className="SearchResult-info-top">
          <p>{location}</p>
          <h3>{title}</h3>
          <br />
          <p>{description}</p>
        </div>
        <div className="SearchResult-info-bottom">
          <div className="SearchResult-star">
            <FontAwesomeIcon icon={faStar} className="star" />

            <strong>{star}</strong>
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
