import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid hero-container">
            <div className="row equal-cols justify-content-center">
                {/* Decorative images (desktop only) */}
                <div className="col d-none d-md-block">
                    <img src="images/homepage/hero1.png" alt="Hero 1" className="img-fluid" />
                </div>

                <div className="col d-none d-md-block">
                    <img src="images/homepage/hero2.png" alt="Hero 2" className="img-fluid mt-5" />
                </div>

                {/* Values */}
                <div className="col-6 col-md">
                    <div className="hero-box" onClick={() => navigate("/values")} style={{ cursor: "pointer" }}>
                        <div className="hero-img">
                            <img src="images/homepage/values.png" alt="Values" className="img-fluid" />
                        </div>
                        <div className="hero-label">
                            <span>01</span> Values
                        </div>
                    </div>
                </div>

                {/* Archive */}
                <div className="col-6 col-md">
                    <div className="hero-box" onClick={() => navigate("/archive")} style={{ cursor: "pointer" }}>
                        <div className="hero-img">
                            <img src="images/homepage/archive.png" alt="Archive" className="img-fluid" />
                        </div>
                        <div className="hero-label">
                            <span>02</span> Archive
                        </div>
                    </div>
                </div>

                {/* Studios */}
                <div className="col-12 col-md">
                    <div className="hero-box" onClick={() => navigate("/studios")} style={{ cursor: "pointer" }}>
                        <div className="hero-img">
                            <img src="images/homepage/studio.png" alt="Studios" className="img-fluid" />
                        </div>
                        <div className="hero-label">
                            <span>03</span> Studios
                        </div>
                    </div>
                </div>

                {/* Decorative images (desktop only) */}
                <div className="col d-none d-md-block">
                    <img src="images/homepage/hero3.png" alt="Hero 3" className="img-fluid mt-n5" />
                </div>

                <div className="col d-none d-md-block">
                    <img src="images/homepage/hero4.png" alt="Hero 4" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
