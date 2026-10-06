import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FrameworkProvider } from "./framework";
import "./app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FrameworkProvider>
      <App />
    </FrameworkProvider>
  </React.StrictMode>
);
