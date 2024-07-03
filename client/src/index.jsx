import React from "react";
import "./assets/index.css";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

const rootElement = document.getElementById("root") || document.createElement("div");
rootElement.setAttribute("id", "root");
document.body.appendChild(rootElement);

const root = createRoot(rootElement);
root.render(<App />);
