import React from "react";
import Card from "./Card.js";
import avatar from "../images/avatar.png";
import HTML from "../images/HTMLlogo.png";
import CSS from "../images/CSSlogo.png";
import TailwindCSS from "../images/TailwindCSS.png";
import Login from "../images/login.png";
import Spark from "../images/spark.png";
import ReactIMG from "../images/reactIMG.png";
import "animate.css/animate.min.css";
import WordPress from "../images/WordPress.png";
import Elementor from "../images/Elementor.png";
import NUSPI from "../images/NUSPI_Logo.png";

function Projects() {
  return (
    <div className="projects " id="projects">
      <h2 className="title2">Projects.</h2>
      <h3 className="readmore">Click on a card to read more.</h3>
      <div className="projects-cards">
        <Card
          imageSrc={avatar}
          title="Portfoliowebsite 1"
          description="From zero coding experience, I self-taught via YouTube and peer guidance to build this portfolio website in just 6 weeks."
          skills={[
            { name: "HTML", image: HTML },
            { name: "CSS", image: CSS },
          ]}
          detailDescription="The first project I did at OpenICT was creating a portfoliowebsite. I had never written one line of code before so I had no experience at all. In about 6 weeks put this website together by means of YouTube tutorials and small lessons from classmates."
          projectLocation="/portfolio-1.html"
          className="animate__animated wow animate__bounceIn"
          wowDelay="0.5s"
        />
        <Card
          imageSrc={Login}
          title="Hairdresser website"
          description="In a team of five, I focused on front-end design using Tailwind and learned Git collaboration to build a hairdresser's website."
          skills={[
            { name: "HTML", image: HTML },
            { name: "CSS", image: CSS },
            { name: "TailwindCSS", image: TailwindCSS },
          ]}
          detailDescription="The second project I did at OpenICT was creating a website for a hairdresser. I created this website with a group of 5 people. I mainly focused on front-end of the website and I had a lot of fun designing the components for the website. I also learned a lot about working in a group and how to communicate, divide tasks and work in one project with Git. I also learned a lot about the process of turning a clients wishes into a working product."
          projectLocation="/hairdresser-project.html"
          className="animate__animated wow animate__bounceIn"
          wowDelay="0.7s"
        />
        <Card
          imageSrc={Spark}
          title="Spark"
          description="I pivoted within the 'Spark' project to build an educational programming game's website, forum, and chatbot using React."
          skills={[
            { name: "HTML", image: HTML },
            { name: "CSS", image: CSS },
            { name: "React", image: ReactIMG },
          ]}
          detailDescription="My third undertaking was 'Spark', an engaging game designed to teach users the fundamentals of programming in an entertaining manner. Initially, I was assigned to design the game's user interface. However, I soon realized that game development was not my preferred field. Thus, I pivoted and, alongside a team member, began focusing on the creation of the game's website. This venture led me to construct a forum and a chatbot, both implemented using React."
          style={{ object_fit: "contain" }}
          className="animate__animated wow animate__bounceIn spark "
          wowDelay="0.9s"
        />
        <Card
          imageSrc={NUSPI}
          title="NetworkUSP Inclusive"
          description="I built an accessible website for a network and gained important experience in client communication."
          skills={[
            { name: "CSS", image: CSS },
            { name: "WordPress", image: WordPress },
            { name: "Elementor", image: Elementor },
          ]}
          detailDescription={
            <>
              My most recent project was building an accessible website for
              Netwerk USP Inclusief (nUSPi), an organization that champions
              inclusivity. Initially brought on board through a student
              opportunity at the HU Institute of ICT, I had the unique challenge
              of translating the organization's mission into a digital platform
              that could be easily accessed by everyone. <br></br>
              <br></br>Over a series of MS Teams meetings, I learned a lot about
              client communication—how to effectively listen, condense their
              requirements, and provide actionable feedback. One key learning
              area for me was web accessibility. Given nUSPi's focus on
              inclusivity, I learned about and implemented web standards that
              would make our digital platform accessible to as many people as
              possible.
              <br></br>
              <br></br>The project is now in its final stages, and I'm in the
              process of preparing a comprehensive handover document. This
              experience has not only been a lesson in technical development but
              also in teamwork, time management, and real-world problem-solving.
              I've come to appreciate the value of clear communication,
              especially when managing expectations and juggling various project
              elements.
            </>
          }
          style={{ object_fit: "contain" }}
          className="animate__animated wow animate__bounceIn nuspi "
          wowDelay="1.1s"
        />
      </div>
    </div>
  );
}

export default Projects;
