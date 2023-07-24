import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

const frame = document.getElementById("root");
const root = createRoot(frame);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

