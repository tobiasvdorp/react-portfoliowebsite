'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { HTMLAttributeAnchorTarget } from 'react';
import { cn } from '@/lib/utils';

type ShinyButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

const baseClasses =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background';

const ShinyButton = ({
  href,
  children,
  className,
  onClick,
  variant = 'primary',
  icon,
  type = 'button',
  target,
  rel,
}: ShinyButtonProps) => {
  const content = (
    <span className={cn('relative z-10 flex items-center gap-2', variant === 'ghost' ? 'text-foreground' : 'text-background')}>
      {children}
      {icon ?? null}
    </span>
  );

  const classNames = cn(
    baseClasses,
    variant === 'primary'
      ? 'bg-gradient-to-r from-accent via-highlight to-accent shadow-glow'
      : 'border border-white/20 bg-white/5 hover:border-highlight/80',
    className,
  );

  return href ? (
    <Link href={href} className={classNames} onClick={onClick} target={target} rel={rel}>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
        animate={{ background: ['linear-gradient(130deg, rgba(255,255,255,0.1), transparent)', 'linear-gradient(130deg, rgba(255,255,255,0.35), transparent)'] }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2.4 }}
      />
      {content}
    </Link>
  ) : (
    <button type={type} className={classNames} onClick={onClick}>
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        initial={false}
        animate={{ background: ['linear-gradient(130deg, rgba(255,255,255,0.1), transparent)', 'linear-gradient(130deg, rgba(255,255,255,0.35), transparent)'] }}
        transition={{ repeat: Infinity, repeatType: 'mirror', duration: 2.4 }}
      />
      {content}
    </button>
  );
};

export default ShinyButton;
