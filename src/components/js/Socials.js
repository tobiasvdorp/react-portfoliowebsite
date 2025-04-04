import React, { useState } from "react";
import "../css/socials.css";
import "animate.css/animate.min.css";
import { useTranslation } from "react-i18next";

function Socials() {
  const { t } = useTranslation();

  const [showAddMe, setShowAddMe] = useState(false);

  const toggleAddMe = () => {
    setShowAddMe(!showAddMe);
  };
  return (
    <>
      <div id="socials">
        <div className="socials-container">
          <hr></hr>
          <button onClick={toggleAddMe} className="button">
            {" "}
            <i className="fa-brands fa-2xl fa-discord"></i>
          </button>
          <a
            href="https://github.com/tobiasvdorp"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <i className="fa-brands fa-2xl fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-van-dorp-433189257/"
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <i className="fa-brands fa-2xl fa-linkedin"></i>
          </a>
          <hr></hr>
        </div>
      </div>
      {showAddMe && (
        <div className="animate__animated animate__fadeInLeft">
          <p className="status addme">
            {t("addMeOnDiscord")}
            <b> tobiasvandorp</b>
          </p>
        </div>
      )}
    </>
  );
}

export default Socials;
