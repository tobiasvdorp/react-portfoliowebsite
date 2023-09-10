import React, { useEffect, useState } from "react";
import "../css/switchers.css";

function ModeSwitcher() {
  const [isChecked, setIsChecked] = useState(false);

  const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsChecked(theme === "dark");
  };

  const handleThemeChange = () => {
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    } else if (prefersLight) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  return (
    <div className="mode-switcher__box" onClick={handleThemeChange}>
      <div
        className={`mode-switcher__half ${
          isChecked ? "" : "mode-switcher__half--active"
        }`}
      >
        Light
      </div>
      <div
        className={`mode-switcher__half ${
          isChecked ? "mode-switcher__half--active" : ""
        }`}
      >
        Dark
      </div>
    </div>
  );
}

export default ModeSwitcher;
