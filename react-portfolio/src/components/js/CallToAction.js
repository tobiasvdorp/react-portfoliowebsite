import React from "react";
import useWOW from "./useWOW";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function CallToAction() {
  const { t } = useTranslation();

  useWOW();
  return (
    <div className="title">
      <h1 className="animate__animated animate__slideInDown">
        {t("Hi")}, <br />{" "}
        <TypeAnimation
          sequence={[t("I'm Tobias."), 1000]}
          speed={50}
          repeat={Infinity}
          style={{ color: "var(--text)" }}
        />
      </h1>
      <div className="flex">
        <a
          className="button animate__animated animate__swing animate__delay-1s animate__flipInX"
          href="#aboutme"
        >
          {t("Explore")}
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
