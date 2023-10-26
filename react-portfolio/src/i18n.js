import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Welcome: "Welcome",
      Hi: "Hi", // Let op de hoofdletter
      Explore: "Explore",
    },
  },
  nl: {
    translation: {
      Welcome: "Welkom",
      Hi: "Hoi", // Let op de hoofdletter
      "I'm Tobias.": "Ik ben Tobias.",
      Explore: "Ontdekken",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "nl",
  interpolation: {
    escapeValue: false,
  },
});

// Verplaats deze naar na de initialisatie
i18n.on("languageChanged", function (lng) {
  localStorage.setItem("language", lng);
});

// Bij het initialiseren
const savedLanguage = localStorage.getItem("language");
i18n.changeLanguage(savedLanguage || "en");

export default i18n;
