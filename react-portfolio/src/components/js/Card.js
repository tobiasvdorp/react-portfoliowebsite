import React, { useState } from "react";

function Card(props) {
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

  const openProject = (projectId) => {
    window.open(`${projectId}.html`, "_blank");
  };

  const projectSkills = [
    { name: "HTML", image: "../images/HTMLlogo.png" },
    { name: "CSS", image: "../images/CSSlogo.png" },
    { name: "TailwindCSS", image: "../images/TailwindCSS.png" },
    { name: "React", image: "../images/reactIMG.png" },
  ];
  return (
    <div
      className={`card ${isExpanded ? "expanded" : ""}`}
      onClick={handleCardClick}
    >
      <div className="front-card">
        <img src={props.imageSrc} alt="Foto" />
        <h3>{props.title}</h3>
        <hr />
        <p>{props.description}</p>
        <hr />
      </div>

      <div className="project-skills">
        {props.skills.map((skill, index) => (
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
        <h3>{props.title}</h3>
        <p>{props.detailDescription}</p>
        <a
          className="button result"
          onClick={() => openProject(props.projectId)}
        >
          See the result <i className="fa-solid fa-eye"></i>
        </a>
      </div>
    </div>
  );
}

export default Card;
