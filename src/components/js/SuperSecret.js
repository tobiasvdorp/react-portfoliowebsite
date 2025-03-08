import React, { useState } from "react";
import NuclearButton from "./NuclearButton";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { useDisordered } from "./DisorderedContext";

export default function SuperSecret() {
  const { t } = useTranslation();
  const [timer, setTimer] = useState(null);
  const { setDisordered } = useDisordered();

  const [buttonClass, setButtonClass] = useState("destruct");
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const startCountdown = () => {
    if (isDestroyed) {
      repairWebsite();
      return;
    }

    const isConfirmed = window.confirm(t("destroyConfirm"));

    if (!isConfirmed) {
      return;
    }

    let counter = 3;
    setTimer(counter);
    const intervalId = setInterval(() => {
      counter -= 1;
      setTimer(counter);

      if (counter <= 0) {
        clearInterval(intervalId);
        setTimer(null);
        selfDestructor();
      }
    }, 1000);
  };
  const [showRepairButton, setShowRepairButton] = useState(false);

  const selfDestructor = () => {
    // Add glitch animation
    document.getElementById("glitch").classList.add("glitch-animated");

    setTimeout(() => {
      // Add glitch background after 1 second
      document.getElementById("home").classList.add("glitch-background");
    }, 1000);

    setTimeout(() => {
      // Add the 'glitch' class after 1 second
      document.getElementById("glitch").classList.add("glitch");

      setIsDestroyed(true);
      setButtonClass("repair");
    }, 1000);
    setTimeout(() => {
      setShowRepairButton(true);
    }, 2000);
    setDisordered(true);
  };

  const repairWebsite = () => {
    // Remove the 'glitch-animated' class
    document.getElementById("glitch").classList.remove("glitch-animated");

    // Set timer text to 'Repairing...'
    setTimer(t("repairing"));

    setTimeout(() => {
      // Add the 'glitch-animated' class back for 1 second
      document.getElementById("glitch").classList.add("glitch-animated");
    }, 1000);

    setTimeout(() => {
      // Remove all glitch-related classes and background
      document
        .getElementById("glitch")
        .classList.remove("glitch", "glitch-animated");
      document.getElementById("home").classList.remove("glitch-background");

      // Reset button and timer
      setTimer(null);

      setIsDestroyed(false);
      setButtonClass("destruct");
      setIsVisible(false);
    }, 2000);
    setDisordered(false);
  };

  return (
    <>
      {isVisible && (
        <>
          <div className="destroy">
            <NuclearButton
              startCountdown={startCountdown}
              repairWebsite={repairWebsite}
              buttonClass={isDestroyed ? "repair" : "destruct"}
            />
            <div className="timer">{timer !== null ? `${timer}...` : ""}</div>
          </div>
        </>
      )}
    </>
  );
}
