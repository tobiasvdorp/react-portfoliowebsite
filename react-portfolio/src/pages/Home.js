import React from "react";
import Navbar from "../components/js/Navbar";
import CallToAction from "../components/js/CallToAction";
import Projects from "../components/js/Projects.js";
import Aboutme from "../components/js/Aboutme.js";
import Skills from "../components/js/Skills";
function Home() {
  return (
    <>
      {/* Header */}
      <Navbar />
      <main>
        {/* Title and call to action */}
        <CallToAction />

        {/* About me */}
        <Aboutme />
        {/* Projects */}
        <Projects />
        <Skills />
      </main>
    </>
  );
}

export default Home;
