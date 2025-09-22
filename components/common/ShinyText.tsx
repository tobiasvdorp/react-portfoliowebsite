'use client';

import type { CSSProperties } from 'react';

const shimmerAnimation = {
  backgroundImage: 'linear-gradient(120deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.4))',
  backgroundSize: '200% 100%',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
} satisfies CSSProperties;

type ShinyTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

const ShinyText = ({ text, className = '', speed = 3 }: ShinyTextProps) => (
  <span
    className={`inline-block bg-clip-text font-semibold text-transparent ${className}`}
    style={{
      ...shimmerAnimation,
      animation: `shimmer ${speed}s ease-in-out infinite`,
    }}
  >
    {text}
  </span>
);

export default ShinyText;
