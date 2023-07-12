import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className="Banner">
      <div className="banner-info">
        <h1>Get out and make memories together</h1>
        <h5>Plan a differen kind of getaway for the whole family.</h5>
        <button onClick={() => navigate("/search")}>
          Explore Family's Favorites
        </button>
      </div>
    </div>
  );
}
