import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources:{
      en: {
        translation:{
          hello: 'hello'
        }
      },
      es:{
        translation:{
          hello: 'Hola'
        }
      }
    }
  })