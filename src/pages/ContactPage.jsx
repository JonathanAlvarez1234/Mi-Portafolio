import React from "react";
import "../css/ContactPage.css";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope, FaLinkedin, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const iconVariants = {
        hover: {
            rotate: [0, -10, 10, -10, 0],
            scale: 1.2,
            transition: {
                duration: 0.5,
                type: "spring",
                type: "keyframes",
                stiffness: 300
            }
        }
    };

    return (
        <motion.section
            className="contact-page"
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
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link to="/" className="btn">🏠 Volver a Inicio</Link>
            </motion.div>

            <motion.div
                className="contact-card"
                variants={itemVariants}
                whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300 }
                }}
            >
                <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <FaGithub size={50} />
                </motion.div>
                <h3>GitHub</h3>
                <motion.a
                    href="https://github.com/JonathanAlvarez1234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ir a GitHub
                </motion.a>
            </motion.div>

            <motion.div
                className="contact-card"
                variants={itemVariants}
                whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300 }
                }}
            >
                <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <FaEnvelope size={50} />
                </motion.div>
                <h3>Email</h3>
                <motion.a
                    href="mailto:jonyalvarez.2020@gmail.com"
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Enviar Email
                </motion.a>
            </motion.div>

            <motion.div
                className="contact-card"
                variants={itemVariants}
                whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300 }
                }}
            >
                <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <FaLinkedin size={50} />
                </motion.div>
                <h3>LinkedIn</h3>
                <motion.a
                    href="https://www.linkedin.com/in/jonathan-estuardo-alvarez-aguilar-18707036a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver LinkedIn
                </motion.a>
            </motion.div>

            <motion.div
                className="contact-card"
                variants={itemVariants}
                whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                    transition: { type: "spring", stiffness: 300 }
                }}
            >
                <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                >
                    <FaBriefcase size={50} />
                </motion.div>
                <h3>Computrabajo</h3>
                <motion.a
                    href="https://candidato.gt.computrabajo.com/candidate/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Ver Perfil
                </motion.a>
            </motion.div>
        </motion.section>
    );
}