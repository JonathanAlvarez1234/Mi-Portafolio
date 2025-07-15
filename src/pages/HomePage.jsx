import React from "react";
import "../css/HomePage.css";
//import heroImage from "../assets/hero.jpg";

export default function HomePage() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Proyectos</h1>
                <p>The Best Experience</p>
                <button>Make A Reservation</button>
            </div>
            <div className="hero-image">
                {/*<img src={heroImage} alt="Hero" />*/}
            </div>
        </div>
    );
}