import React from "react";
import Navbar from "../components/js/Navbar.js";
import CallToAction from "../components/js/CallToAction.js";
import Projects from "../components/js/Projects.js";
import Aboutme from "../components/js/Aboutme.js";
import Contact from "../components/js/Contact.js";
import SkillFolder from "../components/js/SkillFolder.js";
import "../App.css";
import SettingsMenu from "../components/js/SettingsMenu.js";
import Footer from "../components/js/Footer.js";
import SuperSecret from "../components/js/SuperSecret.js";
import { Analytics } from "@vercel/analytics/react";

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
        <Analytics />
      </div>
    </>
  );
}

export default Home;
