'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type Mood = {
  id: 'chill' | 'energy' | 'adventure';
  label: string;
  description: string;
  palettes: Array<{
    name: string;
    emoji: string;
    colors: [string, string, string];
    prompt: string;
  }>;
};

const moods: Mood[] = [
  {
    id: 'chill',
    label: 'Chill',
    description: 'Zachte gradients en warme tonen voor avondcoders met lo-fi beats.',
    palettes: [
      {
        name: 'Night Drive',
        emoji: '🌌🚗',
        colors: ['#1d1b4f', '#5142a6', '#f8b4d9'],
        prompt: 'Maak een dashboard dat voelt als een nachtelijke autorit met neonlichten.',
      },
      {
        name: 'Coffee Corner',
        emoji: '☕️📚',
        colors: ['#281a1b', '#6d4c41', '#fcd8b6'],
        prompt: 'Ontwerp een notitie-app die ruikt naar versgemalen koffie.',
      },
      {
        name: 'Serene Synth',
        emoji: '🎛️🌧️',
        colors: ['#112031', '#385b73', '#9ec3d5'],
        prompt: 'Codeer een synth-interface die klinkt als regen op het raam.',
      },
    ],
  },
  {
    id: 'energy',
    label: 'Energy',
    description: 'Felle kleuren voor ideeën die nét even harder knallen.',
    palettes: [
      {
        name: 'Electric Bloom',
        emoji: '⚡️🌺',
        colors: ['#240046', '#7b2cbf', '#ff6f91'],
        prompt: 'Bedenk een landing page voor een creatieve hackathon bij zonsopkomst.',
      },
      {
        name: 'Laser Arcade',
        emoji: '🕹️🌈',
        colors: ['#001845', '#0466c8', '#ff4d6d'],
        prompt: 'Schets een multiplayer-lobby met arcade vibes en pastel lasers.',
      },
      {
        name: 'Solar Disco',
        emoji: '🪩☀️',
        colors: ['#582f0e', '#ffb347', '#ffe156'],
        prompt: 'Ontwerp een micro-app die de eerste zonnestralen viert.',
      },
    ],
  },
  {
    id: 'adventure',
    label: 'Adventure',
    description: 'Luchtige combinaties die ruiken naar buitenspelen en roadtrips.',
    palettes: [
      {
        name: 'Cabin Radio',
        emoji: '🏕️📻',
        colors: ['#0b3d20', '#3a5a40', '#b6c454'],
        prompt: 'Visualiseer een radio-interface voor verhalen rond een kampvuur.',
      },
      {
        name: 'Polaroid Trail',
        emoji: '📸🗺️',
        colors: ['#1f2a44', '#f5b971', '#f9dec9'],
        prompt: 'Ontwerp een gallery die voelt als een stapel verse polaroids.',
      },
      {
        name: 'Wander Tunes',
        emoji: '🚐🎵',
        colors: ['#0f4c5c', '#56a3a6', '#ffe45e'],
        prompt: 'Bouw een playlist-widget voor muziek onderweg langs de kust.',
      },
    ],
  },
];

const MoodboardMixer = () => {
  const [activeMoodId, setActiveMoodId] = useState<Mood['id']>('chill');
  const [index, setIndex] = useState(0);

  const activeMood = useMemo(() => moods.find((mood) => mood.id === activeMoodId) ?? moods[0], [activeMoodId]);
  const palette = activeMood.palettes[index % activeMood.palettes.length];

  const gradient = useMemo(
    () => `linear-gradient(135deg, ${palette.colors[0]}, ${palette.colors[1]}, ${palette.colors[2]})`,
    [palette]
  );

  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg">
      <div className="flex flex-wrap gap-2">
        {moods.map((mood) => {
          const isActive = mood.id === activeMoodId;
          return (
            <button
              key={mood.id}
              type="button"
              onClick={() => {
                setActiveMoodId(mood.id);
                setIndex(0);
              }}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                isActive
                  ? 'border border-white/20 bg-gradient-to-r from-highlight/80 via-highlight to-accent text-background shadow-glow'
                  : 'border border-white/15 bg-white/5 text-foreground hover:border-highlight/70 hover:bg-highlight/20'
              }`}
            >
              {mood.label}
            </button>
          );
        })}
      </div>
      <motion.div
        key={palette.name}
        className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-6 text-foreground"
        style={{ background: gradient }}
        initial={{ opacity: 0.6, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.4),transparent_45%)]" aria-hidden />
        <div className="relative z-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">{activeMood.label}</p>
          <h3 className="font-display text-2xl font-semibold text-white drop-shadow">{palette.name}</h3>
          <p className="text-lg">{palette.emoji}</p>
          <p className="max-w-sm text-sm text-white/90">{palette.prompt}</p>
        </div>
        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-3 text-xs text-white/80">
          {palette.colors.map((color) => (
            <div key={color} className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 shadow">
              <span className="h-4 w-4 rounded-full border border-white/50" style={{ backgroundColor: color }} />
              <span className="font-mono uppercase tracking-[0.2em]">{color.replace('#', '')}</span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <p className="flex-1 text-xs sm:text-sm">{activeMood.description}</p>
        <button
          type="button"
          onClick={() => setIndex((current) => (current + 1) % activeMood.palettes.length)}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-highlight/70 hover:bg-highlight/20"
        >
          Volgende idee
        </button>
      </div>
    </div>
  );
};

export default MoodboardMixer;
