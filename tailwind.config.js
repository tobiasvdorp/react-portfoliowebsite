import defaultTheme from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecf8ff',
          100: '#d4edff',
          200: '#a6dbff',
          300: '#7bc4ff',
          400: '#4fa8ff',
          500: '#258dff',
          600: '#1c6fd6',
          700: '#1552a3',
          800: '#0e376f',
          900: '#081f45',
        },
      },
      backgroundImage: {
        'grid-dark':
          'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.08) 1px, transparent 0)',
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-up': 'slide-up 0.5s ease-out both',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['system-ui', ...defaultTheme.fontFamily.sans],
        display: ['system-ui', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: '0 0 45px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
