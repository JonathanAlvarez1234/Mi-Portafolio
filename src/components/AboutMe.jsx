import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/AboutMe.css";
import aboutImg from "../assets/images/Aboutme.jpeg";
import { Link } from "react-router-dom";

export default function AboutMe() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      className="about-section"
      id="about"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        className="about-image"
        variants={imageVariants}
      >
        <img src={aboutImg} alt="Acerca de mí" />
      </motion.div>

      <div className="about-cards">
        <motion.div
          className="card card-wide"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <h2>Acerca de mí</h2>
          <p>
            ¡Hola! Soy Jonathan Alvarez, un apasionado por la tecnología y el
            desarrollo web. Me encanta crear soluciones creativas y funcionales,
            aprender cosas nuevas y trabajar en equipo para lograr grandes
            proyectos. Este portafolio es una muestra de mi trayectoria como
            informático.
          </p>
        </motion.div>

        <motion.div
          className="card-small-group"
          variants={itemVariants}
        >
          <motion.div
            className="card card-small"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>Mis proyectos</h3>
            <p>Algunos de los proyectos en los que he trabajado.</p>
            <Link
              to="/projects"
              className="btn"
              style={{ display: 'inline-block' }}
            >
              Ver proyectos
            </Link>
          </motion.div>
          <motion.div
            className="card card-small"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 35px rgba(0, 0, 0, 0.15)",
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>Mis contactos</h3>
            <p>Formas de ponerte en contacto conmigo.</p>
            <Link
              to="/contact"
              className="btn"
              style={{ display: 'inline-block' }}
            >
              Ver contactos
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="card card-wide"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <h3>Más sobre mí</h3>
          <p>Me encanta aprender y superarme cada día. Me gusta que cada cosa sigue un orden para realizar algo increible. mi meta de corto plazo es graduarme de la universidad sobre ingeníeria en sistemas. Mi meta de
              largo plazo es trabajar en Ciber Seguridad.  
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}