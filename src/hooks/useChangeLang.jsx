// Hooks
import { useTranslation } from "react-i18next";

// Utils
import { addToLocalStorage, setAttr } from "../utils/utils";

export default function useChangeLang() {
  const { i18n } = useTranslation();

  function changeLang(lang) {
    lang = lang.toLowerCase();

    i18n.changeLanguage(lang);

    setAttr(document.documentElement, "dir", lang == "ar" ? "rtl" : "ltr");
    setAttr(document.documentElement, "lang", lang);

    addToLocalStorage("lang", lang);
  }

  return changeLang;
}