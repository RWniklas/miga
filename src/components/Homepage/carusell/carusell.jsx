import React from "react";
import { useNavigate } from "react-router-dom";
import "./carusell.css";

function Carusell() {
    const navigate = useNavigate();

    return (
        <div className="carousel-container">
            <img src="images/homepage/contact.png" alt="Dynamic Carousel" className="carousel-image" />

            {/* Overlay text and button */}
            <div className="carousel-text-overlay">
                <h1>Transforms abandoned urban spaces into dynamic and vibrant places.</h1>
                <button type="button" className="carousel-button" onClick={() => navigate("/contact")}>
                    Contact us
                </button>
            </div>
        </div>
    );
}

export default Carusell;
