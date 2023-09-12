import React, { useState } from "react";
import ModeSwitcher from "./ModeSwitcher";
import AnimateSwitcher from "./AnimateSwitcher";
import "animate.css/animate.min.css";
import "../css/responsive.css";
const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState("animate__bounceInLeft");

  const openMenu = () => {
    setAnimationClass("animate__bounceOutLeft");
    setTimeout(() => {
      setAnimationClass("animate__bounceInLeft");
      setIsOpen(true);
    }, 300);
  };

  const closeMenu = () => {
    setAnimationClass("animate__bounceOutLeft");

    setTimeout(() => {
      setAnimationClass("animate__bounceInLeft");
    }, 300);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className={`settings-menu ${
        isOpen ? "active" : ""
      } animate__animated ${animationClass}`}
    >
      <div className={`gear ${isOpen ? "active" : ""}`}>
        <i
          className="fa-solid fa-gear fa-2xl settings-button"
          onClick={openMenu}
        ></i>
      </div>
      <div className={`settings-content ${isOpen ? "active" : ""}`}>
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
