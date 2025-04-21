import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <div className="hero-container">
            {/* Desktop only */}
            <div className="image-box hide-mobile">
                <img src="images/homepage/hero1.png" alt="Image 1" className="image" />
            </div>

            <div className="image-box hide-mobile offset-down">
                <i className="fa-solid fa-plus plus-icon"></i>
                <img src="images/homepage/hero2.png" alt="Image 2" className="image" />
            </div>

            {/* Shared: VALUES */}
            <div className="border-box value-box">
                <div className="image-box">
                    <img src="images/homepage/values.png" alt="Values" className="image" />
                    <div className="label">
                        <span className="label-number">01</span>
                        <span className="label-text">Values</span>
                    </div>
                </div>
            </div>

            {/* Shared: ARCHIVE */}
            <div className="border-box archive-box">
                <div className="image-box">
                    <img src="images/homepage/archive.png" alt="Archive" className="image" />
                    <div className="label">
                        <span className="label-number">02</span>
                        <span className="label-text">Archive</span>
                    </div>
                </div>
            </div>

            {/* Shared: STUDIOS */}
            <div className="border-box studio-box">
                <div className="image-box">
                    <img src="images/homepage/studio.png" alt="Studios" className="image" />
                    <div className="label">
                        <span className="label-number">03</span>
                        <span className="label-text">Studios</span>
                    </div>
                </div>
            </div>

            {/* Desktop only */}
            <div className="image-box hide-mobile offset-up">
                <i className="fa-solid fa-plus plus-icon"></i>
                <img src="images/homepage/hero3.png" alt="Image 6" className="image" />
            </div>

            <div className="image-box hide-mobile">
                <img src="images/homepage/hero4.png" alt="Image 7" className="image" />
            </div>
        </div>
    );
}

export default Hero;
