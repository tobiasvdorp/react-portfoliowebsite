import React, { useEffect } from "react";
import useWOW from "./useWOW";
import "../css/custom-animations.css";

const menuItems = [
  { text: "Home", link: "#home", animation: "fadeInLeftBig" },
  { text: "About me", link: "#aboutme", animation: "fadeInDownBig" },
  { text: "Projects", link: "#projects", animation: "fadeInDownBig" },
  { text: "Skills", link: "#skills", animation: "fadeInUpBig" },
  { text: "Contact", link: "#contact", animation: "fadeInRightBig" },
];

function Navbar() {
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
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar;
