import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslations from '../locale/es.json'; // Ajustei o caminho, verifique se está correto
import enTranslations from '../locale/en.json'; // Ajustei o caminho, verifique se está correto
import frTranslations from '../locale/fr.json'; // Ajustei o caminho, verifique se está correto
import deTranslations from '../locale/de.json'; // Ajustei o caminho, verifique se está correto
import ptTranslations from '../locale/pt.json'; // Ajustei o caminho, verifique se está correto
import itTranslations from '../locale/it.json'; // Ajustei o caminho, verifique se está correto

// 1. Tenta obter o idioma salvo no localStorage
const savedLanguage = localStorage.getItem('userLanguage');

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
  lng: savedLanguage || 'pt', 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;