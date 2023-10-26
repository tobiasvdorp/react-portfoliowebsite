import React, { useState } from "react";
import NuclearButton from "./NuclearButton";
import "../../index.css";

export default function SuperSecret() {
  const [timer, setTimer] = useState(null);

  const [buttonClass, setButtonClass] = useState("destruct");
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const startCountdown = () => {
    if (isDestroyed) {
      repairWebsite();
      return;
    }

    const isConfirmed = window.confirm(
      "Are you sure you want to destroy this website? (PLEASE DON'T!!!)"
    );
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
        setTimer("Activated");
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
      setShowRepairButton(true); // Toon de reparatieknop na 2 seconden
    }, 2000);
  };

  const repairWebsite = () => {
    // Remove the 'glitch-animated' class
    document.getElementById("glitch").classList.remove("glitch-animated");

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
            <div className="timer">{timer !== null ? `${timer}` : ""}</div>
          </div>
        </>
      )}
    </>
  );
}
