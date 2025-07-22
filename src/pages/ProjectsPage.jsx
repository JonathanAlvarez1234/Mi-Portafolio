import React from "react";
import "../css/Projects.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aSystem from "../assets/images/adoptionSystem.png";
import gOp from "../assets/images/GestorOp.png";
import NexusLogo from "../assets/images/Nexus.jpeg";
import CoperexLogo from "../assets/images/CoperexLogo.png";
import ControlSLogo from "../assets/images/Student.png";

export default function Projects() {
  const projects = [
    {
      title: "Sistema de adopción de mascotas",
      description: "Un proyecto en el cual se pueden adoptar mascotas para las personas que necesitan a alguien, agendar una cita para adoptar una mascota. Este proyecto se trabajo con JavaScript y tecnolgias como Node.js",
      github: "https://github.com/JonathanAlvarez1234/AdoptionSystem",
      image: aSystem,
      tech: ["Node.js", "MongoDB", "JavaScript"],
    },
    {
      title: "Gestor de Opiniones",
      description: "Un proyecto en el cual se pueden hacer publicaciones y comentarios en dichas publicaciones. Este proyecto se trabajo con JavaScript y tecnolgias como Node.js",
      github: "https://github.com/JonathanAlvarez1234/GestorOp",
      image: gOp,
      tech: ["Node.js", "MongoDB", "JavaScript"],
    },
    {
      title: "Banco",
      description: "Un proyecto que esta creado a base de Backen y Frontend en el cual un usuario puede solicitar una cuenta bancaria y donde puede ver sus salidar y entradas de dinero entre otras cosas. Este proyecto se trabajo con JavaScript, React y tecnolgias como Node.js",
      github: "https://github.com/KinalTrabajos/Banco-Backend/tree/main",
      image: NexusLogo,
      tech: ["Node.js", "MongoDB", "JavaScript", "React"],
    },
    {
      title: "Coperex",
      description: "Un proyecto desarrollado en Backend que permite la administracón de diferentes empresas. Este proyecto se trabajo con JavaScript y tecnolgias como Node.js",
      github: "https://github.com/JonathanAlvarez1234/LAB3-COPEREX",
      image: CoperexLogo,
      tech: ["Node.js", "MongoDB", "JavaScript", "ExcelJS"],
    },
    {
      title: "Control de Estudiantes",
      description: "Un proyecto en el cual se pueden hacer publicaciones y comentarios en dichas publicaciones. Este proyecto se trabajo con JavaScript y tecnolgias como Node.js",
      github: "https://github.com/JonathanAlvarez1234/StudentControl",
      image: ControlSLogo,
      tech: ["Node.js", "MongoDB", "JavaScript"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      className="projects-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit={{
        opacity: 0,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="back-home"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link to="/" className="btn">🏠 Volver a Inicio</Link>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
            y: -5,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          <motion.div
            className="project-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {project.description}
            </motion.p>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 8px 20px rgba(19, 75, 242, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Ver repositorio
            </motion.a>
            <motion.div
              className="tech-tags"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  className="tech-tag"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#037a65",
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  {t}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="project-image"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
}