import React from "react";
import "./offer.css";

function Offer() {
    return (
        <div className="container-fluid d-none d-md-block offer-container">
            <div className="row ">
                {/* Title + 01 */}
                <div className="col-4">
                    <div className="row">
                        <div className="col-6">
                            <h2 className="offer-title">What WE offer</h2>
                        </div>
                        <div className="col-md-6 offer-pd1">
                            <div className="offer-title">01</div>
                            <div className="offer-line">Light & Set</div>
                            <div className="offer-line">Design</div>
                        </div>
                    </div>
                </div>

                {/* 02 */}
                <div className="col-md-3 offer-pd">
                    <div className="offer-title">02</div>
                    <div className="offer-line">Music & DJs</div>
                    <div className="offer-line">Impianto Audio</div>
                    <div className="offer-line">Consolle</div>
                </div>

                {/* 03 */}
                <div className="col-md-3">
                    <div className="offer-title">03</div>

                    <div className="offer-line">Communication</div>
                    <div className="offer-line">Photography</div>
                    <div className="offer-line">Editorials</div>
                </div>
                {/* Spacer */}
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}

export default Offer;
