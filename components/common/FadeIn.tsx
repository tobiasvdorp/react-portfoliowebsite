'use client';

import type { ReactNode } from 'react';
import useInView from '@/hooks/useInView';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
};

const FadeIn = ({ children, className = '', delay = 0.1, blur = false }: FadeInProps) => {
  const { ref, isIntersecting } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transform transition duration-700 ease-out ${
        isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${blur && !isIntersecting ? 'filter blur-sm' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
