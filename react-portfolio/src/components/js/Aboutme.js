import React from "react";
import "animate.css/animate.min.css";
import useWOW from "./useWOW";
import AboutmeCard from "./AboutmeCard";
import "../../index.css";

function Aboutme() {
  useWOW();
  return (
    <div id="aboutme" className="sectionClass">
      <div className="row">
        <div className="sectiontitle animate__animated animate__backInUp">
          <h2 className="title2">About myself.</h2>
          <h3 className="readmore"> Limited edition.</h3>
          <div className="cbp_tmlabel wow animate__fadeInRight animate__animated tobias">
            <h3>About Tobias van Dorp</h3>
            <div className="date">
              <i className="fa fa-calendar"></i>
              February 7th 2003
            </div>
            <h4>
              <i className="fa fa-flag fa-sm"></i>
              Maarn, Utrecht
            </h4>
            <p className="projectParagraph">
              {" "}
              Hi, I'm Tobias, a 20-year-old student at Hogeschool Utrecht,
              currently enrolled in the OpenICT program. I've always had an
              interest in computers, but it wasn't until I started my studies
              that I realized front-end development is where my passion lies. I
              love combining the technical aspects with creative design to make
              engaging and functional user interfaces. When I'm not coding, you
              can usually find me with my friends or deep into a Christopher
              Nolan movie marathon. I enjoy discussions that challenge my
              understanding of reality. I'm still exploring my interests, but
              I'm thrilled to have found a field I'm passionate about. I'm eager
              to see where this journey takes me.
            </p>
          </div>
        </div>

        <ul className="cbp_tmtimeline animate__animated animate__backInLeft">
          <h2 className="title2" id="carreer">
            My carreer.
          </h2>
          <h3 className="readmore">Experience Points accumulating..</h3>
          <AboutmeCard
            className="animate__fadeInRight animate__animated"
            title="HAVO-degree"
            date="Juli 2021"
            location="Amersfoort, Utrecht"
            description={
              <>
                I began my educational path in the Gymnasium program, but later
                transitioned to the HAVO track. There, I not only earned my
                diploma but also received the prestigious{" "}
                <a
                  href="https://www.socrateshonours.org/lid-worden/socrates-awards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socrates"
                >
                  Socrates Award
                </a>{" "}
                for having the highest score in the entire program. After
                graduating, I took a gap year to explore my interests and
                contemplate my future goals.
              </>
            }
          ></AboutmeCard>
          <AboutmeCard
            title="Bachelor's degree at OpenICT"
            date="September 2022 - Current"
            location="Hogeschool Utrecht"
            description="Currently, I am enrolled in the OpenICT program at Hogeschool Utrecht. Here, I'm gaining hands-on experience in Agile methodologies, customer requirement mapping, knowledge acquisition, and determining essential skills needed to deliver a product. Unique to our program is its project-based approach: we don't have traditional exams or lectures, allowing us to jump right into real-world applications. This prepares me exceptionally well for a seamless transition into the corporate world upon graduation, as we're already mastering the skills needed in the industry."
          ></AboutmeCard>
        </ul>
      </div>
    </div>
  );
}

export default Aboutme;
