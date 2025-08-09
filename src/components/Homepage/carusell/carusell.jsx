import React from "react";
import "./carusell.css";
import { ImageRotator } from "../functions/imageRotator"; // adjust path if needed

const images = ["images/homepage/contact.png", "images/homepage/contact2.png"];

function Carusell() {
    return (
        <div className="carousel-container">
            <ImageRotator images={images} interval={4000} />

            {/* Overlay text and button */}
            <div className="carousel-text-overlay">
                <h1>Transforms abandoned urban spaces into dynamic and vibrant places.</h1>
                <button className="carousel-button">Contact us</button>
            </div>
        </div>
    );
}

export default Carusell;
