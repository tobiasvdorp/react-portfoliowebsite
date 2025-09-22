"use client";

import AboutMe from "./AboutMe";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects";
import SettingsMenu from "./SettingsMenu";
import SkillFolder from "./SkillFolder";

const HomePage = () => (
  <>
    <Navbar />
    <SettingsMenu />
    <div id="glitch" className="bg-background">
      <main id="home" className="mt-[120px] flex flex-col gap-[200px]">
        <CallToAction />
        <AboutMe />
        <Projects />
        <SkillFolder />
        <Contact />
      </main>
    </div>
  </>
);

export default HomePage;
