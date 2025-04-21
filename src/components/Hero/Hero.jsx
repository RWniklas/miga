import React from "react";
import "./Hero.css"; // External styles
// import '@fortawesome/fontawesome-free/css/all.min.css';

function Hero() {
    return (
        <div className="hero-container">
            {/* Image 1 */}
            <div className="image-box">
                <img src="images/homepage/hero1.png" alt="Image 1" className="image" />
            </div>

            {/* Image 2 with offset */}
            <div className="image-box" style={{ transform: "translateY(160px)" }}>
                <i className="fa-solid fa-plus plus-icon"></i>
                <img src="images/homepage/hero2.png" alt="Image 2" className="image" />
            </div>

            {/* Image 3 - Value */}
            <div className="border-box">
                <div className="image-box">
                    <img src="images/homepage/values.png" alt="Value" className="image" />
                    <div className="label">
                        <b>01&nbsp;&nbsp;Value</b>
                    </div>
                </div>
            </div>

            {/* Image 4 - Archive */}
            <div className="border-box">
                <div className="image-box">
                    <img src="images/homepage/archive.png" alt="Archive" className="image" />
                    <div className="label">
                        <b>02&nbsp;&nbsp;Archive</b>
                    </div>
                </div>
            </div>

            {/* Image 5 - Studios */}
            <div className="border-box">
                <div className="image-box">
                    <img src="images/homepage/studio.png" alt="Studios" className="image" />
                    <div className="label">03&nbsp;&nbsp;Studios</div>
                </div>
            </div>

            {/* Image 6 with off-set*/}
            <div className="image-box">
                <i className="fa-solid fa-plus plus-icon-2"></i>
                <img src="images/homepage/hero3.png" alt="Image 6" className="image" style={{ transform: "translateY(-170px)" }} />
            </div>

            {/* Image 7 */}
            <div className="image-box">
                <img src="images/homepage/hero4.png" alt="Image 7" className="image" />
            </div>
        </div>
    );
}

export default Hero;
