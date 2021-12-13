import React, { useState } from "react";
import context from "./contextAPI/context";
import NavBar from "./components/navBar/navBar";

export default function App() {
  let [dark, handleDark] = useState(false);
  let handledark = () => {
    handleDark(!dark);
    console.log(dark);
  };

  return (
    <context.Provider value={{ dark, handledark }}>
      <div className={`${dark ? "dark" : null}`} style={{ height: "1000px" }}>
        <NavBar />
      </div>
    </context.Provider>
  );
}
