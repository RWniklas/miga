import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="container-fluid pb-3">
            <div className="row align-items-start align-items-md-center">
                {/* Left: Logo + Slogan */}
                <div className="col-md-6 d-flex flex-column flex-md-row align-items-start gap-3">
                    <div className="d-flex flex-column">
                        <img className="header-logo" src="images/textlogo.png" alt="Migarden" />
                        <div className="d-flex ;">
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
                            <a className="nav-link fw-semibold" href="#">
                                Values
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Archive
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold" href="#">
                                Studios
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
