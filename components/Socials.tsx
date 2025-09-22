'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { iconButtonClasses } from '@/lib/styles';

const Socials = () => {
  const { t } = useTranslation();
  const [showAddMe, setShowAddMe] = useState(false);

  const toggleAddMe = () => {
    setShowAddMe((prev) => !prev);
  };

  return (
    <>
      <div id="socials" className="mt-12 flex w-full flex-col items-center gap-6">
        <div className="flex w-full max-w-3xl items-center justify-center gap-6">
          <div className="h-px flex-1 bg-text/40" />
          <button onClick={toggleAddMe} className={`${iconButtonClasses} text-3xl`} type="button">
            <i className="fa-brands fa-discord" />
          </button>
          <a
            href="https://github.com/tobiasvdorp"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconButtonClasses} text-3xl`}
          >
            <i className="fa-brands fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-van-dorp-433189257/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconButtonClasses} text-3xl`}
          >
            <i className="fa-brands fa-linkedin" />
          </a>
          <div className="h-px flex-1 bg-text/40" />
        </div>
      </div>
      {showAddMe && (
        <p className="animate__animated animate__fadeInLeft rounded-md bg-secondary px-4 py-3 text-center font-body text-lg font-medium text-white shadow-[0_0_10px_1px_var(--accent)]">
          {t('addMeOnDiscord')} <b>tobiasvandorp</b>
        </p>
      )}
    </>
  );
};

export default Socials;
