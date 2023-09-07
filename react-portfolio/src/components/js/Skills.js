import React, { useState, useEffect } from "react";
import "../css/skills.css";
import Skillcard from "./Skillcard";
import HTML from "../images/HTMLlogo.png";
import CSS from "../images/CSSlogo.png";
import ReactIMG from "../images/reactIMG.png";
import TailwindCSS from "../images/TailwindCSS.png";
import Elementor from "../images/Elementor.png";
import WordPress from "../images/WordPress.png";

function Skills() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window
    ) {
      setIsTouchDevice(true);
    }
  }, []);

  return (
    <>
      <div className="skills">
        <h2 className="title2">My skills.</h2>
        <h3 className="readmore">
          {isTouchDevice
            ? "Click on a card to read more."
            : "Hover on a card to read more."}
        </h3>

        <div id="skills">
          <Skillcard
            image={HTML}
            skillDescr="Highly proficient, comfortable with the language."
            delay="0.4s"
          />
          <Skillcard
            image={CSS}
            skillDescr="Strong in fundamentals; I built this site using plain CSS"
            delay="0.8s"
          />
          <Skillcard
            image={ReactIMG}
            skillDescr="Beginner level, I know the basics"
            delay="1.2s"
          />
          <Skillcard
            image={TailwindCSS}
            skillDescr="Intermediate; have some experience."
            delay="1.6s"
          />
          <Skillcard
            image={Elementor}
            skillDescr="Skilled, built a complete website."
            delay="2.0s"
          />
          <Skillcard
            image={WordPress}
            skillDescr="Built a complete website, comfortable with the basics."
            delay="2.4s"
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
