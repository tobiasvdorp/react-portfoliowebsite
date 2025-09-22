'use client';

import { type ComponentType } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/motion/fade-in';
import GradientMixer from '@/components/playground/gradient-mixer';
import EmojiGarden from '@/components/playground/emoji-garden';
import PixelSketch from '@/components/playground/pixel-sketch';
import SectionHeading from '@/components/ui/section-heading';
import ShinyButton from '@/components/ui/shiny-button';

const repoBase = 'https://github.com/tobiasvandorp/portfolio/tree/main/components/playground';

type Experiment = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  Component: ComponentType;
};

const experiments: Experiment[] = [
  {
    title: 'Gradient Mixer',
    description:
      'Speel met twee kleuren en de richting van de gradient totdat je de perfecte achtergrond voor je volgende project hebt. Kopieer de CSS direct naar je clipboard.',
    tags: ['CSS', 'Design tooling'],
    github: `${repoBase}/gradient-mixer.tsx`,
    Component: GradientMixer,
  },
  {
    title: 'Emoji Garden',
    description:
      'Kies de vibe, shuffle en vul het canvas met emoji-confetti. Een lichte UX-tool om energie, focus of feestje aan je ontwerp toe te voegen.',
    tags: ['Micro-interactions', 'Creativity'],
    github: `${repoBase}/emoji-garden.tsx`,
    Component: EmojiGarden,
  },
  {
    title: 'Pixel Sketch',
    description:
      'Een mini-pixelart studio. Schakel tussen paletten, schilder losse pixels en reset wanneer je ready bent voor een nieuw idee.',
    tags: ['State management', 'Playful UI'],
    github: `${repoBase}/pixel-sketch.tsx`,
    Component: PixelSketch,
  },
];

const Playground = () => (
  <section id="playground" className="space-y-12">
    <SectionHeading
      eyebrow="Playground"
      title="Mini-appjes voor de fun"
      description="Kleine experimenten die ik tussendoor bouw. Je kunt ze hier meteen uitproberen en de code terugvinden."
    />
    <FadeIn className="grid gap-6 xl:grid-cols-3">
      {experiments.map(({ title, description, tags, github, Component }) => (
        <motion.article
          key={title}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-background/70 p-6 shadow-lg"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-highlight">
              <span className="h-1 w-1 rounded-full bg-highlight" aria-hidden />
              Vibe code
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Component />
          </div>
          <div className="pt-2">
            <ShinyButton href={github} className="w-full justify-center" variant="ghost">
              Bekijk op GitHub
            </ShinyButton>
          </div>
        </motion.article>
      ))}
    </FadeIn>
  </section>
);

export default Playground;
