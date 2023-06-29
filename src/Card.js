import React from "react";
import "./Card.css";
export default function Card({ src, title, description, price }) {
  return (
    <div className="Card">
      <img src={src} alt="" />
      <div className="card-info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}
