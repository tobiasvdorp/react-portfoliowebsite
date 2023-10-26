import React, { useEffect } from "react";
import useWOW from "./useWOW";
import "../css/custom-animations.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const menuItems = [
    { textKey: "home", link: "#home", animation: "fadeInLeftBig" },
    { textKey: "aboutMe", link: "#aboutme", animation: "fadeInDownBig" },
    { textKey: "projects", link: "#projects", animation: "fadeInDownBig" },
    { textKey: "skills", link: "#skills", animation: "fadeInUpBig" },
    { textKey: "contact", link: "#contact", animation: "fadeInRightBig" },
  ];

  useWOW();
  useEffect(() => {
    const offset = 83;
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const href = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(href);

      if (targetElement) {
        const top =
          window.pageYOffset +
          targetElement.getBoundingClientRect().top -
          offset;
        window.scrollTo({
          top: top,
          behavior: "smooth",
        });
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Cleanup
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <header className="header">
      <a
        href="#home"
        className="logo animate__animated animate__fadeInRightBig"
      >
        Tobias
      </a>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className={`item animate__animated animate__${item.animation}`}
            >
              {t(item.textKey)}
            </a>
          </li>
        ))}
        <li>
          <LanguageSwitcher />
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
