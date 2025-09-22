import clsx from 'clsx';
import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-100 backdrop-blur transition-colors duration-200 group-hover:border-brand-300 group-hover:text-brand-200',
      className
    )}
  >
    {children}
  </span>
);

export default Badge;
