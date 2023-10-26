import React from "react";
import Navbar from "../components/js/Navbar";
import CallToAction from "../components/js/CallToAction";
import Projects from "../components/js/Projects.js";
import Aboutme from "../components/js/Aboutme.js";
import Contact from "../components/js/Contact";
import SkillFolder from "../components/js/SkillFolder";
import "../App.css";
import SettingsMenu from "../components/js/SettingsMenu";
import Footer from "../components/js/Footer";
import SuperSecret from "../components/js/SuperSecret";

function Home(selfDestructor) {
  return (
    <>
      <Navbar className="" />
      <SettingsMenu />
      <SuperSecret />
      <div id="glitch">
        <main id="home" className="">
          <CallToAction />

          <Aboutme />

          <Projects />

          <SkillFolder />

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
