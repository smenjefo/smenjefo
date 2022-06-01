import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './data/en.json';

// TODO: localization
i18n
  .use(initReactI18next)
  .init({
    partialBundledLanguages: true,
    resources: {
      en: {
        translation: en,
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;