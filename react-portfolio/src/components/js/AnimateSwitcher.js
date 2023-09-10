import React, { useState, useEffect } from "react";
import "../../App.css";

const AnimateSwitcher = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for saved preference in local storage
    const savedMotionPref = localStorage.getItem("reduceMotion");
    // Check for system preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (savedMotionPref !== null) {
      setReduceMotion(JSON.parse(savedMotionPref));
    } else if (prefersReducedMotion) {
      setReduceMotion(true);
    } else {
      setReduceMotion(false);
    }
  }, []);

  useEffect(() => {
    // Update body dataset attribute
    document.body.dataset.reduceMotion = reduceMotion ? "true" : "false";
    // Save the preference
    localStorage.setItem("reduceMotion", JSON.stringify(reduceMotion));
  }, [reduceMotion]);

  const toggleMotion = () => {
    setReduceMotion(!reduceMotion);
  };

  return (
    <div className="animate-switcher">
      <div
        className={`animate-switcher__half ${
          reduceMotion ? "" : "animate-switcher__half--active"
        }`}
        onClick={toggleMotion}
      >
        On
      </div>
      <div
        className={`animate-switcher__half ${
          reduceMotion ? "animate-switcher__half--active" : ""
        }`}
        onClick={toggleMotion}
      >
        Off
      </div>
    </div>
  );
};

export default AnimateSwitcher;
