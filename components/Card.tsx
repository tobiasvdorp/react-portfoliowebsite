'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''} wow ${className}`} data-wow-delay={wowDelay} onClick={handleCardClick}>
      <div className="front-card">
        <Image src={imageSrc} alt={title} sizes="(max-width: 768px) 100vw, 33vw" />
        <h3>{title}</h3>
        <hr />
        <div className="cardtekst">
          <p>{description}</p>
        </div>
        <hr />
      </div>

      <div className="project-skills">
        {skills.map((skill) => (
          <div className="skill-tooltip" key={skill.name}>
            <Image src={skill.image} alt={skill.name} width={48} height={48} />
            <span className="tooltip-text">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="project-details">
        <div className="close">
          <button className="close-button button" onClick={handleCloseClick} type="button">
            X
          </button>
        </div>
        <h3>{title}</h3>
        <p>{detailDescription}</p>
        <button className="button result" onClick={openProject} type="button">
          {t('See the result')} <i className="fa-solid fa-eye" />
        </button>
      </div>
    </div>
  );
};

export default Card;
