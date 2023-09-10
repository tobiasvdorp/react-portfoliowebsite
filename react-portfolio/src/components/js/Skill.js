import React from "react";
import "animate.css/animate.min.css";
import useWOW from "./useWOW";

function Skill({ name, onClick, imageSrc, isActive }) {
  const shouldReduceMotion = document.body.dataset.reduceMotion === "true";

  return (
    <li
      onClick={() => onClick(name)}
      className={`skill ${isActive ? "active" : ""} ${
        !shouldReduceMotion ? "animate__backInLeft wow animate__animated" : ""
      }`}
    >
      <img src={imageSrc} alt={`${name} logo`} />
      {name}
    </li>
  );
}

export default Skill;
