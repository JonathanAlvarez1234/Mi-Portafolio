import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import html5 from "../assets/images/html5.png";
import css3 from "../assets/images/css3.svg";
import javascript from "../assets/images/javascript.png";
import reactLogo from "../assets/images/react.png";
import nodeJSLogo from "../assets/images/nodeJS.png";
import javaLogo from "../assets/images/java.jpg";
import mongoDbLogo from "../assets/images/mongo-db.svg";
import mysqlLogo from "../assets/images/mysql.png";
import gitLogo from "../assets/images/git.jpg";
import javafxLogo from "../assets/images/javafx.png";
import springBootLogo from "../assets/images/springboot.png";
import "../css/Skills.css";

const skills = [
    { name: "HTML5", image: html5, level: 85 },
    { name: "CSS3", image: css3, level: 50 },
    { name: "JavaScript", image: javascript, level: 85 },
    { name: "React", image: reactLogo, level: 90 },
    { name: "Node.js", image: nodeJSLogo, level: 85 },
    { name: "Java", image: javaLogo, level: 95 },
    { name: "MongoDB", image: mongoDbLogo, level: 95 },
    { name: "MySQL", image: mysqlLogo, level: 95 },
    { name: "Git", image: gitLogo, level: 90 },
    { name: "JavaFX", image: javafxLogo, level: 85 },
    { name: "SpringBoot", image: springBootLogo, level: 80 },
];

export default function Skills() {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6
            }
        }
    };

    const progressVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1.5,
                ease: "easeOut",
                delay: 0.5
            }
        })
    };

    return (
        <motion.section
            ref={ref}
            className="skills-section"
            id="skills"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                Mis Habilidades
            </motion.h2>
            <motion.div
                className="skills-grid"
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.08,
                            y: -10,
                            rotateY: 5,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img
                            src={skill.image}
                            alt={skill.name}
                            className="skill-image"
                            initial={{ rotate: 0 }}
                            whileHover={{
                                rotate: [0, -10, 10, -5, 0],
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }}
                        />
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                        >
                            {skill.name}
                        </motion.h3>
                        <div className="progress-bar">
                            <motion.div
                                className="progress"
                                variants={progressVariants}
                                custom={skill.level}
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                            ></motion.div>
                        </div>
                        <motion.p
                            className="percentage"
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: 1.5 + index * 0.05 }}
                        >
                            {skill.level}%
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}