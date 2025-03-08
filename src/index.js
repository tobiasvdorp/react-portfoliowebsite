import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
document.body.setAttribute(
  "data-theme",
  document.body.getAttribute("data-theme") || "dark"
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
