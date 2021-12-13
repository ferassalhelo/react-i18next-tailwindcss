import React, { useState, useEffect } from "react";
import Logo from "./logo/logo";
import Tags from "./tags/tags";
import Switsh from "./switsh/switsh";
import SwitshLanguges from "./switshLanguges/switshLanguges";

export default function NavBar() {
  let [screenWidth, handleScreenWidth] = useState(window.innerWidth < 1024);

  window.addEventListener("resize", () => {
    window.innerWidth < 1024
      ? handleScreenWidth(true)
      : handleScreenWidth(false);
  });

  useEffect(() => {
    let navBar = document.getElementById("nav");
    document.getElementById("btn").addEventListener("click", () => {
      navBar.classList.toggle(`h-full`);
    });
  }, []);

  return (
    <div
      className="h-14 fixed left-0 right-0 bg-black dark:bg-white transform transition-all duration-300 overflow-hidden "
      id="nav"
    >
      <nav className="lg:flex container items-baseline my-2 mx-auto">
        <div className="lg:w-2/12 w-full flex lg:block items-center justify-between mb-3">
          <Logo />
          <span id="btn">
            {screenWidth ? (
              <i className="fas fa-bars lg:hidden text-white dark:text-black text-2xl cursor-pointer p-1"></i>
            ) : null}
          </span>
        </div>
        <div className="lg:w-8/12 w-full">
          <Tags />
        </div>
        <div className="lg:w-2/12 w-full flex lg:justify-center lg:m-0 m-2">
          <SwitshLanguges />
          <Switsh />
        </div>
      </nav>
    </div>
  );
}
