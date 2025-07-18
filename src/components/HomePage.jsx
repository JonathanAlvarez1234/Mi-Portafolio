import React, { useState, useEffect } from "react";
import "../css/HomePage.css";
import slide1 from "../assets/images/slide-01.jpg";
import slide2 from "../assets/images/slide-02.jpg";
import slide3 from "../assets/images/slide-03.jpg";

export default function HomePage() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Bienvenidos</h1>
        <p>Les presento mi portafolio donde podran encontrar algunos de mis proyectos sobre desarrollo web en los que he trabajado a lo largo de mi carrera como informatico, asi como mis conocimientos y el contacto de mi persona.</p>
      </div>

      <div className="hero-image">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
            >
              <img src={slide} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}