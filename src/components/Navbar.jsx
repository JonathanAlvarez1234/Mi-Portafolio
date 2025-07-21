import React, { useState, useEffect } from "react";
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

  return (
    <nav className={`navbar ${showNavbar ? "active" : "hidden"}`}>
      <div className="logo">MI PORTAFOLIO</div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#skills">Habilidades</a></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/contact">Contactos</Link></li>
      </ul>
    </nav>
  );
}