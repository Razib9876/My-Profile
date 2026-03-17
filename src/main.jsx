// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import { Toaster } from "react-hot-toast";
// import { StrictMode } from "react";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <App />

//     <Toaster position="top-right" />
//   </StrictMode>,
// );
"use client";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <ThemeProvider attribute="class" enableSystem={true}>
      {/* Global Toaster for notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--tw-bg-base-200)", // theme-aware
            color: "var(--tw-text-base-content)",
          },
        }}
      />

      {/* Main App */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);
