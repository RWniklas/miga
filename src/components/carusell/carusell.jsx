import React from "react";
import "./carusell.css";

function Carusell() {
  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src="images/homepage/contact.png"
          alt="Sunflower"
          className="carousel-image"
        />
        <div className="carousel-text">
          <h1>Transforms abandoned urban spaces into dynamic and vibrant places.</h1>
          <button className="carousel-button">Contact us</button>
        </div>
      </div>
    </div>
  );
}

export default Carusell;