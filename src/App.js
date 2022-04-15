import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import LanguageSwitch from "./LanguageSwitch";

import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  console.log(i18n);
  return (
    <div className="App">
      <nav style={{ width: "100%", padding: "2em 0", backgroundColor: "grey" }}>
        <button onClick={() => changeLanguage("en")}>English</button>

        <button onClick={() => changeLanguage("it")}>Italian</button>

        <button onClick={() => changeLanguage("ru")}>russian</button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h2>{t("hello")}</h2>
      </header>
    </div>
  );
}

export default App;
