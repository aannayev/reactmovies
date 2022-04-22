// import logo from "./logo.svg";
import "./App.scss";
// import { useState } from "react";
// import LanguageSwitch from "./LanguageSwitch";
// import { Preloader } from "./Preloader";
import React, { Component, Suspense } from "react";
// import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Form } from "./components/Form";
function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
