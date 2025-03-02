import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"; // Keep only one import statement for App
import "./index.css"; // Optional, only if you have styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
