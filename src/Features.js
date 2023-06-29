import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Features.css";

import {
  faChildren,
  faPersonSwimming,
  faTree,
  faHouse,
  faHotel,
  faHouseFloodWater,
} from "@fortawesome/free-solid-svg-icons";

export default function Features() {
  return (
    <div className="Features">
      <div className="child-friendly">
        <FontAwesomeIcon icon={faChildren} className="feature-icon" />
        <p>child friendly</p>
      </div>
      <div className="pool">
        <FontAwesomeIcon icon={faPersonSwimming} className="feature-icon" />
        <p>swimming pool</p>
      </div>
      <div className="nature">
        <FontAwesomeIcon icon={faTree} className="feature-icon" />
        <p>nature</p>
      </div>
      <div className="lake-house">
        <FontAwesomeIcon icon={faHouseFloodWater} className="feature-icon" />
        <p>lake houses</p>
      </div>
      <div className="rental">
        <FontAwesomeIcon icon={faHouse} className="feature-icon" />
        <p>rentals</p>
      </div>
      <div className="hotel">
        <FontAwesomeIcon icon={faHotel} className="feature-icon" />
        <p>hotels</p>
      </div>
    </div>
  );
}
