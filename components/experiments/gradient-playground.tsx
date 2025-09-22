'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const randomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;

const GradientPlayground = () => {
  const [colorA, setColorA] = useState('#4338ca');
  const [colorB, setColorB] = useState('#ec4899');
  const [angle, setAngle] = useState(135);
  const [copied, setCopied] = useState(false);

  const gradient = useMemo(() => `linear-gradient(${angle}deg, ${colorA}, ${colorB})`, [angle, colorA, colorB]);

  const handleShuffle = () => {
    setColorA(randomColor());
    setColorB(randomColor());
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `background: ${gradient};
background-image: ${gradient};`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error('Kon gradient niet kopiëren', error);
    }
  };

  return (
    <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg">
      <motion.div
        className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-white/5"
        style={{ backgroundImage: gradient }}
        initial={{ opacity: 0.4, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)] opacity-60" />
        <div className="relative mx-auto w-full max-w-xs rounded-2xl bg-background/80 p-4 text-center text-sm text-muted-foreground shadow-lg">
          <p className="font-semibold text-foreground">Gradient vibes</p>
          <p className="mt-2 text-xs leading-relaxed">
            Pas de hoek aan met de slider of gooi een nieuwe combinatie met de shuffle-knop. Klaar? Kopieer de CSS direct.
          </p>
        </div>
      </motion.div>
      <div className="grid gap-4 text-sm">
        <div className="grid grid-cols-2 gap-3 text-muted-foreground">
          <label className="flex items-center justify-between rounded-xl border border-white/10 bg-background/60 px-4 py-3">
            <span className="text-xs uppercase tracking-[0.25em] text-highlight">kleur 1</span>
            <input
              type="color"
              value={colorA}
              onChange={(event) => setColorA(event.target.value)}
              className="h-8 w-12 cursor-pointer rounded border border-white/20 bg-transparent p-0"
              aria-label="Eerste kleur"
            />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-white/10 bg-background/60 px-4 py-3">
            <span className="text-xs uppercase tracking-[0.25em] text-highlight">kleur 2</span>
            <input
              type="color"
              value={colorB}
              onChange={(event) => setColorB(event.target.value)}
              className="h-8 w-12 cursor-pointer rounded border border-white/20 bg-transparent p-0"
              aria-label="Tweede kleur"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.25em] text-highlight">
          Hoek
          <input
            type="range"
            min={0}
            max={360}
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-highlight"
          />
          <span className="text-[0.7rem] text-muted-foreground">{angle}&deg;</span>
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleShuffle}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-highlight/70 hover:bg-highlight/20"
          >
            Shuffle
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-highlight/80 via-highlight to-accent px-4 py-2 text-xs font-semibold text-background transition hover:brightness-105"
          >
            {copied ? 'Gekopieerd!' : 'Kopieer CSS'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradientPlayground;
