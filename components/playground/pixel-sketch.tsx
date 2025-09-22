'use client';

import { useMemo, useState } from 'react';

const GRID_SIZE = 10;

const palettes = [
  {
    name: 'Sunset',
    colors: ['#FDBA74', '#FB7185', '#C084FC', '#A855F7'],
  },
  {
    name: 'Lagoon',
    colors: ['#5EEAD4', '#38BDF8', '#818CF8', '#22D3EE'],
  },
  {
    name: 'Solar',
    colors: ['#FACC15', '#FB923C', '#F97316', '#FDE68A'],
  },
];

const createBlankPixels = () => Array.from({ length: GRID_SIZE * GRID_SIZE }, () => 'transparent');

const PixelSketch = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(palettes[0].colors[0]);
  const [pixels, setPixels] = useState<string[]>(() => createBlankPixels());

  const palette = palettes[paletteIndex];

  const paintPixel = (index: number) => {
    setPixels((prev) => {
      const next = [...prev];
      next[index] = selectedColor;
      return next;
    });
  };

  const cyclePalette = () => {
    setPaletteIndex((prev) => {
      const nextIndex = (prev + 1) % palettes.length;
      setSelectedColor(palettes[nextIndex].colors[0]);
      return nextIndex;
    });
  };

  const clearCanvas = () => {
    setPixels(createBlankPixels());
  };

  const paintedCount = useMemo(() => pixels.filter((color) => color !== 'transparent').length, [pixels]);

  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>{palette.name}</span>
        <span>{paintedCount} / {GRID_SIZE * GRID_SIZE} pixels</span>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="grid grid-cols-10 gap-1">
          {pixels.map((color, index) => (
            <button
              key={index}
              type="button"
              onClick={() => paintPixel(index)}
              aria-label={`Kleur pixel ${index + 1}`}
              className="aspect-square w-full rounded-md border border-white/5 transition hover:border-highlight/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ background: color === 'transparent' ? 'transparent' : color }}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {palette.colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => setSelectedColor(color)}
            className={`h-10 w-10 rounded-full border-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              selectedColor === color ? 'border-highlight shadow-glow' : 'border-white/10'
            }`}
            style={{ background: color }}
            aria-label={`Gebruik kleur ${color}`}
          />
        ))}
        <button
          type="button"
          onClick={cyclePalette}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:border-highlight/60 hover:text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Nieuw palet
        </button>
        <button
          type="button"
          onClick={clearCanvas}
          className="rounded-full border border-white/10 bg-gradient-to-r from-accent via-highlight to-accent px-4 py-2 text-xs uppercase tracking-[0.3em] font-semibold text-background transition hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Wis canvas
        </button>
      </div>
    </div>
  );
};

export default PixelSketch;
