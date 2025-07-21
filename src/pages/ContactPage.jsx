import React from "react";
import "../css/ContactPage.css";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            className="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <section className="contact-page">
                <div className="back-home">
                    <Link to="/" className="btn">🏠 Volver a Inicio</Link>
                </div>

                <div className="contact-card">
                    <FaGithub size={50} />
                    <h3>GitHub</h3>
                    <a href="https://github.com/JonathanAlvarez1234" target="_blank" rel="noopener noreferrer" className="btn">Ir a GitHub</a>
                </div>

                <div className="contact-card">
                    <FaEnvelope size={50} />
                    <h3>Email</h3>
                    <a href="mailto:jonyalvarez.2020@gmail.com" className="btn">Enviar Email</a>
                </div>

                <div className="contact-card">
                    <FaLinkedin size={50} />
                    <h3>LinkedIn</h3>
                    <a href="https://linkedin.com/in/usuario" target="_blank" rel="noopener noreferrer" className="btn">Ver LinkedIn</a>
                </div>

                <div className="contact-card">
                    <FaBriefcase size={50} />
                    <h3>Computrabajo</h3>
                    <a href="https://www.computrabajo.com/usuario" target="_blank" rel="noopener noreferrer" className="btn">Ver Perfil</a>
                </div>
            </section>
        </motion.section>
    );
}