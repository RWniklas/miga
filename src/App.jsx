import { useState } from "react";
import "./App.css";
import React from "react";

import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/about.jsx";
import Devider from "./components/Devider/devider.jsx";
import Info from "./components/Info/info.jsx";
import Carusell from "./components/carusell/carusell.jsx";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

import "./App.css";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <Devider />
            <Info />
            <Devider />
            <Carusell />
            <Footer />
        </>
    );
}

export default App;
