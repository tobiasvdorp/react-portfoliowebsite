'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

const useInView = <T extends HTMLElement>({ once = true, threshold = 0.2, rootMargin = '0px' }: UseInViewOptions = {}) => {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, rootMargin, threshold]);

  return { ref, isIntersecting } as const;
};

export default useInView;
