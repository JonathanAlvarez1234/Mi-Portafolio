import React from "react";
import "../css/Skills.css";

const skills = [
    {
        name: "HTML5",
        //image: require("../assets/skills/html5.png"),
        level: 95,
    },
    {
        name: "CSS3",
        //image: require("../assets/skills/css3.png"),
        level: 90,
    },
    {
        name: "JavaScript",
        //image: require("../assets/skills/javascript.png"),
        level: 85,
    },
    {
        name: "React",
        //image: require("../assets/skills/react.png"),
        level: 80,
    },
    {
        name: "Node.js",
        //image: require("../assets/skills/nodejs.png"),
        level: 75,
    },
    {
        name: "Python",
        //image: require("../assets/skills/python.png"),
        level: 70,
    },
    {
        name: "Java",
        //image: require("../assets/skills/java.png"),
        level: 65,
    },
    {
        name: "MongoDB",
        //image: require("../assets/skills/mongodb.png"),
        level: 75,
    },
    {
        name: "MySQL",
        //image: require("../assets/skills/mysql.png"),
        level: 80,
    },
    {
        name: "Git",
        //image: require("../assets/skills/git.png"),
        level: 85,
    },
    {
        name: "Docker",
        //image: require("../assets/skills/docker.png"),
        level: 60,
    },
    {
        name: "TypeScript",
        //image: require("../assets/skills/typescript.png"),
        level: 70,
    },
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