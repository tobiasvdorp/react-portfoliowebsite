'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const palette = [
  { key: 'lagoon', label: 'Lagoon', value: '#22d3ee' },
  { key: 'violet', label: 'Violet', value: '#a855f7' },
  { key: 'blush', label: 'Blush', value: '#f472b6' },
  { key: 'glow', label: 'Glow', value: '#facc15' },
  { key: 'erase', label: 'Gum', value: 'transparent' },
] as const;

const GRID_SIZE = 36;
const GRID_COLUMNS = 6;

type PaletteValue = (typeof palette)[number]['value'];

type PixelPaletteProps = {
  className?: string;
};

const PixelPalette = ({ className }: PixelPaletteProps) => {
  const [activeColor, setActiveColor] = useState<PaletteValue>(palette[0].value);
  const [pixels, setPixels] = useState<string[]>(() => Array.from({ length: GRID_SIZE }, () => ''));
  const [isDragging, setIsDragging] = useState(false);

  const paintPixel = (index: number) => {
    setPixels((prev) => {
      const next = [...prev];
      next[index] = activeColor === 'transparent' ? '' : activeColor;
      return next;
    });
  };

  const handlePointerDown = (index: number) => {
    paintPixel(index);
    setIsDragging(true);
  };

  const handlePointerEnter = (index: number, buttons: number) => {
    if (buttons === 1 && isDragging) {
      paintPixel(index);
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const resetGrid = () => {
    setPixels(Array.from({ length: GRID_SIZE }, () => ''));
  };

  return (
    <div className={cn('flex h-full flex-col gap-4', className)}>
      <div
        className="flex flex-1 flex-col gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className="grid flex-1 grid-cols-6 gap-1 rounded-xl border border-white/5 bg-white/5 p-3"
          style={{ gridTemplateColumns: `repeat(${GRID_COLUMNS}, minmax(0, 1fr))` }}
        >
          {pixels.map((color, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Cel ${index + 1}`}
              onPointerDown={(event) => {
                event.preventDefault();
                handlePointerDown(index);
              }}
              onPointerEnter={(event) => handlePointerEnter(index, event.buttons)}
              className="group relative flex items-center justify-center rounded-[0.6rem] border border-white/10 transition hover:border-highlight/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                className={cn(
                  'absolute inset-0 rounded-[0.55rem] transition duration-150',
                  color ? 'shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)]' : 'bg-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] group-hover:bg-white/15',
                )}
                style={color ? { backgroundColor: color } : undefined}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {palette.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setActiveColor(option.value)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-highlight/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  activeColor === option.value ? 'border-highlight/70 bg-highlight/15 text-foreground' : '',
                )}
              >
                <span
                  className="h-3.5 w-3.5 rounded-full"
                  style={
                    option.value === 'transparent'
                      ? {
                          backgroundImage:
                            'linear-gradient(45deg, rgba(255,255,255,0.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.35) 75%), linear-gradient(45deg, rgba(255,255,255,0.35) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.35) 75%)',
                          backgroundSize: '8px 8px',
                          backgroundPosition: '0 0, 4px 4px',
                        }
                      : { backgroundColor: option.value }
                  }
                  aria-hidden
                />
                {option.label}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={resetGrid}
            className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-highlight/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default PixelPalette;
