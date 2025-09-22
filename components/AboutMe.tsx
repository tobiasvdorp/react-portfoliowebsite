'use client';

import { useTranslation } from 'react-i18next';
import useWOW from '@/hooks/useWOW';
import { sectionSubtitleClasses, sectionTitleClasses } from '@/lib/styles';
import AboutMeCard from './AboutMeCard';

const AboutMe = () => {
  const { t } = useTranslation();

  useWOW();

  return (
    <section id="aboutme" className="scroll-mt-24 px-5">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col items-center gap-6 lg:w-1/2">
          <h2 className={sectionTitleClasses}>{t('About myself.')}</h2>
          <h3 className={sectionSubtitleClasses}>{t('Limited edition.')}</h3>
          <div className="wow animate__fadeInRight animate__animated w-full rounded-lg border border-accent/60 bg-secondary px-6 py-6 pr-24 text-left text-white shadow-[0_0_10px_1px_var(--accent)]">
            <div className="relative">
              <h3 className="mb-2 font-heading text-2xl font-semibold text-white">
                {t('About Tobias van Dorp')}
              </h3>
              <div className="absolute right-0 top-0 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-70">
                <i className="fa fa-calendar" />
                {t('February 7th 2003')}
              </div>
            </div>
            <h4 className="mt-10 flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-wide text-white/80">
              <i className="fa fa-flag fa-sm" />
              {t('Maarn, Utrecht, Netherlands')}
            </h4>
            <p className="mt-4 text-left text-base text-white/80">{t('aboutme_description')}</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-6 lg:w-1/2">
          <h2 className={sectionTitleClasses} id="carreer">
            {t('My carreer')}
          </h2>
          <h3 className={sectionSubtitleClasses}>{t('Experience points accumulating...')}</h3>
          <ul className="relative flex w-full flex-col gap-4 border-l-[8px] border-secondary/80 pl-6">
            <AboutMeCard
              title={t('HAVO-degree')}
              date={t('Juli 2021')}
              location={t('Amersfoort, Utrecht')}
              description={
                <>
                  {t('havo_description')}
                  <a
                    href="https://www.socrateshonours.org/lid-worden/socrates-awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                  >
                    {t('Socrates Award')}
                  </a>{' '}
                  {t('havo_description_2')}
                </>
              }
            />
            <AboutMeCard
              title={t("Bachelor's degree at OpenICT")}
              date={t('September 2022 - now')}
              location="Hogeschool Utrecht"
              description={t('openict_description')}
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
