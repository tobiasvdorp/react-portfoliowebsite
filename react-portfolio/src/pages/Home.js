import React from "react";
import Navbar from "../components/js/Navbar";
import CallToAction from "../components/js/CallToAction";
import Projects from "../components/js/Projects.js";
import Aboutme from "../components/js/Aboutme.js";

import SkillFolder from "../components/js/SkillFolder";
import "../App.css";
import SettingsMenu from "../components/js/SettingsMenu";
function Home() {
  return (
    <>
      <Navbar />
      <SettingsMenu />

      <main id="home">
        <CallToAction />

        <Aboutme />

        <Projects />

        <SkillFolder />
      </main>
    </>
  );
}

export default Home;
