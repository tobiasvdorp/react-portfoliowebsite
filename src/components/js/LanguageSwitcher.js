import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage || i18n.language;

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="lang-switch-container">
      <select
        value={currentLanguage}
        onChange={changeLanguage}
        style={{ fontSize: "35px" }}
      >
        <option value="en">
          <span role="img" aria-label="English flag">
            🇬🇧
          </span>
        </option>
        <option value="nl">
          <span role="img" aria-label="Dutch flag">
            🇳🇱
          </span>
        </option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
