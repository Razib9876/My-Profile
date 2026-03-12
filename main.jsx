import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/index.css";
import App from "./src/App";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Toaster position="top-right" />
  </StrictMode>,
);
