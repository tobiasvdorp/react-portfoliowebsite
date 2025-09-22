'use client';

import { useCallback, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

type Theme = 'light' | 'dark';

const ModeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>('dark');

  const applyTheme = useCallback((nextTheme: Theme) => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    document.body.setAttribute('data-theme', nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    applyTheme(storedTheme ?? 'dark');
  }, [applyTheme]);

  const handleThemeChange = () => {
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <label
      htmlFor="theme-toggle"
      className={`relative flex h-12 w-32 cursor-pointer items-center justify-between overflow-hidden rounded-md border border-background/20 px-3 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
        theme === 'dark' ? 'bg-background text-white' : 'bg-[#d21626] text-white'
      }`}
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="sr-only"
        checked={theme === 'dark'}
        onChange={handleThemeChange}
      />
      <span
        className={`absolute left-1 top-1 h-9 w-14 rounded-sm bg-white transition-transform duration-200 ${
          theme === 'dark' ? 'translate-x-[60px]' : ''
        }`}
      />
      <span className={`relative z-10 text-sm ${theme === 'dark' ? 'text-white' : 'text-[#d21626]'}`}>Light</span>
      <span className={`relative z-10 ml-auto text-sm ${theme === 'dark' ? 'text-black' : 'text-white'}`}>Dark</span>
    </label>
  );
};

export default ModeSwitcher;
