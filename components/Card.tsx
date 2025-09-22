'use client';

import Image, { type StaticImageData } from 'next/image';
import { useState, type KeyboardEvent, type MouseEvent } from 'react';
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

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape' && isExpanded) {
      event.preventDefault();
      setIsExpanded(false);
      return;
    }

    if (!isExpanded && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      setIsExpanded(true);
    }
  };

  const handleCloseClick = (event: MouseEvent<HTMLButtonElement>) => {
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
    <div
      aria-expanded={isExpanded}
      className={`card ${isExpanded ? 'expanded' : ''} wow ${className}`}
      data-wow-delay={wowDelay}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="front-card">
        <div className="card-media">
          <Image
            alt={title}
            className="project-image"
            sizes="(max-width: 768px) 90vw, 320px"
            src={imageSrc}
          />
        </div>

        <div className="card-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <ul className="project-skills">
          {skills.map((skill) => (
            <li className="skill-pill" key={skill.name}>
              <Image alt={skill.name} height={28} src={skill.image} width={28} />
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-details">
        <div className="close">
          <button
            aria-label="Close project card"
            className="close-button button"
            onClick={handleCloseClick}
            type="button"
          >
            ×
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
