import React, { useEffect, useRef } from "react";
import useWOW from "./useWOW";
import "../css/custom-animations.css";
function Navbar() {
  useWOW();

  return (
    <header className="header">
      <a href="" className="logo animate__animated animate__fadeInRightBig">
        Tobias
      </a>
      <input className="menu-btn " type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a
            href="#home"
            className="item animate__animated animate__fadeInLeftBig"
          >
            {" "}
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="item animate__animated animate__fadeInDownBig"
          >
            About me
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="item animate__animated animate__fadeInUpBig"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="item animate__animated animate__fadeInDownBig"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="item animate__animated animate__fadeInRightBig"
          >
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
