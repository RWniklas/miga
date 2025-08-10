import React from "react";
import { useNavigate } from "react-router-dom"; // << add this
import "./valuesmain.css";

function Main() {
    const navigate = useNavigate(); // << add this

    return (
        <div>
            <div className="row values-desktop t-spacer g-0">
                <div className="col-10 row g-0">
                    <div className="col-4">
                        <h1 className="ar-title-des">MI - Valori</h1>
                    </div>
                    <div className="col-8"></div>

                    <div className="col-12 py-2">
                        <p className="ar-text-des">
                            Gli spazi e le istituzioni con cui Migarden entra in contatto e con cui <br />
                            decide di collaborare sono sempre il punto di partenza per cui <br />
                            costruire progetti di valorizzazione, promozione e riqualifica <br />
                            urbana.
                        </p>
                    </div>
                    <div className="col-12 py-2">
                        <p className="ar-text-des2">
                            L’associazione ha particolarmente a cuore i luoghi dove la natura rimane protagonista dello spazio, perché crediamo fermamente che la fruizione del paesaggio e della sua natura durante un evento possa trasformarsi in uno
                            stimolo alla tutela, trasformando l’ambiente in una cornice privilegiata ed espressiva del territorio. Queste trasformazioni sono il risultato di collaborazioni dinamiche.
                        </p>
                    </div>
                </div>

                <div className="col-2">
                    <img src="images/homepage/mivalori.png" alt="Arrow" className="media-xl" />
                </div>

                <div className="col-8 pt-5">
                    <button className="des-button" onClick={() => navigate("/contact")}>
                        Contact Us
                    </button>
                </div>
                <div className="col-2"></div>
            </div>

            <div className="row g-0 values">
                {/* Section 1 */}
                <section className="col-12 section1">
                    <div className="row g-0">
                        <div className="col-6 position-relative">
                            <div className="row">
                                <div className="col-6">
                                    <i className=" ar-arrow fa-solid fa-arrow-down" style={{ transform: "rotate(-45deg)" }} />
                                </div>
                                <div className="col-6 d-flex justify-content-end">
                                    <span className="kicker">01</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <img src="images/homepage/mivalori.png" alt="Values" className="media" />
                        </div>

                        <div className="col-12 t-spacer b-spacer">
                            <h1 className="ar-title">Mi - VALORI</h1>
                            <p className="ar-text">
                                Promozione socio-culturale, riqualifica e arte sono i valori pulsanti di Migarden. Il primo principio che ha guidato il collettivo nella sua crescita è stata la valorizzazione completa del patrimonio culturale e
                                sociale tramite la combinazione promozionale di artisti consolidati e talenti emergenti.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="col-12 section2 pt-4">
                    <div className="row">
                        <div className="col-12">
                            <img src="images/homepage/bannerValues.png" alt="Values" className="media mb-3" />
                        </div>
                        <div className="col-12">
                            <p className="ar-text">
                                L’arte e la musica diventano per noi espressioni e suoni che trasformano in maniera multiforme lo spazio dei nostri eventi. Attraverso l’arte, Migarden si impegna a trasformare gli spazi urbani trascurati in ambienti
                                culturalmente arricchenti, contribuendo così al rinnovamento delle città e al benessere della comunità locale. Le collaborazioni artistiche contribuiscono inoltre ad arricchire l’atmosfera dell’evento, offrendo al
                                pubblico la possibilità di entrare in contatto con forme d’arte diverse e stimolanti.
                            </p>
                            <p className="ar-text pt-3 pb-4">
                                Le location scelte da Migarden vengono trasformate in contesti unici e suggestivi, che siano parchi, spazi abbandonati o università. Questo avviene attraverso installazioni che sfruttano strumenti tecnologici avanzati
                                come laser, schermi, proiezioni e strisce LED, oppure attraverso l’invasione di spazi chiusi con vegetazione rigogliosa.
                            </p>
                        </div>

                        <div className="col-12 d-flex justify-content-center pt-4">
                            <img src="images/homepage/bannerStudio.png" alt="Values" className="media-small" />
                        </div>

                        <div className="col-12 pt-5 image-container">
                            <img src="images/homepage/bannerValues2.png" alt="Values" className="media-big" />
                            {/* LAST button → navigates to /contact */}
                            <button type="button" className="center-button" onClick={() => navigate("/contact")}>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Main;
