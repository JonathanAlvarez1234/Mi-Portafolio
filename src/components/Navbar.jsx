import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        staggerChildren: 0.1
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const itemVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    hidden: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <AnimatePresence mode="wait">
      {showNavbar && (
        <motion.nav
          className="navbar active"
          variants={navVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key="navbar"
        >
          <motion.div
            className="logo"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              color: "#0ff7c4",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            MI PORTAFOLIO
          </motion.div>
          <motion.ul variants={itemVariants}>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#0ff7c4",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/">Inicio</Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#0ff7c4",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#about">Sobre mi</a>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#0ff7c4",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#skills">Habilidades</a>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#0ff7c4",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects">Proyectos</Link>
            </motion.li>
            <motion.li
              whileHover={{
                scale: 1.1,
                color: "#0ff7c4",
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">Contactos</Link>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}