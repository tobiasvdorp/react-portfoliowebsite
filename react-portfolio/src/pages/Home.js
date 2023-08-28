import React from "react";
import Navbar from "../components/js/Navbar";
import CallToAction from "../components/js/CallToAction";
import Projects from "../components/js/Projects.js";

function Home() {
  return (
    <>
      {/* Header */}
      <Navbar />
      <main>
        {/* Title and call to action */}
        <CallToAction />

        {/* About me */}

        {/* Projects */}
        <Projects />
      </main>
    </>
  );
}

export default Home;
