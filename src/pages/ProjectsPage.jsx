import React from "react";
import "../css/Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import javafxLogo from "../assets/images/javafx.png"

export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Un proyecto en el cual se pueden adoptar mascotas para las personas que necesitan a alguien",
      github: "https://github.com/JonathanAlvarez1234/AdoptionSystem",
      image: javafxLogo,
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <motion.section
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="back-home">
        <Link to="/" className="btn">🏠 Volver a Inicio</Link>
      </div>

      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              Ver repositorio
            </a>
            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </motion.section>
  );
}