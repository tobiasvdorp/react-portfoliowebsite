import SectionHeading from '@/components/ui/SectionHeading';
import { skills } from '@/lib/content';

const SkillsSection = () => (
  <section id="skills" className="relative py-24 sm:py-28">
    <div className="absolute inset-x-0 bottom-0 -z-10 h-[320px] bg-[radial-gradient(circle,rgba(20,184,166,0.15),transparent 60%)] blur-3xl" />

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Vaardigheden"
        title="Gereedschap waar ik dagelijks mee werk"
        description="Een mix van technologie, tooling en soft skills die ik inzet om ideeën tot leven te brengen."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill.name}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-300/60"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_70%)]" />
            </div>
            <div className="relative flex h-full flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-200">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{skill.description}</p>
              <p className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                {skill.level}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
