import React from "react";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MI PORTAFOLIO</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Chefs</li>
        <li>Features</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}