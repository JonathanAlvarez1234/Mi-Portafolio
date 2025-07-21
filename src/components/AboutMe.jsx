import React from "react";
import "../css/AboutMe.css";
import aboutImg from "../assets/images/Aboutme.jpeg";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <section className="about-section" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="Acerca de mí" />
      </div>

      <div className="about-cards">
        <div className="card card-wide">
          <h2>Acerca de mí</h2>
          <p>
            ¡Hola! Soy Jonathan Alvarez, un apasionado por la tecnología y el
            desarrollo web. Me encanta crear soluciones creativas y funcionales,
            aprender cosas nuevas y trabajar en equipo para lograr grandes
            proyectos. Este portafolio es una muestra de mi trayectoria como
            informático.
          </p>
        </div>

        <div className="card-small-group">
          <div className="card card-small">
            <h3>Mis proyectos</h3>
            <p>Algunos de los proyectos en los que he trabajado.</p>
            <Link to="/projects" className="btn">Ver proyectos</Link>
          </div>
          <div className="card card-small">
            <h3>Mis contactos</h3>
            <p>Formas de ponerte en contacto conmigo.</p>
            <Link to="/contact" className="btn">Ver contactos</Link>
          </div>
        </div>

        <div className="card card-wide">
          <h3>Más sobre mí</h3>
          <p>Me encanta aprender y superarme cada día.</p>
        </div>
      </div>
    </section>
  );
}