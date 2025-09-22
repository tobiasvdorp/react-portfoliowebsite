import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { navigation } from '@/lib/content';

const Page = () => (
  <div className="relative min-h-screen">
    <Header items={navigation} />
    <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Page;
