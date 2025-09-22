import SectionHeading from '../common/SectionHeading';
import FadeIn from '../common/FadeIn';
import { skills } from '@/lib/content';

const SkillsSection = () => (
  <section id="skills" className="space-y-10">
    <SectionHeading
      eyebrow="Toolkit"
      title="Vaardigheden in de praktijk"
      description="Technologieën en tools die ik gebruik om ideeën van schets tot product te brengen."
    />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill, index) => (
        <FadeIn
          key={skill.name}
          delay={0.1 * index}
          className="h-full rounded-3xl border border-white/10 bg-slate-900/60 p-6 transition hover:border-emerald-300/40"
        >
          <h3 className="text-lg font-semibold text-slate-50">{skill.name}</h3>
          <p className="mt-1 text-sm text-emerald-200">{skill.level}</p>
          <p className="mt-3 text-sm text-slate-300">{skill.description}</p>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default SkillsSection;
