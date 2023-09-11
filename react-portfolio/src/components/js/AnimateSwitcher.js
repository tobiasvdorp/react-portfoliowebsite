import React, { useState, useEffect } from "react";
import "../../App.css";

const AnimateSwitcher = () => {
  const [reduceMotion, setReduceMotion] = useState(() => {
    const savedMotionPref = localStorage.getItem("reduceMotion");
    if (savedMotionPref !== null) {
      return JSON.parse(savedMotionPref);
    }
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    document.body.dataset.reduceMotion = reduceMotion ? "true" : "false";
    localStorage.setItem("reduceMotion", JSON.stringify(reduceMotion));
  }, [reduceMotion]);

  const toggleMotion = () => {
    setReduceMotion((prevState) => !prevState);
  };

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        id="animate"
        className="animate-checkbox"
        checked={!reduceMotion} // Hier veranderen we de checked staat
        onChange={toggleMotion}
      />
      <label
        htmlFor="animate"
        className={`toggle ${!reduceMotion ? "checked" : ""}`} // Hier veranderen we de checked klasse
      >
        <span className="toggle__handler"></span>
      </label>
    </div>
  );
};

export default AnimateSwitcher;
