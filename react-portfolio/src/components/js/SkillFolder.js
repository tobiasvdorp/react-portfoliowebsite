import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import HTMLlogo from "../images/HTMLlogo.png";
import CSSlogo from "../images/CSSlogo.png";
import ReactIMG from "../images/reactIMG.png";
import TailwindCSS from "../images/TailwindCSS.png";
import Elementor from "../images/Elementor.png";
import WordPress from "../images/WordPress.png";
import { TypeAnimation } from "react-type-animation";
import "../css/skills.css";

function SkillFolder() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const savedMotionPref = localStorage.getItem("reduceMotion");
    setShouldReduceMotion(savedMotionPref === "true");
  }, []);

  const skills = [
    {
      name: "HTML",
      description:
        "HTML (HyperText Markup Language) is the standard markup language used to create web pages and web applications.",
      imageSrc: HTMLlogo,
      skillLevel: "I'm very comfortable with HTML and use it almost daily.",
    },
    {
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML.",
      imageSrc: CSSlogo,
      skillLevel:
        "I'm strong in fundamentals; I built this site using plain CSS.",
    },
    {
      name: "React",
      description:
        "React is a JavaScript library for building user interfaces, especially single-page applications where you need a fast and interactive user experience.",
      imageSrc: ReactIMG,
      skillLevel:
        "I'm still getting the hang of React, but I know my way around the basics.",
    },
    {
      name: "TailwindCSS",
      description:
        "TailwindCSS is a utility-first CSS framework that allows for highly customizable designs without leaving your HTML.",
      imageSrc: TailwindCSS,
      skillLevel:
        "I'm confident with Tailwind and can create a good layout with it.",
    },
    {
      name: "Elementor",
      description:
        "Elementor is a drag-and-drop page builder for WordPress, allowing you to create complex layouts without needing to write any code.",
      imageSrc: Elementor,
      skillLevel:
        "I'm good with Elementor and have built a full website with it. You can see the result in my projects.",
    },
    {
      name: "WordPress",
      description:
        "WordPress is a popular content management system (CMS) that allows you to create and manage websites and blogs without having to code from scratch.",
      imageSrc: WordPress,
      skillLevel:
        "I've built a full website in WordPress and know the basics pretty well. You can see the result in my projects.",
    },
  ];

  const selectSkill = (name) => {
    const skill = skills.find((skill) => skill.name === name);
    setSelectedSkill(skill);
  };

  return (
    <div className="skills" id="skills">
      <h2 className="title2">My skills.</h2>
      <h3 className="readmore">Power-ups acquired.</h3>
      <div className="skill-folder-container">
        <div className="folder">
          <div className="skills-column">
            <ul>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  onClick={selectSkill}
                  imageSrc={skill.imageSrc}
                  isActive={selectedSkill && selectedSkill.name === skill.name}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </ul>
          </div>
          <div className="skills-divider"></div>
          <div className="skills-description">
            {selectedSkill ? (
              <>
                <div id="whatisit">
                  <h3>What is it?</h3>
                  <TypeAnimation
                    key={`description-${selectedSkill.name}`}
                    sequence={[selectedSkill.description, 1000]}
                    speed={90}
                    style={{ color: "var(--text)" }}
                  />
                </div>
                <h3>How skilled am I?</h3>
                <TypeAnimation
                  key={`skill-level-${selectedSkill.name}`}
                  sequence={[selectedSkill.skillLevel, 1000]}
                  speed={90}
                  style={{ color: "var(--text)" }}
                />
              </>
            ) : (
              <p
                id="select-skill"
                className={`${
                  !shouldReduceMotion
                    ? "animate__fadeInDown wow animate__animated animation-delay-1s"
                    : ""
                }`}
              >
                Select a skill to read more about it.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillFolder;
