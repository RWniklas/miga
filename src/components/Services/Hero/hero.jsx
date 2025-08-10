import React from "react";
import "./hero.css";

function Hero() {
    return (
        <div className="container-fluid hero-container ">
            <div className="row g-0 hero-row">
                {/* Left image */}
                <div className="col-6 col-md-4 hero-col">
                    <img src="images/studio/communication1.png" alt="Hero left" className="hero-img-el" />
                </div>
                {/* mobile offer section */}
                <div className="col-6 d-md-none pad-l">
                    <div className="row g-0 ">
                        <div className="col-12 hero-element">
                            <div className="d-flex  ">
                                <div className="hero-title">01</div>
                                <div className="test">
                                    <div className="hero-line">Light & Set</div>
                                    <div className="hero-line">Design</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 hero-element">
                            <div className="d-flex align-items-start">
                                <div className="hero-title">02</div>
                                <div className="test">
                                    <div className="hero-line">Music & DJs</div>
                                    <div className="hero-line">Impianto Audio</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="d-flex align-items-start">
                                <div className="hero-title">03</div>
                                <div className="test">
                                    <div className="hero-line">Communication</div>
                                    <div className="hero-line">Photography</div>
                                    <div className="hero-line">Editorials</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Empty spacer (hidden on small screens) */}

                <div className="d-none d-md-block col-md-3 hero-empty"></div>

                {/* Right image */}
                <div className="d-none d-md-block col-md-2 hero-col">
                    <img src="images/studio/communication2.png" alt="Hero right" className="hero-img-el" />
                </div>
                {/* Empty spacer (hidden on small screens) */}
                <div className="d-none d-md-block col-md-3 hero-empty"></div>
            </div>

            {/* Second row for the hero section */}
            <div className="row g-0 hero-row">
                {/* Left Display */}
                <div className="col-6 col-md-4 pt-md-4">
                    <div className="row align-items-start">
                        {/* Top-left image */}
                        <div className="d-none d-md-flex col-md-6">
                            <img src="images/studio/light3.png" className="img-fluid w-100" alt="Book open" />
                        </div>

                        {/* Top-right text block */}
                        <div className="col-12 col-md-6">
                            <div className="d-flex align-items-start">
                                <div className="text-uppercase lh-sm">
                                    <div class="explain-title">Communication</div>
                                    <p class="explain-text">
                                        Graphic design Lorem Lorem Ispsum Lorem Ipsum Ipsum Graphic design Lorem Lorem Ispsum Lorem Ipsum Ipsum Graphic design Lorem Lorem Ispsum Lorem Ipsum IpsumGraphic design Lorem Lorem Ispsum Lorem Ipsum Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Spacer to create stagger on md+ */}
                        <div className="d-none d-md-block col-md-6"></div>

                        {/* Bottom-right image */}
                        <div className="d-none d-md-block col-md-6 pt-md-2">
                            <img src="images/studio/light4.png" className="img-fluid w-100" alt="Stage lights" />
                        </div>
                    </div>
                </div>

                {/* Empty spacer (hidden on small screens) */}

                <div className="d-none d-md-block col-md-3 hero-empty "></div>

                {/* Right image */}
                <div className="col-6 col-md-4 hero-col pt-md-4">
                    <img src="images/studio/light1.png" alt="Hero right" className="hero-img-el" />
                </div>
                {/* Empty spacer (hidden on small screens) */}
                <div className="d-none d-md-block col-md-3 hero-empty"></div>
            </div>
            {/* Third row for the hero section */}
            <div className="row g-0 hero-row pt-md-4">
                <div className="col-6 col-md-4">
                    <img src="images/studio/light2.png" alt="Hero left" className="hero-img-el" />
                </div>
                <div className="col-6 col-md-3"></div>
                <div className="col-6 d-md-none"></div>
                <div className="col-6 col-md-4">
                    <div className="row align-items-start g-0">
                        {/* Top-left image */}
                        <div className="col-6">
                            <img src="images/studio/music2.png" className="img-fluid w-100" alt="Book open" />
                        </div>

                        {/* Top-right image */}
                        <div className="col-6">
                            <div className="d-none d-md-flex align-items-start">
                                <img src="images/studio/light3.png" className="img-fluid w-100" alt="Book open" />
                            </div>
                        </div>

                        {/* Spacer to create stagger on md+ */}
                        <div className="col-6"></div>

                        {/* Bottom-right image */}
                        <div className="col-6 ">
                            <img src="images/studio/light5.png" className="img-fluid w-100" alt="Stage lights" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Fourth row for the hero section */}
            <div className="row g-0 hero-row pt-md-4">
                <div className="col-4"></div>
                <div className="col-5">
                    <img src="images/studio/music1.png" alt="Hero left" className="hero-img-el" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
