'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { iconButtonClasses } from '@/lib/styles';
import AnimateSwitcher from './AnimateSwitcher';
import ModeSwitcher from './ModeSwitcher';

const SettingsMenu = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__bounceInLeft');

  const openMenu = () => {
    setAnimationClass('animate__bounceOutLeft');
    window.setTimeout(() => {
      setAnimationClass('animate__bounceInLeft');
      setIsOpen(true);
    }, 300);
  };

  const closeMenu = () => {
    setAnimationClass('animate__bounceOutLeft');

    window.setTimeout(() => {
      setAnimationClass('animate__bounceInLeft');
    }, 300);
    window.setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className={`animate__animated ${animationClass} fixed left-7 top-[88px] z-[1000] flex flex-col gap-3 text-background max-sm:left-3 max-sm:top-[65px]`}
    >
      {!isOpen && (
        <button
          className={`${iconButtonClasses} text-2xl text-background`}
          onClick={openMenu}
          type="button"
          aria-label={t('settings')}
        >
          <i className="fa-solid fa-gear" />
        </button>
      )}

      {isOpen && (
        <div className="flex w-56 flex-col gap-4 rounded-md border border-background/20 bg-accent/95 p-4 text-background shadow-[0_0_10px_1px_var(--accent)]">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-lg">{t('settings')}</h4>
            <button
              onClick={closeMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-background/30 bg-background/20 text-xl font-bold text-background transition-colors duration-200 hover:bg-background hover:text-text"
              type="button"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wide">
            <span>{t('theme')}</span>
            <ModeSwitcher />
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wide">
            <span>{t('animations')}</span>
            <AnimateSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
