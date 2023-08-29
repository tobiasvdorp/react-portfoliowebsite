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
          <h2 className="title2">About me</h2>
          <h3 className="readmore">and my carreer.</h3>
        </div>
        <div className="aboutmyself">
          <h3 className="myself">About myself</h3>
          <p className="aboutme">lorem</p>
          Hey there, I'm Tobias, I'm 20 years old and I'm currently a student at
          Hogeschool Utrecht. I've always been fascinated by computers but never
          really dived deep into the world of coding, programming, or designing.
          Then I enrolled in OpenICT, and it was like finding a missing puzzle
          piece that I didn't even know was missing. I quickly realized that
          front-end development was my jam. Not only could I tinker with the
          logic and structure, but I could also unleash my creativity, making
          sure everything looked just as good as it worked. Whether it's making
          a responsive layout or adding a little animation to make the user
          interface more engaging, I relish every part of it. When I'm not busy
          coding, you'll likely find me hanging out with my friends or deep in a
          film marathon—especially if it's anything by Christopher Nolan.
          'Inception,' 'Interstellar,' you name it. If it's got complex
          narratives and mind-bending twists, I'm all in. From pondering the
          mysteries of black holes to exploring the realms of psychedelics, I
          find joy in discussing the things that make you question reality and
          your place in it. So, that's a little bit about me. I'm still on a
          journey of discovery, but one thing's for sure: I've found something
          that I'm passionate about, and I can't wait to see where this road
          takes me!
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
