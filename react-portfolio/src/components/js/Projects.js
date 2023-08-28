import React from "react";
import Card from "./Card.js";
import avatar from "../images/avatar.png";
import HTMLlogo from "../images/HTMLlogo.png";
import CSSlogo from "../images/CSSlogo.png";
import TailwindCSS from "../images/TailwindCSS.png";
import Login from "../images/login.png";
import Spark from "../images/spark.png";
import ReactIMG from "../images/reactIMG.png";

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-cards">
        <Card
          imageSrc={avatar}
          title="Portfoliowebsite 1"
          description="From zero coding experience, I self-taught via YouTube and peer guidance to build this portfolio website in just 6 weeks."
          skills={[HTMLlogo, CSSlogo]}
          detailDescription="The first project I did was creating this portfoliowebsite. I had never written one line of code before so I had no experience at all. In about 6 weeks put this website together by means of YouTube tutorials and small lessons from classmates."
          projectId="portfolio-1"
        />
        <Card
          imageSrc={Login}
          title="Hairdresser website"
          description="In a team of five, I focused on front-end design using Tailwind and learned Git collaboration to build a hairdresser's website."
          skills={[HTMLlogo, CSSlogo, TailwindCSS]}
          detailDescription="The second project I did was creating a website for a hairdresser. I created this website with a group of 5 people. I mainly focused on front-end of the website and I had a lot of fun designing the components for the website. I also learned a lot about working in a group and how to communicate, divide tasks and work in one project with Git. I also learned a lot about the process of turning a clients wishes into a working product."
          projectId="portfolio-2"
        />
        <Card
          imageSrc={Spark}
          title="Spark"
          description="I pivoted within the 'Spark' project to build an educational programming game's website, forum, and chatbot using React."
          skills={[HTMLlogo, CSSlogo, ReactIMG]}
          detailDescription="My third undertaking was 'Spark', an engaging game designed to teach users the fundamentals of programming in an entertaining manner. Initially, I was assigned to design the game's user interface. However, I soon realized that game development was not my preferred field. Thus, I pivoted and, alongside a team member, began focusing on the creation of the game's website. This venture led me to construct a forum and a chatbot, both implemented using React."
          projectId="portfolio-2"
          style={{ object_fit: "contain" }}
        />
      </div>
    </div>
  );
}

export default Projects;
