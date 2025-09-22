import SpotlightCard from '@/components/ui/SpotlightCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutContent } from '@/lib/content';

const AboutSection = () => (
  <section id="about" className="relative py-24 sm:py-28">
    <div className="absolute inset-x-0 top-10 -z-10 h-[320px] bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent 60%)] blur-2xl" />

    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[2fr,1fr] lg:items-start">
        <SpotlightCard className="h-full">
          <div className="space-y-6">
            <SectionHeading
              kicker="Over mij"
              title={aboutContent.title}
              description={aboutContent.body}
            />

            <div className="grid gap-6 rounded-2xl bg-white/5 p-6 text-sm text-slate-300 backdrop-blur sm:grid-cols-3 sm:text-base">
              {aboutContent.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-200">
                    {fact.label}
                  </span>
                  <span className="font-medium text-white">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>

        <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-sm leading-relaxed text-slate-400 shadow-lg shadow-brand-900/10 backdrop-blur">
          <p>
            Ik geloof dat een goed product begint bij nieuwsgierigheid. Door vragen te stellen en te experimenteren ontdek ik
            hoe gebruikers écht werken en wat hen blij maakt. Die inzichten vertaal ik naar interfaces die intuïtief en
            aantrekkelijk zijn.
          </p>
          <p>
            Momenteel verdiep ik me in performance-optimalisaties, toegankelijke componentbibliotheken en content workflows
            waarmee teams zelfstandig vooruit kunnen.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
