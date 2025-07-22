import React from "react";
import { motion } from "framer-motion";
import "../css/HomePage.css";
import profileImage from "../assets/images/MifottoM.png";
import { FaGithub } from "react-icons/fa";

export default function HomePage() {
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

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      className="hero"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="content-container">
        <motion.div
          className="welcome-card"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          >
            ¡Hola y bienvenidos!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Este es mi portafolio personal donde podrán conocer más sobre mí, explorar algunos de mis proyectos de desarrollo web, Backend y Frontend, y descubrir mis habilidades como desarrollador comprometido con crear soluciones funcionales y elegantes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            Espero sea una experiencia amigable y que me conozcan a mí como a mi trabajo.
          </motion.p>
        </motion.div>

        <motion.div
          className="actions-card"
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.a
            href="https://github.com/JonathanAlvarez1234"
            target="_blank"
            rel="noopener noreferrer"
            className="github-btn"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <FaGithub size={24} style={{ marginRight: "8px" }} />
            </motion.div>
            Ver Mi GitHub
          </motion.a>

          <motion.a
            href="/public/CV-Jonathan-Alvarez.pdf"
            download
            className="cv-btn"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(26, 188, 156, 0.3)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="profile-card"
        variants={profileVariants}
        whileHover={{
          scale: 1.05,
          rotateY: 5,
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
      >
        <motion.img
          src={profileImage}
          alt="Jonathan Alvarez"
          whileHover={{
            scale: 1.1,
            transition: { type: "spring", stiffness: 300 }
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Jonathan Alvarez
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          Edad: 18 años
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Desarrollador Full-Stack
        </motion.p>
      </motion.div>
    </motion.section>
  );
}