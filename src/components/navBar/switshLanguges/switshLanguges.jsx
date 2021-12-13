import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import diff from "jest-diff";

export default function SwitshLanguges() {
  let pageDir = document.querySelector("html");
  let [, i18n] = useTranslation();

  let handleValue = e =>
    e.target.value === "en"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("ar");

  let dir = () =>
    i18n.language === "ar" ? (pageDir.dir = "rtl") : (pageDir.dir = "ltr");

  useEffect(() => {
    dir();
  });

  return (
    <form>
      <select
        name="lang"
        id="lang"
        className="outline-none dark:bg-gray-300 px-3 mx-4"
        onClick={handleValue}
      >
        <option value="en">en</option>
        <option value="ar">ar</option>
      </select>
    </form>
  );
}
