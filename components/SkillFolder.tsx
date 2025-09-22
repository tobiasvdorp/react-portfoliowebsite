'use client';

import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { StaticImageData } from 'next/image';
import htmlLogo from '../public/images/HTMLlogo.png';
import cssLogo from '../public/images/CSSlogo.png';
import reactLogo from '../public/images/reactIMG.png';
import nextLogo from '../public/images/next.png';
import builderLogo from '../public/images/builder.avif';
import tailwindLogo from '../public/images/TailwindCSS.png';
import elementorLogo from '../public/images/Elementor.png';
import wordpressLogo from '../public/images/WordPress.png';
import { sectionSubtitleClasses, sectionTitleClasses } from '@/lib/styles';
import Skill from './Skill';
import TypeAnimation from './TypeAnimationClient';

const REDUCE_MOTION_STORAGE_KEY = 'reduceMotion';

type SkillDetail = {
  name: string;
  description: string;
  imageSrc: StaticImageData;
  skillLevel: string;
};

const SkillFolder = () => {
  const { t } = useTranslation();
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const savedMotionPref = window.localStorage.getItem(REDUCE_MOTION_STORAGE_KEY);
    setShouldReduceMotion(savedMotionPref === 'true');
  }, []);

  const skills = useMemo<SkillDetail[]>(
    () => [
      {
        name: 'HTML',
        description: t('HTML_description'),
        imageSrc: htmlLogo,
        skillLevel: t('HTML_skillLevel'),
      },
      {
        name: 'CSS',
        description: t('CSS_description'),
        imageSrc: cssLogo,
        skillLevel: t('CSS_skillLevel'),
      },
      {
        name: 'React',
        description: t('React_description'),
        imageSrc: reactLogo,
        skillLevel: t('React_skillLevel'),
      },
      {
        name: 'NextJS',
        description: t('NextJS_description'),
        imageSrc: nextLogo,
        skillLevel: t('NextJS_skillLevel'),
      },
      {
        name: 'TailwindCSS',
        description: t('TailwindCSS_description'),
        imageSrc: tailwindLogo,
        skillLevel: t('TailwindCSS_skillLevel'),
      },
      {
        name: 'Elementor',
        description: t('Elementor_description'),
        imageSrc: elementorLogo,
        skillLevel: t('Elementor_skillLevel'),
      },
      {
        name: 'Builder.io',
        description: t('Builderio_description'),
        imageSrc: builderLogo,
        skillLevel: t('Builderio_skillLevel'),
      },
      {
        name: 'WordPress',
        description: t('WordPress_description'),
        imageSrc: wordpressLogo,
        skillLevel: t('WordPress_skillLevel'),
      },
    ],
    [t]
  );

  const selectSkill = (name: string) => {
    const skill = skills.find((item) => item.name === name) ?? null;
    setSelectedSkill(skill);
  };

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-5 text-text" id="skills">
      <h2 className={sectionTitleClasses}>{t('skills_title')}</h2>
      <h3 className={sectionSubtitleClasses}>{t('skills_under')}</h3>
      <div className="flex w-full justify-center">
        <div className="flex w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-accent/60 bg-secondary text-white shadow-[0_0_10px_1px_var(--accent)] md:flex-row">
          <div className="w-full border-b border-accent/40 md:w-2/5 md:border-b-0 md:border-r">
            <ul className="flex flex-col gap-3 p-4">
              {skills.map((skill) => (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  onClick={selectSkill}
                  imageSrc={skill.imageSrc}
                  isActive={selectedSkill?.name === skill.name}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ))}
            </ul>
          </div>
          <div className="flex w-full flex-col gap-4 p-6 text-left md:w-3/5">
            {selectedSkill ? (
              <>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-primary">{t('what_isit')}</h3>
                  <TypeAnimation
                    key={`description-${selectedSkill.name}`}
                    sequence={[selectedSkill.description, 1000]}
                    speed={90}
                    style={{ color: 'var(--text)' }}
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-semibold text-primary">{t('how_skilled')}</h3>
                  <TypeAnimation
                    key={`skill-level-${selectedSkill.name}`}
                    sequence={[selectedSkill.skillLevel, 1000]}
                    speed={90}
                    style={{ color: 'var(--text)' }}
                  />
                </div>
              </>
            ) : (
              <p
                id="select-skill"
                className={
                  !shouldReduceMotion
                    ? 'animate__fadeInDown wow animate__animated animate__delay-1s text-primary'
                    : 'text-primary'
                }
              >
                {t('skills_select')}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillFolder;
