import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="homehero-container">
            <div className="intro-block">
                <p>
                    Transforms abandoned urban<br></br> spaces into dynamic and vibrand places.
                </p>
                <p className="pt-3">
                    The dual <strong>mission of Migarden</strong> is to create unique cultural experiences that combine ludic and cultural entertainment through music, expos and activities together with the commitment into the{" "}
                    <strong>transformation</strong> of neglected urban spaces through their re-development.
                </p>
            </div>
            <div className="row g-1 g-md-4 equal-cols justify-content-center">
                {/* Left decorative images */}
                <div className="col d-none d-md-block plus-wrap">
                    <img src="images/homepage/hero1.png" alt="Hero 1" className="homehero-img" />
                </div>

                <div className="col d-none d-md-block plus-wrap">
                    <img src="images/homepage/hero2.png" alt="Hero 2" className="homehero-img shift-down" />
                    {/* plus at the RIGHT edge of this column */}
                    <i className="fa-solid fa-plus hero-plus in-col-right" aria-hidden="true"></i>
                </div>

                {/* Values */}
                <div className="col-6 col-md">
                    <div className="hero-box" onClick={() => navigate("/values")} style={{ cursor: "pointer" }}>
                        <img src="images/homepage/values.png" alt="Values" className="homehero-img" />
                        <div className="hero-label">
                            <span>01</span> Values
                        </div>
                    </div>
                </div>

                {/* Archive */}
                <div className="col-6 col-md">
                    <div className="hero-box" onClick={() => navigate("/archive")} style={{ cursor: "pointer" }}>
                        <img src="images/homepage/archive.png" alt="Archive" className="homehero-img" />
                        <div className="hero-label">
                            <span>02</span> Archive
                        </div>
                    </div>
                </div>

                {/* Studios */}
                <div className="col-12 col-md">
                    <div className="hero-box" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
                        <img src="images/homepage/studio.png" alt="Studios" className="homehero-img" />
                        <div className="hero-label">
                            <span>03</span> Studios
                        </div>
                    </div>
                </div>

                {/* Right decorative images */}
                <div className="col d-none d-md-block plus-wrap">
                    {/* plus at the LEFT edge of this column */}
                    <i className="fa-solid fa-plus hero-plus in-col-left" aria-hidden="true"></i>
                    <img src="images/homepage/hero3.png" alt="Hero 3" className="homehero-img shift-up" />
                </div>

                <div className="col d-none d-md-block plus-wrap">
                    <img src="images/homepage/hero4.png" alt="Hero 4" className="homehero-img" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
