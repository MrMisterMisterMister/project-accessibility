import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './lang/en';
import nl from './lang/nl';

i18n.use(initReactI18next).use(LanguageDetector).init({
    resources: {
        en: {
            translation: en,
        },
        nl: {
            translation: nl,
        },
    },
    lng: "nl",
    fallbackLng: "nl",
    interpolation: {
        escapeValue: false,
    }
});

export default i18n;