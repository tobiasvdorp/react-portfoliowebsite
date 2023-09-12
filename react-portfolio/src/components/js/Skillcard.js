import React, { useState } from "react";

function Skillcard({ image, skillName, skillDescr, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const delayStyle = {
    animationDelay: delay,
  };

  return (
    <div
      className={`skill-card wow animate__animated animate__flipInY`}
      style={delayStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={skillName} />
      <div
        className={`tooltip ${
          isHovered ? "animate__flipInX animate__animated" : ""
        }`}
      >
        <p>{skillDescr}</p>
      </div>
    </div>
  );
}

export default Skillcard;
