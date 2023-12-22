import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en";
import nl from "./lang/nl";

i18n.use(initReactI18next).init({
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
        //TODO FIX DATE LOCALIZATION
        // format: (value, format, lng) => {
        //     if (format === "date") {
        //         return new Intl.DateTimeFormat(lng).format(value);
        //     }
        // },
    }
});

export default i18n;