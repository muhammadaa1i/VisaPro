import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTranslation from './languages/uz.json'
import ruTranslation from './languages/ru.json'
import enTranslation from './languages/en.json'
  
 const language=localStorage.getItem('i18nextLng') || 'uz'
i18n
.use(Backend)
.use(LanguageDetector)
 .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: language,
    debug: true,
    resources: {
      en: { translation: enTranslation },
      uz: { translation: uzTranslation },
      ru: { translation: ruTranslation }
    },

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;