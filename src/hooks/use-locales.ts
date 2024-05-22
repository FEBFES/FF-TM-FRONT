import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ruLoc from '../locales/ru.json';
import enLoc from '../locales/en.json';

export const useLocales = () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enLoc },
      ru: { translation: ruLoc },
    },
    lng: 'ru',
    fallbackLng: 'en',
  });
};

// Переключение:
// const { i18n } = useTranslation();
// i18n.changeLanguage('it');
