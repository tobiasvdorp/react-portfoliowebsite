import React from "react";

function Skillcard({ image, skillName, skillDescr }) {
  return (
    <div className="skill-card">
      <img src={image} alt={skillName} />
      <div className="tooltip">
        <p>{skillDescr}</p>
      </div>
    </div>
  );
}

export default Skillcard;
