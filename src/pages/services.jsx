import React from "react";
import Hero from "../components/Services/Hero/hero.jsx";
import Offer from "../components/Services/Offer/offer.jsx";

export default function Services() {
    return (
        <div className="page">
            <div className="bg-layer bg-over" aria-hidden />

            <Offer />
            <Hero />
        </div>
    );
}
