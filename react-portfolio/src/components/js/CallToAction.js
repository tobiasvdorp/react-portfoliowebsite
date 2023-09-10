import React from "react";
import useWOW from "./useWOW";
import { TypeAnimation } from "react-type-animation";
import ModeSwitcher from "./ModeSwitcher";
import AnimateSwitcher from "./AnimateSwitcher";

function CallToAction() {
  useWOW();
  return (
    <div className="title">
      <h1 className="animate__animated animate__slideInDown">
        Hi, <br />
        <TypeAnimation
          sequence={["I'm Tobias.", 1000]}
          speed={50}
          repeat={Infinity}
          style={{ color: "var(--text)" }}
        />
      </h1>
      <a
        className="button animate__animated animate__swing animate__delay-1s animate__flipInX"
        href="#aboutme"
      >
        Explore
      </a>

      {/* <div className="switcher-container">
        <ModeSwitcher />
        <AnimateSwitcher />
      </div> */}
    </div>
  );
}

export default CallToAction;
