import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: "home",
          about: "about",
          history: "history",
          "our work": "our work",
          team: "team",
          services: "services",
          blog: "blog",
          testimonials: "testimonials",
          contact: "contact"
        }
      }
    },
    ar: {
      translation: {
        nav: {
          home: "الرئيسية",
          about: "من نحن",
          history: "السجل",
          "our work": "اعمالنا",
          team: "الفريق",
          services: "خدماتنا",
          blog: "مقالات",
          testimonials: "عملائنا",
          contact: "تواصل معنا"
        }
      }
    }
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});
export default i18n;
