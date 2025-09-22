import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(230 25% 8%)',
        foreground: 'hsl(210 20% 98%)',
        muted: {
          DEFAULT: 'hsl(230 20% 18%)',
          foreground: 'hsl(215 15% 65%)',
        },
        accent: {
          DEFAULT: 'hsl(282 74% 55%)',
          foreground: 'hsl(210 20% 98%)',
        },
        highlight: 'hsl(194 95% 68%)',
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: [
          '"JetBrains Mono"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      boxShadow: {
        glow: '0 0 35px hsla(282, 74%, 55%, 0.35)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};

export default config;
