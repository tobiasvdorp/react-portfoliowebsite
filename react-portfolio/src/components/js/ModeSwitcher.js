import React, { useEffect, useState } from "react";

function ModeSwitcher() {
  const [isChecked, setIsChecked] = useState(false);

  // Update the body attribute according to the theme
  const setTheme = (theme) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setIsChecked(theme === "dark");
  };

  // Handle theme change
  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // Initialize theme settings
  useEffect(() => {
    // Check for saved user preference in local storage
    const savedTheme = localStorage.getItem("theme");

    // Check for system-wide preference
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
      setTheme("dark"); // Default to dark mode if no preference is set
    }
  }, []);

  return (
    <div className="page">
      {/* Theme switch */}
      <input
        type="checkbox"
        id="themeSwitch"
        name="theme-switch"
        className="theme-switch__input"
        checked={isChecked}
        onChange={handleThemeChange}
      />
      <label htmlFor="themeSwitch" className="theme-switch__label">
        <span></span>
      </label>
    </div>
  );
}

export default ModeSwitcher;
