import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SearchBar() {
  return (
    <div>
      <header className="SearchBar">
        <Link to="/">
          <div className="website-name">Family Voyage</div>
        </Link>
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
            <input min={0} defaultValue={2} type="number" />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
