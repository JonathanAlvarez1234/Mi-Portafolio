import React from "react";
import "../css/HomePage.css";
import profileImage from "../assets/images/git.jpg";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  return (
    <section className="hero" id="home">
      <div className="content-container">
        <div className="welcome-card">
          <h1>¡Hola y bienvenidos!</h1>
          <p>
            Este es mi portafolio personal donde podrán conocer más sobre mí, explorar algunos de mis proyectos de desarrollo web, Backend y Frontend, y descubrir mis habilidades como desarrollador comprometido con crear soluciones funcionales y elegantes.
          </p>
          <p>
            
          </p>
          <p>
            Espero sea una experincia amigable y que me conozcan a mí como a mi trabajo.
          </p>
        </div>

        <div className="actions-card">
          <a
            href="https://github.com/JonathanAlvarez1234"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
          >
            <FaGithub size={24} style={{ marginRight: "8px" }} />
            Ver Mi GitHub
          </a>

          <a
            href="/CV-Jonathan-Alvarez.pdf"
            download
            className="cv-btn"
          >
            Descargar CV
          </a>
        </div>
      </div>

      <div className="profile-card">
        <img src={profileImage} alt="Jonathan Alvarez" />
        <h2>Jonathan Alvarez</h2>
        <p>Edad: 18 años</p>
        <p>Desarrollador Full-Stack</p>
      </div>
    </section>
  );
}