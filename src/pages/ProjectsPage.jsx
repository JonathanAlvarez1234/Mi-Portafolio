import React from "react";
import "../css/Projects.css";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Descripción breve del proyecto 1.",
      github: "https://github.com/usuario/proyecto1",
      image: "https://via.placeholder.com/400x200",
      tech: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="projects-page">
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
    </section>
  );
}