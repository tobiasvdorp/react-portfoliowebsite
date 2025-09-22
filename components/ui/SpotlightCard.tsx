'use client';

import { useRef, useState, type ReactNode } from 'react';
import clsx from 'clsx';

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

const SpotlightCard = ({ children, className }: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) {
      return;
    }

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    setSpotlight({ x, y, visible: true });
  };

  const handlePointerLeave = () => {
    setSpotlight((prev) => ({ ...prev, visible: false }));
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={clsx(
        'group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-px backdrop-blur-xl transition-all duration-300 hover:border-white/10',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(59,130,246,0.18), transparent 70%)`,
          opacity: spotlight.visible ? 1 : 0,
        }}
      />
      <div className="relative rounded-[calc(1.5rem-2px)] bg-slate-950/60 p-6 sm:p-8">
        {children}
      </div>
    </div>
  );
};

export default SpotlightCard;
