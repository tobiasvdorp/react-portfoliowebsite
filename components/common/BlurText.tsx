'use client';

import useInView from '@/hooks/useInView';

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
};

const BlurText = ({ text, className = '', delay = 0.05 }: BlurTextProps) => {
  const words = text.split(' ');
  const { ref, isIntersecting } = useInView<HTMLHeadingElement>({ threshold: 0.4 });

  return (
    <h1 ref={ref} className={`flex flex-wrap gap-x-2 text-left leading-tight ${className}`}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{ transitionDelay: `${delay * index}s` }}
          className={`inline-block transform text-left transition duration-700 ease-out ${
            isIntersecting ? 'opacity-100 blur-0' : 'opacity-0 blur-md'
          }`}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

export default BlurText;
