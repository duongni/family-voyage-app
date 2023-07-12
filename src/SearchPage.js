import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

export default function SearchPage() {
  return (
    <div className="SearchPage">
      <div className="SearchPage_info">
        <p>25 stays · August 2 to August 5 · 2 adult and 2 child</p>
        <h1>Family's Favorites</h1>
        <button>Cancelation Flexibility</button>
        <button>Type of Place</button>
        <button>Price</button>
        <button>Rooms and Beds</button>
        <button>More Filters</button>
      </div>
      <SearchResult
        img="https://images.trvl-media.com/lodging/1000000/20000/19600/19588/ab900421.jpg?impolicy=resizecrop&rw=1200&ra=fit"
        location="Hilton Rose Hall Resort and Spa"
        title="Ocean View -1 King bed"
        description="4 guest · 1 bedroom · 1 bed · 1 bathroom · Wifi · Kitchen · Free parking · All-inclusive · Ocean view"
        star={4.3}
        price="$400 / night"
        total="$1200 total"
      />
    </div>
  );
}
