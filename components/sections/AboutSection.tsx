import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import FadeIn from '../common/FadeIn';
import { aboutContent } from '@/lib/content';

const AboutSection = () => (
  <section id="about" className="space-y-10">
    <SectionHeading
      eyebrow="Wie ben ik"
      title={aboutContent.title}
      description={aboutContent.intro}
    />
    <div className="grid gap-10 rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:grid-cols-[2fr_1fr] sm:p-10">
      <div className="space-y-4 text-base text-slate-200 sm:text-lg">
        {aboutContent.body.map((paragraph) => (
          <FadeIn key={paragraph}>
            <p>{paragraph}</p>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.2} className="space-y-4 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
          Waar ik energie van krijg
        </h3>
        <ul className="space-y-3 text-sm text-emerald-50/90">
          {aboutContent.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-300" aria-hidden />
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </FadeIn>
    </div>
  </section>
);

export default AboutSection;
