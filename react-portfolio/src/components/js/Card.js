import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function Card({
  title,
  imageSrc,
  description,
  skills,
  detailDescription,
  projectLocation,
  className,
  wowDelay,
}) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setIsExpanded(false);
  };

  const openProject = (projectLocation) => {
    window.open(projectLocation, "_blank");
  };

  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""} ${className} wow`}
      data-wow-delay={wowDelay}
      onClick={handleCardClick}
    >
      <div className="front-card">
        <img src={imageSrc} alt="Foto" />
        <h3>{title}</h3>
        <hr />
        <div className="cardtekst">
          <p>{description}</p>
        </div>
        <hr />
      </div>

      <div className="project-skills">
        {skills.map((skill, index) => (
          <div className="skill-tooltip" key={index}>
            <img src={skill.image} alt="" />
            <span className="tooltip-text">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="project-details">
        <div className="close">
          <button className="close-button button" onClick={handleCloseClick}>
            X
          </button>
        </div>
        <h3>{title}</h3>
        <p>{detailDescription}</p>
        <button
          className="button result"
          onClick={() => openProject(projectLocation)}
        >
          {t("See the result")} <i className="fa-solid fa-eye"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
