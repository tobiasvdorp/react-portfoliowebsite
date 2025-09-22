import { CalendarDays, MapPin } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../common/FadeIn';
import { experiences } from '@/lib/content';

const ExperienceSection = () => (
  <section id="experience" className="space-y-10">
    <SectionHeading
      eyebrow="Reis"
      title="Wat ik tot nu toe deed"
      description="Een korte tijdlijn van studie en mijlpalen die mij hebben gevormd tot de maker die ik nu ben."
    />
    <div className="relative space-y-6">
      <div className="absolute left-[10px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent sm:block" aria-hidden />
      {experiences.map((experience, index) => (
        <FadeIn key={experience.title} delay={0.15 * index} className="relative">
          <article className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:grid-cols-[auto_1fr] sm:gap-6">
            <div className="hidden h-full sm:flex sm:flex-col sm:items-center">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-sm font-semibold text-emerald-200">
                {index + 1}
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold text-slate-50">{experience.title}</h3>
                <p className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays className="h-4 w-4" aria-hidden />
                  {experience.period}
                </p>
              </div>
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <MapPin className="h-4 w-4" aria-hidden />
                <span>{experience.organisation} · {experience.location}</span>
              </p>
              <p className="text-sm text-slate-200 sm:text-base">{experience.description}</p>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
