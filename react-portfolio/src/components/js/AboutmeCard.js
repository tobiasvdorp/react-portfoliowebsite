import React from "react";
import useWOW from "./useWOW";
function AboutmeCard(props) {
  useWOW();
  return (
    <>
      <li>
        <div className="cbp_tmlabel wow animate__fadeInRight animate__animated">
          <h3>{props.title}</h3>
          <div className="date">
            <i className="fa fa-calendar"></i>
            {props.date}
          </div>
          <h4>
            <i className="fa fa-flag fa-sm"></i>
            {props.location}
          </h4>
          <p className="projectParagraph">{props.description}</p>
        </div>
      </li>
    </>
  );
}

export default AboutmeCard;
