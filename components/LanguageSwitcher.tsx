'use client';

import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    void i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        className="rounded-md border-2 border-primary bg-transparent px-3 py-1 text-2xl leading-none text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <option value="en">🇬🇧</option>
        <option value="nl">🇳🇱</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
