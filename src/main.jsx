import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const rootElement = document.querySelector(".root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
