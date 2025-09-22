'use client';

import Image, { type StaticImageData } from 'next/image';

type SkillProps = {
  name: string;
  onClick: (skillName: string) => void;
  imageSrc: StaticImageData;
  isActive: boolean;
  shouldReduceMotion: boolean;
};

const Skill = ({ name, onClick, imageSrc, isActive, shouldReduceMotion }: SkillProps) => {
  const animationClasses = !shouldReduceMotion ? 'animate__backInLeft wow animate__animated' : '';
  const stateClasses = isActive
    ? 'scale-100 bg-primary text-secondary shadow-[0_0_8px_1px_var(--accent)]'
    : 'hover:scale-[1.05] hover:bg-primary/80 hover:text-secondary';

  return (
    <li
      onClick={() => onClick(name)}
      className={`flex cursor-pointer items-center gap-3 rounded-md px-3 py-3 font-heading text-base transition-all duration-200 ${stateClasses} ${animationClasses}`}
    >
      <Image src={imageSrc} alt={`${name} logo`} width={48} height={48} className="h-12 w-12 object-contain" />
      {name}
    </li>
  );
};

export default Skill;
