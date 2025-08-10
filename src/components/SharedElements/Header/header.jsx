import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const goBack = () => (window.history.length > 1 ? navigate(-1) : navigate("/"));

    return (
        <div>
            <header className="mobile container-fluid pb-3">
                <div className="row align-items-center">
                    {/* Left: Back button */}
                    <div className="col-4">
                        <button type="button" className=" btn btn-outline-secondary d-inline-flex align-items-center" onClick={goBack}>
                            <i className="fa-solid fa-arrow-left me-2" aria-hidden="true" />
                            Back
                        </button>
                    </div>

                    {/* Right: Nav links */}
                    <div className="col-8 d-flex justify-content-end right-links">
                        <nav className="nav gap-3">
                            <NavLink to="/values" className="nav-link p-0">
                                Values
                            </NavLink>
                            <NavLink to="/archive" className="nav-link p-0">
                                Archive
                            </NavLink>
                            <NavLink to="/services" className="nav-link p-0">
                                Studios
                            </NavLink>
                        </nav>
                    </div>

                    {/* Logo row */}
                    <div className="col-12 text-center mt-2">
                        <img className="header-logo" src="images/textlogo.png" alt="Migarden" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </header>
            <header className="desktop container-fluid pb-3">
                <div className="row align-items-start align-items-md-center">
                    {/* Left: Logo + Slogan */}
                    <div className="col-md-6 d-flex flex-column flex-md-row align-items-start gap-3">
                        <div className="d-flex flex-column">
                            <img className="header-logo" src="images/textlogo.png" alt="Migarden" onClick={() => navigate("/")} style={{ cursor: "pointer" }} />
                            <div className="d-flex">
                                <hr className="logo-line" />
                                <p className="text-muted slogan-text ml-1">the green place in a gray space</p>
                            </div>
                        </div>
                        <div>
                            <h5 className="d-flex align-items-center mb-1 fw-bolder fs-2">
                                Vision <span className="ms-2">&#8594;</span>
                            </h5>
                            <p className="mb-0 small fw-bolder fs-5">
                                Transforms abandoned urban <br /> spaces into dynamic and vibrant places.
                            </p>
                        </div>
                    </div>

                    {/* Right: Nav Links */}
                    <nav className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0 border-start ps-4">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold" to="/values">
                                    Values
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold" to="/archive">
                                    Archive
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fw-semibold" to="/services">
                                    Studios
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
