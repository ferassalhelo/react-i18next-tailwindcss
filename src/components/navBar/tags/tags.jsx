import React from "react";
import tags from "./objectTags";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Tags() {
  let closeNav = () => {
    let navBar = document.getElementById("nav");
    navBar.classList.remove("h-full");
    navBar.classList.remove("overflow-y-auto");
  };

  let [t] = useTranslation();
  let createTags = () => {
    return tags.map(item => {
      return (
        <li key={item.id}>
          <NavLink
            to={item.href}
            className="py-1 block text-white dark:text-black capitalize font-semibold mx-3 px-1 border-b-2 border-black hover:border-white dark:border-white dark:hover:border-black "
            onClick={closeNav}
          >
            {t("nav." + item.name)}
          </NavLink>
        </li>
      );
    });
  };
  return <ul className="lg:flex justify-center">{createTags()}</ul>;
}
