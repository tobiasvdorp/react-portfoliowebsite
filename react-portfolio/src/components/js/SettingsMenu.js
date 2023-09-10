import React, { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";
import AnimateSwitcher from "./AnimateSwitcher";
import "animate.css/animate.min.css"; // Importeer de animate.css bibliotheek

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="settings-menu">
      <div className="gear">
        <i
          className="fa-solid fa-gear fa-2xl settings-button"
          onClick={openMenu}
        ></i>
      </div>
      <div
        className={`settings-content ${
          isOpen ? "active animate__animated animate__fadeIn" : ""
        }`}
      >
        <div className="left">
          <h4>Settings</h4>
          <button onClick={closeMenu} className="close-button button">
            X
          </button>
        </div>
        <div className="theme">
          <p>Theme</p>
          <ModeSwitcher />
        </div>
        <div className="anima">
          <p>Animations</p>
          <AnimateSwitcher />
        </div>
      </div>
    </div>
  );
};

export default SettingsMenu;
