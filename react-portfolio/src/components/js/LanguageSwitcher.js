import React from "react";
import i18n from "../../i18n";

function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="lang-switch-container">
      <button onClick={() => changeLanguage("en")}>EN</button> /
      <button onClick={() => changeLanguage("nl")}> NL</button>
    </div>
  );
}

export default LanguageSwitcher;
