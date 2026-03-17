// import { useEffect, useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

//   useEffect(() => {
//     document.querySelector("html").setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     // <button
//     //   onClick={toggleTheme}
//     //   className="btn btn-outline btn-circle btn-sm transition-all duration-300"
//     // >
//     //   {theme === "light" ? (
//     //     <FaMoon size={16} />
//     //   ) : (
//     //     <FaSun size={16} className="text-yellow-400" />
//     //   )}
//     // </button>
//     <button
//       onClick={toggleTheme}
//       className={`btn btn-circle btn-sm transition-all duration-300
//     p-2 relative overflow-hidden shadow-lg rounded-full
//     ${theme === "light" ? "bg-gradient-to-tr from-purple-500 to-indigo-500" : "bg-gradient-to-tr from-yellow-400 to-orange-400"}
//     hover:scale-110 hover:shadow-2xl`}
//     >
//       {theme === "light" ? (
//         <FaMoon size={16} className="text-white" />
//       ) : (
//         <FaSun size={16} className="text-white" />
//       )}

//       {/* Optional subtle glow effect */}
//       <span className="absolute w-full h-full rounded-full opacity-20 bg-white animate-ping"></span>
//     </button>
//   );
// };

// export default ThemeToggle;
"use client";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  // Initialize theme from localStorage or default to dark
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  // Apply theme to <html> and localStorage whenever it changes
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 flex items-center rounded-full p-[2px] cursor-pointer shadow-md transition-all duration-300
        ${isLight ? "bg-white border border-black" : "bg-black border border-white"}
        hover:scale-105 hover:shadow-lg`}
    >
      {/* Sliding knob */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`absolute w-7 h-7 rounded-full flex items-center justify-center shadow-md
          ${isLight ? "bg-black" : "bg-white"}`}
        style={{ left: isLight ? "0.25rem" : "50%" }}
      >
        {isLight ? (
          <FaMoon size={16} className="text-white" />
        ) : (
          <FaSun size={16} className="text-black" />
        )}
      </motion.div>

      {/* Glow / pulse effect behind knob */}
      <motion.span
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute w-7 h-7 rounded-full bg-white/20 dark:bg-black/20"
        style={{ left: isLight ? "0.25rem" : "50%" }}
      />

      {/* Optional sun/moon indicators in background */}
      <span
        className={`absolute left-1 top-1 ${isLight ? "text-black/50" : "text-white/50"}`}
      >
        <FaMoon size={12} />
      </span>
      <span
        className={`absolute right-1 top-1 ${isLight ? "text-black/50" : "text-white/50"}`}
      >
        <FaSun size={12} />
      </span>
    </button>
  );
};

export default ThemeToggle;
