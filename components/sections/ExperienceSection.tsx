import SpotlightCard from '@/components/ui/SpotlightCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { experiences } from '@/lib/content';

const ExperienceSection = () => (
  <section id="experience" className="relative py-24 sm:py-28">
    <div className="absolute inset-x-0 top-0 -z-10 h-[220px] bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent 60%)] blur-3xl" />

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Ervaring"
        title="Leren door te bouwen"
        description="Een greep uit de mijlpalen die mij vormden als developer en teamgenoot."
      />

      <div className="relative mt-12 space-y-8 sm:space-y-10">
        <div className="absolute left-[17px] top-0 hidden h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent sm:block" />
        {experiences.map((experience, index) => (
          <div key={experience.title} className="relative pl-10 sm:pl-14">
            <div className="absolute left-0 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/30 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
              {index + 1}
            </div>
            <SpotlightCard>
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                  <span>{experience.timeframe}</span>
                  <span className="text-white/60">{experience.location}</span>
                </div>
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{experience.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  {experience.description}
                </p>
              </div>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
