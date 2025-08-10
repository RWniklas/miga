import React from "react";
import { useNavigate } from "react-router-dom"; // ← add this
import "./archivemain.css";

function Main() {
    const navigate = useNavigate(); // ← get navigate

    return (
        <div>
            {/* Desktop */}
            <div className="row archive-desktop t-spacer g-0">
                <div className="col-10 row g-0">
                    <div className="col-5">
                        <h1 className="ar-title-des">MI - Archive</h1>
                    </div>
                    <div className="col-7"></div>

                    <div className="col-12 py-2">
                        <p className="ar-text-des">Fin dalla sua nascita Migarden ha collaborato con diversi luoghi sul territorio milanese (e non) per dare spazio e vita ai propri interdisciplinari eventi.</p>
                    </div>
                    <div className="col-12 py-2">
                        <p className="ar-text-des2">
                            Dal suo inizio nel parco di Lea Garofalo, fino alla collaborazione con Tempio Del Futuro Perduto e il parco di Monte Stella, gli spazi stessi sono stati il principale protagonista del savoir faire di MigarAll’interno di
                            questi spazi uno dei focus principali del collettivo è stato quello di dare spazio ad artisti emergenti che si esprimessero su più campi artistici, primo fra tutti quello musicale con un focus sulla musica
                            elettronica/techno, coadiuvato dall’intersezione di performance e allestimenti che hanno toccato qualsiasi ambito artistico den.
                        </p>
                    </div>
                </div>

                <div className="col-2">
                    <img src="images/homepage/bannerArchive.png" alt="Arrow" className="media-xl" />
                </div>

                <div className="col-8 pt-5">
                    <button
                        type="button"
                        className="des-button"
                        onClick={() => navigate("/")} // ← go home
                    >
                        More Soon
                    </button>
                </div>
                <div className="col-2"></div>
            </div>

            {/* Mobile */}
            <div className="row archive-mobile">
                <section className="col-12 a-section pt-5 pad-b">
                    <div className="at-content-wrapper">
                        <i className="fa-solid fa-arrow-down at-arrow" style={{ transform: "rotate(45deg)" }} />
                        <p className="at-number pad-t">02</p>

                        <p className="at-title">MI - ARCHIVE</p>
                        <p className="at-text pad-t2">Fin dalla sua nascita Migarden ha collaborato con diversi luoghi sul territorio milanese (e non) per dare spazio e vita ai propri interdisciplinari eventi.</p>
                    </div>
                </section>

                <section className="col-12 a-section2">
                    <div className="at-content-wrapper row relative">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="images/homepage/bannerArchive.png" alt="Values" className="at-off-media" />
                        </div>

                        <div className="col-12 d-flex justify-content-center pt-5 overlay">
                            <p className="at-text">
                                Dal suo inizio nel parco di Lea Garofalo, fino alla collaborazione con Tempio Del Futuro Perduto e il parco di Monte Stella, gli spazi stessi sono stati il principale protagonista del savoir faire di MigarAll’interno
                                di questi spazi uno dei focus principali del collettivo è stato quello di dare spazio ad artisti emergenti che si esprimessero su più campi artistici, primo fra tutti quello musicale con un focus sulla musica
                                elettronica/techno, coadiuvato dall’intersezione di performance e allestimenti che hanno toccato qualsiasi ambito artistico den.
                            </p>
                        </div>

                        <div className="col-12">
                            <img src="images/homepage/bannerArchive2.png" alt="Values" className="at-media" />
                        </div>

                        <div className="col-12">
                            <p className="at-off-text">
                                Placeholde, Lorem Ipsum Ipsum Lorem Lorem Lorem Ipsum Ipsum Lorem Lorem Lorem Ipsum Ipsum Lorem Lorem Lorem Ipsum Ipsum Lorem Lorem Lorem Ipsum Ipsum Lorem Lorem Lorem Ipsum Ipsu Lorem Lorem Lorem Ipsum Ipsum Lorem
                                Lorem
                            </p>
                        </div>

                        <div className="col-12 pt-5 image-container">
                            <img src="images/homepage/bannerArchive3.png" alt="Values" className="at-media" />
                            <button
                                type="button"
                                className="at-button"
                                onClick={() => navigate("/")} // ← go home
                            >
                                More Soon
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;
