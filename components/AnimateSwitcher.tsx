'use client';

import { useEffect, useState } from 'react';

const REDUCE_MOTION_STORAGE_KEY = 'reduceMotion';

const AnimateSwitcher = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedMotionPref = window.localStorage.getItem(REDUCE_MOTION_STORAGE_KEY);
    if (savedMotionPref !== null) {
      setReduceMotion(savedMotionPref === 'true');
    } else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    document.body.dataset.reduceMotion = reduceMotion ? 'true' : 'false';
    window.localStorage.setItem(REDUCE_MOTION_STORAGE_KEY, JSON.stringify(reduceMotion));
  }, [reduceMotion]);

  const toggleMotion = () => {
    setReduceMotion((prevState) => !prevState);
  };

  const isEnabled = !reduceMotion;

  return (
    <label
      htmlFor="animate-toggle"
      className={`relative flex h-12 w-32 cursor-pointer items-center justify-between overflow-hidden rounded-md border border-background/20 px-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
        isEnabled ? 'bg-[#66b317] text-white' : 'bg-[#d21626] text-white'
      }`}
    >
      <input
        type="checkbox"
        id="animate-toggle"
        className="sr-only"
        checked={isEnabled}
        onChange={toggleMotion}
      />
      <span
        className={`absolute left-1 top-1 h-9 w-14 rounded-sm bg-white transition-transform duration-200 ${
          isEnabled ? 'translate-x-[60px]' : ''
        }`}
      />
      <span className={`relative z-10 text-sm ${isEnabled ? 'text-white' : 'text-[#d21626]'}`}>Off</span>
      <span className={`relative z-10 ml-auto text-sm ${isEnabled ? 'text-[#2f6f15]' : 'text-white'}`}>On</span>
    </label>
  );
};

export default AnimateSwitcher;
