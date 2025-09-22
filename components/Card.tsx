'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { primaryButtonClasses } from '@/lib/styles';

export type ProjectSkill = {
  name: string;
  image: StaticImageData | string;
};

type CardProps = {
  title: string;
  imageSrc: StaticImageData;
  description: string;
  skills: ProjectSkill[];
  detailDescription: string;
  projectLocation: string;
  className: string;
  wowDelay: string;
};

const Card = ({
  title,
  imageSrc,
  description,
  skills,
  detailDescription,
  projectLocation,
  className,
  wowDelay,
}: CardProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleCloseClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsExpanded(false);
  };

  const openProject = () => {
    if (typeof window === 'undefined') {
      return;
    }
    window.open(projectLocation, '_blank', 'noopener,noreferrer');
  };

  const baseClasses =
    'wow flex h-full flex-col items-center gap-4 rounded-[10px] border border-accent/40 bg-secondary px-5 py-6 text-center text-white shadow-card transition-all duration-500 ease-in-out';
  const interactionClasses = isExpanded ? 'w-full max-w-[500px] cursor-default text-left hover:scale-100' : 'w-[300px] cursor-pointer hover:scale-[1.02]';

  return (
    <div className={`${baseClasses} ${interactionClasses} ${className}`} data-wow-delay={wowDelay} onClick={handleCardClick}>
      {!isExpanded && (
        <>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={imageSrc}
              alt={title}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-[270px] w-full max-w-[270px] rounded-[20px] object-cover"
            />
            <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
            <div className="h-px w-full bg-white/30" />
            <p className="text-base text-white/80">{description}</p>
            <div className="h-px w-full bg-white/30" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {skills.map((skill) => (
              <div className="group relative inline-flex flex-col items-center" key={skill.name}>
                <Image src={skill.image} alt={skill.name} width={48} height={48} className="h-12 w-12 object-contain" />
                <span className="pointer-events-none absolute top-16 whitespace-nowrap rounded-md bg-primary px-3 py-2 text-sm font-semibold text-black opacity-0 shadow-[0_0_10px_1px_var(--accent)] transition-opacity duration-300 group-hover:opacity-100">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {isExpanded && (
        <div className="flex w-full flex-col gap-4">
          <div className="flex w-full justify-end">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-accent/40 bg-secondary text-lg font-bold text-text transition-all duration-200 hover:bg-accent hover:text-black"
              onClick={handleCloseClick}
              type="button"
            >
              ×
            </button>
          </div>
          <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
          <p className="text-base text-white/80">{detailDescription}</p>
          <button className={`${primaryButtonClasses} w-full max-w-[220px]`} onClick={openProject} type="button">
            {t('See the result')} <i className="fa-solid fa-eye" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
