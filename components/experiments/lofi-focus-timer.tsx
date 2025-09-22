'use client';

import { useEffect, useMemo, useState } from 'react';

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainder = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${minutes}:${remainder}`;
};

const LoFiFocusTimer = () => {
  const [mode, setMode] = useState<'focus' | 'break'>('focus');
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [timeLeft, setTimeLeft] = useState(focusMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);

  const durations = useMemo(
    () => ({ focus: focusMinutes * 60, break: breakMinutes * 60 }),
    [focusMinutes, breakMinutes]
  );

  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(durations[mode]);
    }
  }, [durations, mode, isRunning]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const interval = setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          const nextMode = mode === 'focus' ? 'break' : 'focus';
          const nextDuration = durations[nextMode];
          setMode(nextMode);
          return nextDuration;
        }

        return current - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode, durations]);

  const activeDuration = durations[mode] || 1;
  const progress = Math.max(0, Math.min(1, 1 - timeLeft / activeDuration));

  return (
    <div className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-lg">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-highlight">{mode === 'focus' ? 'focus' : 'break'}</p>
        <p className="font-display text-4xl font-semibold text-foreground">{formatTime(timeLeft)}</p>
        <p className="text-xs text-muted-foreground">
          Stel je sessies af op jouw vibe en laat de timer de rest doen. Wissel automatisch tussen focus en pauze.
        </p>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-highlight via-highlight to-accent"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
        <label className="flex flex-col gap-1 rounded-xl border border-white/10 bg-background/60 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-highlight">focus minuten</span>
          <input
            type="range"
            min={10}
            max={50}
            step={5}
            value={focusMinutes}
            onChange={(event) => {
              const value = Number(event.target.value);
              setFocusMinutes(value);
              if (!isRunning && mode === 'focus') {
                setTimeLeft(value * 60);
              }
            }}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-highlight"
          />
          <span className="text-xs text-foreground">{focusMinutes} minuten</span>
        </label>
        <label className="flex flex-col gap-1 rounded-xl border border-white/10 bg-background/60 p-4">
          <span className="text-xs uppercase tracking-[0.25em] text-highlight">pauze minuten</span>
          <input
            type="range"
            min={3}
            max={15}
            step={1}
            value={breakMinutes}
            onChange={(event) => {
              const value = Number(event.target.value);
              setBreakMinutes(value);
              if (!isRunning && mode === 'break') {
                setTimeLeft(value * 60);
              }
            }}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-highlight"
          />
          <span className="text-xs text-foreground">{breakMinutes} minuten</span>
        </label>
      </div>
      <div className="flex flex-wrap gap-2 text-xs font-semibold">
        <button
          type="button"
          onClick={() => {
            const nextMode = mode === 'focus' ? 'break' : 'focus';
            setMode(nextMode);
            setTimeLeft(durations[nextMode]);
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-foreground transition hover:border-highlight/70 hover:bg-highlight/20"
        >
          Wissel modus
        </button>
        <button
          type="button"
          onClick={() => setIsRunning((current) => !current)}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-gradient-to-r from-highlight/80 via-highlight to-accent px-4 py-2 text-background transition hover:brightness-105"
        >
          {isRunning ? 'Pauzeer' : 'Start'}
        </button>
        <button
          type="button"
          onClick={() => {
            setIsRunning(false);
            setTimeLeft(durations[mode]);
          }}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-foreground transition hover:border-highlight/70 hover:bg-highlight/20"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default LoFiFocusTimer;
