'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const directions = [
  { label: 'Diagonaal', value: '135deg' },
  { label: 'Verticaal', value: '180deg' },
  { label: 'Horizontaal', value: '90deg' },
  { label: 'Radiaal', value: 'circle' },
];

const randomColor = () =>
  `#${Math.floor(0xffffff * Math.random())
    .toString(16)
    .padStart(6, '0')}`;

const getGradient = (direction: string, colorA: string, colorB: string) =>
  direction === 'circle'
    ? `radial-gradient(circle at top, ${colorA}, ${colorB})`
    : `linear-gradient(${direction}, ${colorA}, ${colorB})`;

const GradientMixer = () => {
  const [colorA, setColorA] = useState('#6D72FF');
  const [colorB, setColorB] = useState('#F471B5');
  const [direction, setDirection] = useState(directions[0].value);
  const [copied, setCopied] = useState(false);

  const gradient = useMemo(() => getGradient(direction, colorA, colorB), [direction, colorA, colorB]);

  const handleRandomize = () => {
    setColorA(randomColor());
    setColorB(randomColor());
    setDirection(directions[Math.floor(Math.random() * directions.length)].value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`background: ${gradient};`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error('Kon gradient niet kopiëren', error);
      setCopied(false);
    }
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <motion.div
          key={`${colorA}-${colorB}-${direction}`}
          layoutId="gradient-preview"
          className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10"
          style={{ backgroundImage: gradient }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        <code className="block select-all rounded-xl border border-white/10 bg-background/70 p-3 text-xs text-muted-foreground">
          background: {gradient};
        </code>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Kleur A
          <input
            type="color"
            aria-label="Selecteer eerste kleur"
            value={colorA}
            onChange={(event) => setColorA(event.target.value)}
            className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
          />
        </label>
        <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Kleur B
          <input
            type="color"
            aria-label="Selecteer tweede kleur"
            value={colorB}
            onChange={(event) => setColorB(event.target.value)}
            className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-transparent"
          />
        </label>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {directions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setDirection(option.value)}
            className={`rounded-xl border px-4 py-3 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              direction === option.value
                ? 'border-highlight/60 bg-highlight/20 text-foreground'
                : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/30'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleRandomize}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-foreground transition hover:border-highlight/60 hover:text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Verrassing
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-full border border-white/10 bg-gradient-to-r from-accent via-highlight to-accent px-4 py-2 text-sm font-semibold text-background transition hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          {copied ? 'Gekopieerd!' : 'Kopieer CSS'}
        </button>
      </div>
    </div>
  );
};

export default GradientMixer;
