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
import FilterButton from "./FilterButton.js";
import { useState } from "react";
import Filters from "./Filters.js";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const [activeFilters, setActiveFilters] = useState(["all"]); // Initialize filter state as an array
  const projects = [
    {
      id: 1,
      imageSrc: avatar,
      title: t("project1_title"),
      description: t("project1_description"),
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
      ],
      detailDescription: t("project1_detailDescription"),
      projectLocation: "/portfolio-1.html",
      className: "animate__animated wow animate__bounceIn",
      wowDelay: "0.5s",
      tag: "school",
    },
    {
      id: 2,
      imageSrc: Login,
      title: t("project2_title"),
      description: t("project2_description"),
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "TailwindCSS", image: TailwindCSS },
      ],
      detailDescription: t("project2_detailDescription"),
      projectLocation: "/hairdresser-project.html",
      className: "animate__animated wow animate__bounceIn",
      wowDelay: "0.7s",
      tag: "school",
    },
    {
      id: 3,
      imageSrc: Spark,
      title: t("project3_title"),
      description: t("project3_description"),
      skills: [
        { name: "HTML", image: HTML },
        { name: "CSS", image: CSS },
        { name: "React", image: ReactIMG },
      ],
      detailDescription: t("project3_detailDescription"),
      style: { object_fit: "contain" },
      className: "animate__animated wow animate__bounceIn spark ",
      wowDelay: "0.9s",
      projectLocation: "/not-available.html",
      tag: "school",
    },
    {
      id: 4,
      imageSrc: NUSPI,
      title: t("project4_title"),
      description: t("project4_description"),
      skills: [
        { name: "CSS", image: CSS },
        { name: "WordPress", image: WordPress },
        { name: "Elementor", image: Elementor },
      ],
      detailDescription: t("project4_detailDescription"),
      style: { object_fit: "contain" },
      className: "animate__animated wow animate__bounceIn nuspi ",
      wowDelay: "1.1s",
      projectLocation: "/nuspi-project.html",
      tag: "work",
    },
  ];
  const [open, setOpen] = useState(false);

  const openFilters = () => {
    setOpen(!open);
  };

  return (
    <div className="projects " id="projects">
      <div className="flex">
        <h2 className="title2">{t("Projects.")}</h2>
        <FilterButton openFilters={openFilters} />
      </div>
      {open && (
        <Filters
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      )}
      <h3 className="readmore">{t("Click on a card to read more.")}</h3>
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
        ) && (
          <>
            <div className="no-results">
              <h3>{t("Oops! No projects found for the selected filters.")}</h3>

              {/* Reset filters */}
              <button
                className="button reset"
                onClick={() => setActiveFilters(["all"])}
              >
                Reset filters
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Projects;
