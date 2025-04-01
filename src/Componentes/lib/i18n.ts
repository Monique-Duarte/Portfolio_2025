import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations  from '../locale/es.json';
import enTranslations  from '../locale/en.json';
import frTranslations from '../locale/fr.json';
import deTranslations from '../locale/de.json';
import ptTranslations from '../locale/pt.json';
import itTranslations from '../locale/it.json';

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      ...ptTranslations
    },
    en: {
      ...enTranslations
    },
    es: {
      ...esTranslations
    },
    fr: {
      ...frTranslations
    },
    it: {
      ...itTranslations
    },
    de: {
      ...deTranslations
    },
  },
  fallbackLng: 'pt',
  lng: 'pt',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});