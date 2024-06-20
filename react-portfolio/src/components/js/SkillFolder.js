import React, { useState, useEffect } from "react";
import Skill from "./Skill";
import HTMLlogo from "../images/HTMLlogo.png";
import CSSlogo from "../images/CSSlogo.png";
import ReactIMG from "../images/reactIMG.png";
import next from "../images/next.png";
import builder from "../images/builder.avif";
import TailwindCSS from "../images/TailwindCSS.png";
import Elementor from "../images/Elementor.png";
import WordPress from "../images/WordPress.png";
import { TypeAnimation } from "react-type-animation";
import "../css/skills.css";
import { useTranslation } from "react-i18next";

function SkillFolder() {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const savedMotionPref = localStorage.getItem("reduceMotion");
    setShouldReduceMotion(savedMotionPref === "true");
  }, []);

  const skills = [
    {
      name: "HTML",
      description: t("HTML_description"),
      imageSrc: HTMLlogo,
      skillLevel: t("HTML_skillLevel"),
    },
    {
      name: "CSS",
      description: t("CSS_description"),
      imageSrc: CSSlogo,
      skillLevel: t("CSS_skillLevel"),
    },
    {
      name: "React",
      description: t("React_description"),
      imageSrc: ReactIMG,
      skillLevel: t("React_skillLevel"),
    },
    {
      name: "NextJS",
      description: t("NextJS_description"),
      imageSrc: next,
      skillLevel: t("NextJS_skillLevel"),
    },
    {
      name: "TailwindCSS",
      description: t("TailwindCSS_description"),
      imageSrc: TailwindCSS,
      skillLevel: t("TailwindCSS_skillLevel"),
    },
    {
      name: "Elementor",
      description: t("Elementor_description"),
      imageSrc: Elementor,
      skillLevel: t("Elementor_skillLevel"),
    },
    {
      name: "Builder.io",
      description: t("Builderio_description"),
      imageSrc: builder,
      skillLevel: t("Builderio_skillLevel"),
    },
    {
      name: "WordPress",
      description: t("WordPress_description"),
      imageSrc: WordPress,
      skillLevel: t("WordPress_skillLevel"),
    },
  ];

  const selectSkill = (name) => {
    const skill = skills.find((skill) => skill.name === name);
    setSelectedSkill(skill);
  };

  return (
    <div className="skills" id="skills">
      <h2 className="title2">{t("skills_title")}</h2>
      <h3 className="readmore">{t("skills_under")}</h3>
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
                  <h3>{t("what_isit")}</h3>
                  <TypeAnimation
                    key={`description-${selectedSkill.name}`}
                    sequence={[selectedSkill.description, 1000]}
                    speed={90}
                    style={{ color: "var(--text)" }}
                  />
                </div>
                <h3>{t("how_skilled")}</h3>
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
                {t("skills_select")}{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillFolder;
