'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const moodLibrary = {
  nacht: {
    label: 'Midnight',
    lines: {
      first: ['Zachte baslijnen', 'Pixels in slow-mode', 'Neon ademtochten'],
      second: ['zweven door de skyline', 'drijven door de stilte', 'ritmen boven asfalt'],
      third: ['ik typ zonder haast', 'commit in maanlicht', 'focus voelt vloeibaar'],
    },
  },
  ochtend: {
    label: 'Sunrise',
    lines: {
      first: ['Warme koffiestoom', 'Vroege toetsenborden', 'Zonnestralen tikken'],
      second: ['wekken mijn editor', 'bloeien in de backlog', 'vinden zachte bugs'],
      third: ['push met frisse zin', 'ik adem refactor', 'klaar voor stand-up glow'],
    },
  },
  regen: {
    label: 'Rain Delay',
    lines: {
      first: ['Lo-fi regenbeat', 'Druppels syncen mee', 'Blauwe windowpane'],
      second: ['tikken tegen ruiten', 'filteren gedachten', 'klinken als hi-hats'],
      third: ['ik ship met rust aan', 'branch stroomt net als water', 'merge voelt als thuiskomst'],
    },
  },
} as const;

type MoodKey = keyof typeof moodLibrary;

const pickLine = (lines: readonly string[]) => lines[Math.floor(Math.random() * lines.length)];

const buildHaiku = (mood: MoodKey) => {
  const source = moodLibrary[mood].lines;
  return [pickLine(source.first), pickLine(source.second), pickLine(source.third)];
};

type LoFiHaikuProps = {
  className?: string;
};

const LoFiHaiku = ({ className }: LoFiHaikuProps) => {
  const [mood, setMood] = useState<MoodKey>('nacht');
  const [haiku, setHaiku] = useState(() => buildHaiku('nacht'));

  const switchMood = (nextMood: MoodKey) => {
    setMood(nextMood);
    setHaiku(buildHaiku(nextMood));
  };

  const shuffle = () => {
    setHaiku(buildHaiku(mood));
  };

  return (
    <div className={cn('flex h-full flex-col gap-4', className)}>
      <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">Mood</p>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(moodLibrary) as MoodKey[]).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => switchMood(key)}
                className={cn(
                  'rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-highlight/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                  mood === key ? 'border-highlight/70 bg-highlight/15 text-foreground' : '',
                )}
              >
                {moodLibrary[key].label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative mt-4 flex flex-1 flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-black/60 p-5">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-highlight/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-accent/20 blur-3xl" aria-hidden />
          <ul className="relative space-y-3 font-mono text-sm leading-relaxed text-muted-foreground">
            {haiku.map((line, index) => (
              <li key={`${line}-${index}`} className="rounded-md bg-white/5 px-3 py-2">
                {line}
              </li>
            ))}
          </ul>
          <div className="relative mt-4 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span>Lo-fi breathing</span>
            <span>{moodLibrary[mood].label}</span>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
          <span>Nieuwe inspiratie nodig?</span>
          <button
            type="button"
            onClick={shuffle}
            className="rounded-full border border-white/15 px-3 py-1.5 font-medium transition hover:border-highlight/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Genereer haiku
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoFiHaiku;
