'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

type MoodKey = 'focus' | 'chill' | 'party';

type EmojiSpot = {
  id: string;
  emoji: string;
  top: number;
  left: number;
  rotation: number;
  scale: number;
};

const moodEmoji: Record<MoodKey, string[]> = {
  focus: ['💡', '⌨️', '🧠', '📎', '📈', '☕', '📚', '📝'],
  chill: ['🌿', '🪴', '🌙', '💤', '☁️', '🧊', '🍵', '🫧'],
  party: ['🎉', '🎧', '🎈', '🪩', '🎵', '🔥', '🎮', '🛼'],
};

const moodBackground: Record<MoodKey, string> = {
  focus: 'from-[#2D2A49]/80 via-[#201F3A]/80 to-[#151430]/80',
  chill: 'from-[#1A3C34]/80 via-[#112822]/80 to-[#0A1512]/80',
  party: 'from-[#45123E]/80 via-[#2B0D2A]/80 to-[#150611]/80',
};

const generateSpots = (mood: MoodKey, count = 14): EmojiSpot[] =>
  Array.from({ length: count }, (_, index) => {
    const emojiList = moodEmoji[mood];
    const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];

    return {
      id: `${mood}-${index}-${Math.random().toString(36).slice(2, 8)}`,
      emoji,
      top: Math.random() * 70 + 5,
      left: Math.random() * 70 + 5,
      rotation: (Math.random() - 0.5) * 40,
      scale: 0.7 + Math.random() * 0.9,
    };
  });

const EmojiGarden = () => {
  const [mood, setMood] = useState<MoodKey>('focus');
  const [spots, setSpots] = useState(() => generateSpots('focus'));

  const headline = useMemo(() => {
    switch (mood) {
      case 'chill':
        return 'Maak ruimte om even te dromen.';
      case 'party':
        return 'Instant dopamine drops.';
      default:
        return 'Focus fuel voor je volgende idee.';
    }
  }, [mood]);

  const refresh = (nextMood?: MoodKey) => {
    const updatedMood = nextMood ?? mood;
    setMood(updatedMood);
    setSpots(generateSpots(updatedMood));
  };

  return (
    <div className="flex h-full flex-col gap-4">
      <div
        className={`relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${moodBackground[mood]}`}
      >
        <motion.div
          key={mood}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {spots.map((spot) => (
          <motion.span
            key={spot.id}
            className="absolute select-none text-3xl"
            style={{
              top: `${spot.top}%`,
              left: `${spot.left}%`,
              rotate: `${spot.rotation}deg`,
              scale: spot.scale,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: spot.scale }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {spot.emoji}
          </motion.span>
        ))}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent p-4">
          <p className="text-sm text-muted-foreground">{headline}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {(Object.keys(moodEmoji) as MoodKey[]).map((moodKey) => (
          <button
            key={moodKey}
            type="button"
            onClick={() => refresh(moodKey)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              mood === moodKey
                ? 'border-highlight/60 bg-highlight/20 text-foreground'
                : 'border-white/10 bg-white/5 text-muted-foreground hover:border-white/30'
            }`}
          >
            {moodKey}
          </button>
        ))}
        <button
          type="button"
          onClick={() => refresh()}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition hover:border-highlight/60 hover:text-highlight focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default EmojiGarden;
