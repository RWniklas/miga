import React from "react";
import { useNavigate } from "react-router-dom";
import "./contact.css";

export default function Main() {
    const navigate = useNavigate(); // <-- get navigate

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="text-center">
                <h1 className="mb-4">Contact Us Page</h1>
                <button className="btn btn-dark btn-lg px-4 rounded-pill" onClick={() => navigate("/")}>
                    Coming Soon
                </button>
            </div>
        </div>
    );
}
