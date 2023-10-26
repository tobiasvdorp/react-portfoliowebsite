import React from "react";
import { GiNuclearBomb } from "react-icons/gi";
import { MdAutoFixHigh } from "react-icons/md";
import "animate.css/animate.min.css";

export default function NuclearButton({
  buttonClass,
  startCountdown,
  repairWebsite,
}) {
  return (
    <button
      className={`nuclear animate__animated animate__bounceInLeft ${buttonClass}`}
      onClick={buttonClass === "destruct" ? startCountdown : repairWebsite}
      id="destruction"
    >
      {buttonClass === "repair" ? <MdAutoFixHigh /> : <GiNuclearBomb />}
    </button>
  );
}
