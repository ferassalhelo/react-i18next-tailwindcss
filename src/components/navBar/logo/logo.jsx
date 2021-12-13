import React from "react";
import { NavLink } from "react-router-dom";
export default function Logo() {
  return (
    <>
      <div className="flex items-center lg:justify-center">
        <NavLink
          to="#home"
          className="font-semibold text-3xl capitalize text-white dark:text-black"
        >
          lamoda
        </NavLink>
      </div>
    </>
  );
}
