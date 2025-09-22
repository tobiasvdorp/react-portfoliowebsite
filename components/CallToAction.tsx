'use client';

import { useTranslation } from 'react-i18next';
import useWOW from '@/hooks/useWOW';
import { primaryButtonClasses } from '@/lib/styles';
import TypeAnimation from './TypeAnimationClient';

const CallToAction = () => {
  const { t } = useTranslation();

  useWOW();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 text-center">
      <h1 className="animate__animated animate__slideInDown text-[2em] font-heading font-bold text-text">
        {t('Hi')}, <br />
        <TypeAnimation sequence={[t("I'm Tobias."), 1000]} speed={50} repeat={Infinity} style={{ color: 'var(--text)' }} />
      </h1>
      <div className="flex items-center justify-center">
        <a className={`${primaryButtonClasses} animate__animated animate__swing animate__delay-1s animate__flipInX`} href="#aboutme">
          {t('Explore')}
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
