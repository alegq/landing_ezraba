import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation: require('./public/locales/en/translations.json'),
    },
    he: {
      translation: require('./public/locales/he/translations.json'),
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
