import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline btn-circle btn-sm transition-all duration-300"
    >
      {theme === "light" ? (
        <FaMoon size={16} />
      ) : (
        <FaSun size={16} className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
