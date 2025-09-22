'use client';

import type { ComponentType } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/fade-in';
import GradientGroove from '@/components/playground/gradient-groove';
import LoFiHaiku from '@/components/playground/lofi-haiku';
import PixelPalette from '@/components/playground/pixel-palette';
import SectionHeading from '@/components/ui/section-heading';
import ShinyButton from '@/components/ui/shiny-button';
import { experiments } from '@/data/content';

const experimentComponents: Record<(typeof experiments)[number]['slug'], ComponentType<{ className?: string }>> = {
  'gradient-groove': GradientGroove,
  'pixel-palette': PixelPalette,
  'lofi-haiku': LoFiHaiku,
};

const Playground = () => (
  <section id="playground" className="space-y-12">
    <SectionHeading
      eyebrow="Speeltuin"
      title="Experimentele mini-apps"
      description="Een creatieve hoek waar ik snelle ideetjes parkeer. Je kunt ze hier direct proberen en zien hoe ik speel met interactie, microcopy en animatie."
    />
    <FadeIn className="grid gap-6 lg:grid-cols-2">
      {experiments.map((experiment) => {
        const Demo = experimentComponents[experiment.slug];

        return (
          <motion.article
            key={experiment.slug}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 shadow-lg backdrop-blur"
          >
            <div className="relative h-[19rem] overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4">
              <Demo className="h-full" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" aria-hidden />
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-highlight">{experiment.tagline}</p>
                <h3 className="font-display text-2xl font-semibold text-foreground">{experiment.title}</h3>
                <p className="text-sm text-muted-foreground">{experiment.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                {experiment.stack.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <ShinyButton href={experiment.github} target="_blank" rel="noreferrer">
                  Bekijk code
                </ShinyButton>
              </div>
            </div>
          </motion.article>
        );
      })}
    </FadeIn>
  </section>
);

export default Playground;
