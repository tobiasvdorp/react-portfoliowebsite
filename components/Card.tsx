'use client';

import Image, { type StaticImageData } from 'next/image';
import {
  useEffect,
  useId,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
} from 'react';
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
  const modalTitleId = useId();

  useEffect(() => {
    if (!isExpanded) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [isExpanded]);

  const handleCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleKeyPress = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick();
    }
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setIsExpanded(false);
    }
  };

  const handleCloseClick = () => {
    setIsExpanded(false);
  };

  const openProject = () => {
    if (typeof window === 'undefined') {
      return;
    }
    window.open(projectLocation, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div
        className={`project-card wow ${className}`}
        aria-expanded={isExpanded}
        data-wow-delay={wowDelay}
        onClick={handleCardClick}
        onKeyDown={handleKeyPress}
        role="button"
        tabIndex={0}
      >
        <div className="project-card__image-wrapper">
          <Image
            alt={title}
            className="project-card__image"
            fill
            sizes="(max-width: 768px) 90vw, 320px"
            src={imageSrc}
          />
        </div>

        <div className="project-card__content">
          <h3 className="project-card__title">{title}</h3>
          <p className="project-card__description">{description}</p>
          <div className="project-card__skills">
            {skills.map((skill) => (
              <span className="project-card__skill" key={skill.name}>
                <Image
                  alt={skill.name}
                  className="project-card__skill-image"
                  height={24}
                  src={skill.image}
                  width={24}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          aria-labelledby={modalTitleId}
          aria-modal="true"
          className="project-card__modal"
          onClick={handleBackdropClick}
          role="dialog"
        >
          <div className="project-card__modal-content" onClick={(event) => event.stopPropagation()} role="document">
            <button
              aria-label="Close project details"
              className="project-card__close"
              onClick={handleCloseClick}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <div className="project-card__modal-image">
              <Image
                alt={title}
                className="project-card__modal-image-content"
                fill
                sizes="(max-width: 768px) 90vw, 480px"
                src={imageSrc}
              />
            </div>

            <h3 className="project-card__modal-title" id={modalTitleId}>
              {title}
            </h3>
            <p className="project-card__modal-description">{detailDescription}</p>

            <div className="project-card__modal-skills">
              {skills.map((skill) => (
                <span className="project-card__skill" key={`modal-${skill.name}`}>
                  <Image
                    alt={skill.name}
                    className="project-card__skill-image"
                    height={24}
                    src={skill.image}
                    width={24}
                  />
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="project-card__modal-actions">
              <button className="button result" onClick={openProject} type="button">
                {t('See the result')} <i className="fa-solid fa-eye" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
