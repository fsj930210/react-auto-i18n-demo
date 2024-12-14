// import { PUBLIC_PATH } from '@/constants';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';

const lang = 'en';
// console.log(PUBLIC_PATH);
i18next
  // .use(Backend)
  .use(LanguageDetector)
  .init({
    lng: lang,
    initAsync: false,
    partialBundledLanguages: false,
    // ns: [],
    resources: {
      [lang]: {
        translation: require(`/lang/${lang}.json`),
      },
      // zh: {
      //   translation: require(`/lang/zh.json`),
      // },
    },
    // backend: {
    //   // for all available options read the backend's repository readme file
    //   loadPath: `/lang/{{lng}}.json`,
    // },
    debug: true,
  });
// console.log(require(`/lang/en.json`));
// i18next.addResourceBundle(lang, 'translation', require(`/lang/${lang}.json`));
// export default i18next;
