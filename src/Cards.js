import React from "react";

export default function Cards({ src, title, description, price }) {
  return (
    <div className="Cards">
      <img src="./images/landing-page-1.jpg" alt="" />
      <div>
        <h2>title</h2>
        <h4>description</h4>
        <h3>price</h3>
      </div>
    </div>
  );
}
