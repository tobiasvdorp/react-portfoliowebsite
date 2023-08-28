import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Nieuwe import

function Card(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); // Verkrijg de navigatiefunctie

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
          <img key={index} src={skill} alt="" />
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
          See the result{" "}
        </a>
      </div>
    </div>
  );
}

export default Card;
