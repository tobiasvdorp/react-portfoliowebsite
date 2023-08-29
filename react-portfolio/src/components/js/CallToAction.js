import React from "react";
import useWOW from "./useWOW";

function CallToAction() {
  useWOW();
  return (
    <div className="title">
      <h1 className="animate__animated animate__slideInDown">
        Hi, <br />I am T
        <span className="animate__fadeIn animate__bounceInDown">o</span>bias
      </h1>
      <a className="button animate__animated animate__swing animate__delay-1s animate__flipInX">
        Explore
      </a>
    </div>
  );
}

export default CallToAction;
