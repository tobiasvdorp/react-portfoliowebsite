import { RiArrowRightUpLine, RiMapPin2Line } from 'react-icons/ri';
import ShimmerButton from '@/components/ui/ShimmerButton';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { heroContent, socialLinks } from '@/lib/content';

const HeroSection = () => (
  <section id="top" className="relative isolate overflow-hidden">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.45),rgba(15,23,42,0.2)60%,rgba(15,23,42,1))]" />
      <div className="absolute left-1/2 top-[-200px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="grid-overlay absolute inset-0 opacity-60" />
    </div>

    <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <SpotlightCard>
        <div className="flex flex-col gap-8">
          <span className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand-200 backdrop-blur">
            {heroContent.kicker}
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              {heroContent.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              {heroContent.highlight}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400">
              {heroContent.description}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 text-sm text-slate-300 sm:text-base">
              <div className="flex items-center gap-2">
                <RiMapPin2Line className="h-5 w-5 text-brand-300" />
                <span>{heroContent.location}</span>
              </div>
              <div className="flex gap-3">
                <ShimmerButton href={heroContent.primaryAction.href}>
                  {heroContent.primaryAction.label}
                  <RiArrowRightUpLine className="h-4 w-4" />
                </ShimmerButton>
                <a
                  href={heroContent.secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-200 transition-colors duration-200 hover:border-brand-400 hover:text-white"
                >
                  {heroContent.secondaryAction.label}
                </a>
              </div>
            </div>

            <ul className="flex items-center gap-3 text-slate-300">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition hover:border-brand-300 hover:text-white"
                    aria-label={social.tooltip}
                  >
                    <social.icon className="transition duration-200 group-hover:scale-110" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SpotlightCard>
    </div>
  </section>
);

export default HeroSection;
