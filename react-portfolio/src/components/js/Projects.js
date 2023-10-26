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
import NUSPI from "../images/nuspi.png";
import Filters from "./Filters.js";
import { useState } from "react";

function Projects() {
  const [activeFilters, setActiveFilters] = useState(["all"]); // Initialize filter state as an array
  const projects = [
    {
      id: 1,
      imageSrc: avatar,
      title: "Portfoliowebsite 1",
      description:
        "From zero coding experience, I self-taught via YouTube and peer guidance to build this portfolio website in just 6 weeks.",
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
      ],

      detailDescription:
        "In my first project at OpenICT, I was tasked with creating a portfolio website. Having never written a single line of code before, I was a complete novice. Over the course of six weeks, I managed to assemble the site through a combination of YouTube tutorials and mini-lessons from classmates. However, about a month into my studies, I found myself dissatisfied with the initial website. As my knowledge grew, I immediately saw opportunities for improvement and decided to take on the project of building my current website, reflecting my evolved skills and better understanding of web development.",
      projectLocation: "/portfolio-1.html",
      className: "animate__animated wow animate__bounceIn",
      wowDelay: "0.5s",
      tag: "school",
    },
    {
      id: 2,
      imageSrc: Login,
      title: "Hairdresser website",
      description:
        "In a team of five, I focused on front-end design using Tailwind and learned Git collaboration to build a hairdresser's website.",
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "TailwindCSS", image: TailwindCSS },
      ],
      detailDescription:
        "In my second project at OpenICT, I collaborated with a team of five people to build a website for a hairdressing salon. While I focused primarily on the front-end, creating website components was an enjoyable experience. Although the end result may not reflect high technical finesse, the project was an invaluable learning journey for me, especially in the areas of teamwork and collaboration. Through this experience, I gained insights into effective communication, task delegation, and the utilization of Git for collective project management. Additionally, it deepened my understanding of translating a client's needs and expectations into a functional product.",
      projectLocation: "/hairdresser-project.html",
      className: "animate__animated wow animate__bounceIn",
      wowDelay: "0.7s",
      tag: "school",
    },
    {
      id: 3,
      imageSrc: Spark,
      title: "Spark",
      description:
        "I pivoted within the 'Spark' project to build an educational programming game's website, forum, and chatbot using React.",
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "React", image: ReactIMG },
      ],
      detailDescription:
        "My third undertaking was 'Spark', an engaging game designed to teach users the fundamentals of programming in an entertaining manner. Initially, I was assigned to design the game's user interface. However, I soon realized that game development was not my preferred field. Thus, I pivoted and, alongside a team member, began focusing on the creation of the game's website. This venture led me to construct a forum and a chatbot, both implemented using React.",
      style: { object_fit: "contain" },
      className: "animate__animated wow animate__bounceIn spark ",
      wowDelay: "0.9s",
      projectLocation: "/not-available.html",
      tag: "school",
    },
    {
      id: 4,
      imageSrc: NUSPI,
      title: "NetworkUSP Inclusive",
      description:
        "I built an accessible website for a network and gained important experience in client communication.",
      skills: [
        { name: "CSS", image: CSS },
        { name: "WordPress", image: WordPress },
        { name: "Elementor", image: Elementor },
      ],
      detailDescription: (
        <>
          My first project for a real client was building an accessible website
          for Netwerk USP Inclusief (nUSPi), an organization that champions
          inclusivity. Initially brought on board through a student opportunity
          at the HU Institute of ICT, I had the unique challenge of translating
          the organization's mission into a digital platform that could be
          easily accessed by everyone. <br></br>
          <br></br>Over a series of MS Teams meetings, I learned a lot about
          client communication—how to effectively listen, condense their
          requirements, and provide actionable feedback. One key learning area
          for me was web accessibility. Given nUSPi's focus on inclusivity, I
          learned about and implemented web standards that would make our
          digital platform accessible to as many people as possible.
          <br></br>
          <br></br>After successfully building the website, I prepared a
          comprehensive handover document containing specific instructions for
          managing the platform. This empowered the client, nUSPi, to take full
          ownership and maintain the site independently. <br></br>
          <br></br>
          This experience has not only been a lesson in technical development
          but also in teamwork, time management, and real-world problem-solving.
          I've come to appreciate the value of clear communication, especially
          when managing expectations and juggling various project elements.
        </>
      ),

      style: { object_fit: "contain" },
      className: "animate__animated wow animate__bounceIn nuspi ",
      wowDelay: "1.1s",
      projectLocation: "/nuspi-project.html",
      tag: "work",
    },
  ];

  return (
    <div className="projects " id="projects">
      <h2 className="title2">Projects.</h2>
      <Filters
        setActiveFilters={setActiveFilters}
        activeFilters={activeFilters}
      />
      <h3 className="readmore">Click on a card to read more.</h3>
      <div className="projects-cards">
        {projects.map((project, index) => {
          // Check if 'all' is active or if the project tag is in active filters
          if (
            activeFilters.includes("all") ||
            activeFilters.includes(project.tag)
          ) {
            return (
              <Card
                key={index}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                detailDescription={project.detailDescription}
                skills={project.skills}
                projectLocation={project.projectLocation}
                className={project.className}
                tag={project.tag}
              />
            );
          }
          return null;
        })}

        {/* If there are no projects to render with the current filter settings, render "No projects" */}
        {projects.every(
          (project) =>
            !activeFilters.includes("all") &&
            !activeFilters.includes(project.tag)
        ) && <h3>Oops! No projects found for the selected filters.</h3>}
      </div>
    </div>
  );
}

export default Projects;
