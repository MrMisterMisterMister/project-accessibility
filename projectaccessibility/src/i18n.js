import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const modules = require.context("./lang", true, /\.json$/);

let translations = {};

// Loop over the keys (paths) in the modules object
for (const path in modules) {
    // Extract the language and namespace from the path
    const match = path.match(/\.\/translations\/(\w+)\/(\w+)\.json$/);
    if (match) {
        const lang = match[1];
        const namespace = match[2];
        if (!translations[lang]) {
            translations[lang] = {};
        }
        // Get the default export of the module and add it to the translations object
        translations[lang][namespace] = modules[path].default;
    }
}

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: translations,
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "i18nextLng",
        },
        fallbackLng: "nl",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
