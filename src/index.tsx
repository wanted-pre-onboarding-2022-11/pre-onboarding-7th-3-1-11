import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import KeywordContextProvider from "./contexts/keyword";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <KeywordContextProvider>
    <App />
  </KeywordContextProvider>,
);
