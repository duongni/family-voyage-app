import React from "react";
import Features from "./Features";
import Card from "./Card";
import "./Home.css";

import Banner from "./Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <Features />
      <div className="home_section">
        <Card
          src="https://images.trvl-media.com/lodging/6000000/5390000/5389000/5388988/9d96758c.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Dorado Beach"
          description="5-star luxury resort located in Higuillar"
          price="$1350/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/1000000/10000/9300/9228/0f0f608b.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Caribe Hilton"
          description="you can seek out an adventure with cave exploring and ziplining nearby."
          price="$450/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/2000000/1770000/1760300/1760259/6f3e9721.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="La Concha Renaissance"
          description="a walkable area in San Juan with great shopping."
          price="$429/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://images.trvl-media.com/lodging/6000000/5390000/5389000/5388988/9d96758c.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Dorado Beach"
          description="5-star luxury resort located in Higuillar"
          price="$1350/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/1000000/10000/9300/9228/0f0f608b.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Caribe Hilton"
          description="you can seek out an adventure with cave exploring and ziplining nearby."
          price="$450/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/2000000/1770000/1760300/1760259/6f3e9721.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="La Concha Renaissance"
          description="a walkable area in San Juan with great shopping."
          price="$429/night"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://images.trvl-media.com/lodging/6000000/5390000/5389000/5388988/9d96758c.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Dorado Beach"
          description="5-star luxury resort located in Higuillar"
          price="$1350/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/1000000/10000/9300/9228/0f0f608b.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="Caribe Hilton"
          description="you can seek out an adventure with cave exploring and ziplining nearby."
          price="$450/night"
        />
        <Card
          src="https://images.trvl-media.com/lodging/2000000/1770000/1760300/1760259/6f3e9721.jpg?impolicy=resizecrop&rw=1200&ra=fit"
          title="La Concha Renaissance"
          description="a walkable area in San Juan with great shopping."
          price="$429/night"
        />
      </div>
    </div>
  );
}
