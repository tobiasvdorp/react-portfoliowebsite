'use client';

import type { ComponentProps } from 'react';
import ShinyText from './ShinyText';

type AnimatedEyebrowProps = {
  text: string;
  className?: string;
  speed?: ComponentProps<typeof ShinyText>['speed'];
};

const AnimatedEyebrow = ({ text, className, speed = 3 }: AnimatedEyebrowProps) => (
  <ShinyText text={text} className={className} speed={speed} />
);

export default AnimatedEyebrow;
