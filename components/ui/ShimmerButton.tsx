import type { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type ShimmerButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

const ShimmerButton = ({ href, children, className }: ShimmerButtonProps) => (
  <Link
    href={href}
    className={clsx(
      'group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
      className
    )}
  >
    <span className="absolute inset-0 overflow-hidden rounded-full">
      <span className="absolute inset-0 h-full w-full animate-shimmer bg-[linear-gradient(110deg,rgba(59,130,246,0.15),45%,rgba(56,189,248,0.65),55%,rgba(59,130,246,0.15))]" />
      <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </span>
    <span className="relative flex items-center gap-2">
      {children}
    </span>
  </Link>
);

export default ShimmerButton;
