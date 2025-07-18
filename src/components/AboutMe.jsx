import React from "react";
import "../css/AboutMe.css";
import aboutImg from "../assets/images/Aboutme.jpeg";

export default function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={aboutImg} alt="Acerca de mí" />
      </div>
      <div className="about-content">
        <h2>Acerca de mí</h2>
        <p>
          ¡Hola! Soy Jonathan Alvarez, un apasionado por la tecnología y el
          desarrollo web. Me encanta crear soluciones creativas y funcionales,
          aprender cosas nuevas y trabajar en equipo para lograr grandes
          proyectos. Este portafolio es una muestra de mi trayectoria como
          informático.
        </p>
      </div>
    </section>
  );
}