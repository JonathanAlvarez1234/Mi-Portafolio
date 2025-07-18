import React from "react";
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
    { name: "HTML5", image: html5, level: 95 },
    { name: "CSS3", image: css3, level: 90 },
    { name: "JavaScript", image: javascript, level: 85 },
    { name: "React", image: reactLogo, level: 80 },
    { name: "Node.js", image: nodeJSLogo, level: 95 },
    //{ name: "Express", image: css3, level: 90 },
    { name: "Java", image: javaLogo, level: 85 },
    { name: "MongoDB", image: mongoDbLogo, level: 80 },
    { name: "MySQL", image: mysqlLogo, level: 95 },
    { name: "Git", image: gitLogo, level: 90 },
    { name: "JavaFX", image: javafxLogo, level: 85 },
    { name: "SpringBoot", image: springBootLogo, level: 80 },
];

export default function Skills() {
    return (
        <section className="skills-section">
            <h2>Mis Habilidades</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.image} alt={skill.name} className="skill-image" />
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                        <p className="percentage">{skill.level}%</p>
                    </div>
                ))}
            </div>
        </section>
    );
}