import React from "react";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MI PORTAFOLIO</div>
      <ul>
        <li>Inicio</li>
        <li>Sobre mi</li>
        <li>Habilidades</li>
        <li>Proyectos</li>
        <li>Contactos</li>
      </ul>
    </nav>
  );
}