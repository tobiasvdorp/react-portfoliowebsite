import React, { useEffect, useState } from "react";
import "../css/switchers.css";

function ModeSwitcher() {
  const [isChecked, setIsChecked] = useState(
    document.body.getAttribute("data-theme") === "dark"
  );

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
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  }, []);

  return (
    <div className="toggleWrapper">
      <input
        type="checkbox"
        id="dn"
        className="dn"
        checked={isChecked}
        onChange={handleThemeChange}
      />
      <label htmlFor="dn" className={`toggle ${isChecked ? "checked" : ""}`}>
        <span className="toggle__handler"></span>
      </label>
    </div>
  );
}

export default ModeSwitcher;
