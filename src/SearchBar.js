import React from "react";
import Features from "./Features";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div>
      <header className="container">
        <div className="website-name">Family Voyage</div>
        <div className="bar">
          <div className="location">
            <label>Location</label>
            <input type="text" placeholder="Where are you going?" />
          </div>
          <div className="check-in">
            <label>Check in</label>
            <input type="date" placeholder="add date" />
          </div>
          <div className="check-out">
            <label>Check out</label>
            <input type="date" placeholder="add date" />
          </div>
          <div className="guest">
            <label>Guests</label>
            <input type="number" placeholder="add guess" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </header>
      <Features />
    </div>
  );
}
