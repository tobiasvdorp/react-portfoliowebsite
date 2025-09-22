'use client';

import Image from 'next/image';
import BlurText from '@/components/common/BlurText';
import FadeIn from '../common/FadeIn';
import { heroContent } from '@/lib/content';

const Hero = () => {
  const { greeting, highlight, description, primaryAction, secondaryAction, stats } = heroContent;

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/50 to-slate-900/80 px-6 py-12 shadow-[0_0_120px_rgba(16,185,129,0.2)] sm:px-10 sm:py-16 md:flex md:items-center md:justify-between"
    >
      <div className="relative z-10 flex-1 space-y-6">
        <FadeIn className="inline-block rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-emerald-200">
          {greeting}
        </FadeIn>
        <BlurText text={highlight} className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl" />
        <FadeIn delay={0.2} className="max-w-xl text-base text-slate-200 sm:text-lg">
          {description}
        </FadeIn>
        <FadeIn delay={0.3} className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={primaryAction.href}
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            {primaryAction.label}
          </a>
          <a
            href={secondaryAction.href}
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/50 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
          >
            {secondaryAction.label}
          </a>
        </FadeIn>
        <FadeIn delay={0.4} className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">{stat.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-50">{stat.value}</p>
            </div>
          ))}
        </FadeIn>
      </div>
      <FadeIn delay={0.3} blur className="relative mt-10 flex justify-center md:mt-0 md:w-1/3">
        <div className="relative h-64 w-64 overflow-hidden rounded-full border border-emerald-400/30 bg-gradient-to-br from-emerald-500/20 via-emerald-500/10 to-transparent p-2 sm:h-72 sm:w-72">
          <div className="absolute inset-0 animate-pulse rounded-full bg-emerald-400/10" aria-hidden />
          <Image
            src="/images/hoiikbentobias.png"
            alt="Portret van Tobias van Dorp"
            fill
            sizes="(max-width: 768px) 16rem, 18rem"
            className="object-cover object-center"
            priority
          />
        </div>
      </FadeIn>
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
    </section>
  );
};

export default Hero;
