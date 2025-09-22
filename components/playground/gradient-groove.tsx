'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

const gradientPalettes = {
  sunrise: {
    label: 'Sunrise Bloom',
    colors: ['#fb7185', '#f97316', '#38bdf8'],
  },
  aurora: {
    label: 'Aurora Pulse',
    colors: ['#22d3ee', '#6366f1', '#a855f7'],
  },
  neon: {
    label: 'Neon Night',
    colors: ['#14b8a6', '#0ea5e9', '#f472b6'],
  },
} as const;

type PaletteKey = keyof typeof gradientPalettes;

type GradientGrooveProps = {
  className?: string;
};

const GradientGroove = ({ className }: GradientGrooveProps) => {
  const [palette, setPalette] = useState<PaletteKey>('sunrise');
  const [angle, setAngle] = useState(42);

  const gradientStyle = useMemo(
    () => ({
      background: `linear-gradient(${angle}deg, ${gradientPalettes[palette].colors.join(', ')})`,
    }),
    [angle, palette],
  );

  return (
    <div className={cn('flex h-full flex-col gap-4', className)}>
      <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2">
        <div className="h-full w-full rounded-xl shadow-inner transition-all duration-500" style={gradientStyle} />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" aria-hidden />
        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex justify-between text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white/70 mix-blend-luminosity">
          <span>{gradientPalettes[palette].label}</span>
          <span>{angle}°</span>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs font-medium text-muted-foreground">
            Hoek
            <span className="font-mono text-sm text-highlight">{angle}°</span>
          </label>
          <input
            type="range"
            min={0}
            max={360}
            value={angle}
            onChange={(event) => setAngle(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-highlight"
            aria-label="Gradient hoek"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Paletten</p>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(gradientPalettes) as PaletteKey[]).map((key) => {
              const option = gradientPalettes[key];

              return (
                <button
                  type="button"
                  key={key}
                  onClick={() => setPalette(key)}
                  className={cn(
                    'relative h-12 w-12 overflow-hidden rounded-full border border-white/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    palette === key ? 'ring-2 ring-highlight/70 ring-offset-2 ring-offset-background' : '',
                  )}
                >
                  <span className="sr-only">{option.label}</span>
                  <span className="flex h-full w-full">
                    {option.colors.map((color) => (
                      <span key={color} className="flex-1" style={{ backgroundColor: color }} />
                    ))}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientGroove;
