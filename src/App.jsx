import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home.jsx";
import Values from "./pages/values.jsx";
import Archive from "./pages/archive.jsx";
import Services from "./pages/services.jsx";
import Contact from "./pages/contact.jsx";

import Header from "./components/SharedElements/Header/header.jsx";

import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/values" element={<Values />} />
                <Route path="/archive" element={<Archive />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
}

export default App;
