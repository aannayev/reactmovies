import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const isLoading = true;

// import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense>
    <App isLoading={isLoading} />
  </Suspense>
);
