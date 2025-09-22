'use client';

import AboutMe from './AboutMe';
import CallToAction from './CallToAction';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';
import Projects from './Projects';
import SettingsMenu from './SettingsMenu';
import SkillFolder from './SkillFolder';

const HomePage = () => (
  <>
    <Navbar />
    <SettingsMenu />
    <div id="glitch">
      <main id="home">
        <CallToAction />
        <AboutMe />
        <Projects />
        <SkillFolder />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default HomePage;
