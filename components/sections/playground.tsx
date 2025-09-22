'use client';

import { type ComponentType, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import GradientPlayground from '@/components/experiments/gradient-playground';
import LoFiFocusTimer from '@/components/experiments/lofi-focus-timer';
import MoodboardMixer from '@/components/experiments/moodboard-mixer';
import FadeIn from '@/components/motion/fade-in';
import SectionHeading from '@/components/ui/section-heading';
import ShinyButton from '@/components/ui/shiny-button';
import { experiments } from '@/data/content';
import { cn } from '@/lib/utils';

const experimentComponents: Record<string, ComponentType> = {
  'gradient-playground': GradientPlayground,
  'lofi-focus-timer': LoFiFocusTimer,
  'moodboard-mixer': MoodboardMixer,
};

const ExperimentCard = ({
  experiment,
  isActive,
  onSelect,
}: {
  experiment: (typeof experiments)[number];
  isActive: boolean;
  onSelect: () => void;
}) => (
  <motion.button
    type="button"
    onClick={onSelect}
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    aria-pressed={isActive}
    className={cn(
      'group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-background/70 p-6 text-left transition',
      isActive
        ? 'border-highlight/60 bg-white/10 shadow-xl ring-2 ring-highlight/50'
        : 'hover:border-highlight/40 hover:bg-white/5'
    )}
  >
    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground">
      <span>Mini app</span>
      <span>{experiment.stack.join(' · ')}</span>
    </div>
    <div className="space-y-3">
      <h3 className="font-display text-lg font-semibold text-foreground">{experiment.title}</h3>
      <p className="text-sm text-muted-foreground">{experiment.summary}</p>
    </div>
    <div className="mt-auto flex items-center justify-between text-xs font-semibold text-highlight">
      <span>Probeer in de playground</span>
      <span aria-hidden className="transition group-hover:translate-x-1">→</span>
    </div>
  </motion.button>
);

const Playground = () => {
  const [activeSlug, setActiveSlug] = useState(experiments[0]?.slug ?? '');
  const [version, setVersion] = useState(0);

  const activeExperiment = useMemo(
    () => experiments.find((experiment) => experiment.slug === activeSlug) ?? experiments[0],
    [activeSlug]
  );

  useEffect(() => {
    setVersion(0);
  }, [activeSlug]);

  const ActiveExperimentComponent = activeExperiment
    ? experimentComponents[activeExperiment.slug]
    : undefined;

  const sandboxKey = `${activeExperiment?.slug ?? 'none'}-${version}`;

  return (
    <section id="playground" className="space-y-12">
      <SectionHeading
        eyebrow="Playground"
        title="Mini apps & vibe coding"
        description="Kleine experimenten die ik bouw om ideeën uit te proberen. Klik op een kaart om direct in de sandbox te spelen en bekijk de code."
      />
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] xl:items-start">
        <FadeIn className="order-2 grid gap-4 sm:grid-cols-2 xl:order-1">
          {experiments.map((experiment) => (
            <ExperimentCard
              key={experiment.slug}
              experiment={experiment}
              isActive={experiment.slug === activeExperiment?.slug}
              onSelect={() => setActiveSlug(experiment.slug)}
            />
          ))}
        </FadeIn>
        <motion.div
          layout
          className="order-1 flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-background via-background/80 to-background/40 p-6 shadow-xl xl:order-2"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-highlight">Live sandbox</p>
            <h3 className="font-display text-3xl font-semibold text-foreground">{activeExperiment?.title}</h3>
            <p className="text-sm text-muted-foreground">{activeExperiment?.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {activeExperiment?.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                {item}
              </span>
            ))}
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={sandboxKey}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="min-h-[320px]"
              >
                {ActiveExperimentComponent ? <ActiveExperimentComponent /> : null}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex flex-wrap gap-3">
            <ShinyButton onClick={() => setVersion((current) => current + 1)} className="flex-1 sm:flex-none">
              Herstart mini app
            </ShinyButton>
            {activeExperiment?.github ? (
              <ShinyButton href={activeExperiment.github} className="flex-1 sm:flex-none" variant="ghost">
                Bekijk GitHub
              </ShinyButton>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Playground;
