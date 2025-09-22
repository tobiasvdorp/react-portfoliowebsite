import type { Config } from 'tailwindcss';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        text: 'var(--text)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Montserrat"', 'sans-serif'],
        body: ['"Hind Madurai"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 10px 1px #000',
        glow: '0 0 10px 1px var(--accent)',
      },
      keyframes: {
        glitch: {
          '0%, 50%, 100%': {
            transform: 'skewX(0deg) translateX(0px) scale(1, 1)',
            textShadow: '0px 0 cyan',
            clipPath: 'none',
          },
          '5%, 15%, 25%': {
            transform: 'skewX(12deg) translateX(-5px) scale(1, -1)',
            textShadow: '0px -2rem magenta, -5px 5px #fe0000',
          },
          '10%, 30%': {
            transform: 'skewX(25deg) translateX(15px) scale(1, 1)',
            textShadow: '-1rem 2rem yellow',
          },
          '35%, 45%': {
            transform: 'skewX(-12deg) translateX(-5px) scale(1, 1)',
            textShadow: '-1rem 2rem #fe0000, -10px 0px #ff00fe',
          },
        },
        shadowPulse: {
          '0%': { boxShadow: '0 0 5px #00ff00', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 20px #00ff00, 0 0 30px #00ff00', transform: 'scale(1.2)' },
          '100%': { boxShadow: '0 0 5px #00ff00', transform: 'scale(1)' },
        },
      },
      animation: {
        glitch: 'glitch 0.4s linear 2',
        'shadow-pulse': 'shadowPulse 2s infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
