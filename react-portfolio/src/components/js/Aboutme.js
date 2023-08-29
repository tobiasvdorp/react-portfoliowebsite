import React from "react";
import "animate.css/animate.min.css";
import useWOW from "./useWOW";
import AboutmeCard from "./AboutmeCard";

function Aboutme() {
  useWOW();
  return (
    <div id="aboutme" className="sectionClass">
      <div className="row">
        <div className="sectiontitle animate__animated animate__backInUp">
          <h2 className="title2">About me</h2>
        </div>
        <ul className="cbp_tmtimeline animate__animated animate__backInLeft">
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
            description="Currently, I'm enrolled in the OpenICT program at Hogeschool Utrecht. Here, I'm gaining hands-on experience in Agile methodologies, customer requirement mapping, knowledge acquisition, and determining essential skills needed to deliver a product. Unique to our program is its project-based approach: we don't have traditional exams or lectures, allowing us to jump right into real-world applications. This prepares me exceptionally well for a seamless transition into the corporate world upon graduation, as we're already mastering the skills needed in the industry."
          ></AboutmeCard>
        </ul>
      </div>
    </div>
  );
}

export default Aboutme;