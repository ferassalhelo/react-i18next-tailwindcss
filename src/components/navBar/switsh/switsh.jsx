import React, { useContext } from "react";
import context from "../../../contextAPI/context";
import { useTranslation } from "react-i18next";

export default function Switsh() {
  let [, i18n] = useTranslation();
  let { dark, handledark } = useContext(context);
  return (
    <div
      onClick={handledark}
      className="w-14 h-4 rounded-full cursor-pointer bg-green-600 dark:bg-gray-300 relative flex items-center mt-1"
    >
      <span
        className={`${
          dark
            ? i18n.language === "en"
              ? "transform translate-x-8 "
              : "transform -translate-x-8"
            : null
        } absolue  bg-white border text-black transition duration-300 dark:bg-black dark:text-white w-6 h-6 rounded-full flex justify-center items-center`}
      >
        {dark ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun text-lg"></i>
        )}
      </span>
    </div>
  );
}
