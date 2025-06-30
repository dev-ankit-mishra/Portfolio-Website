import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function NavBar() {
  const [theme, setTheme] = useState(true); // true = dark, false = light
  const [active, setActive] = useState("Home");

  const navItemsList = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  // Load theme from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") setTheme(false);
    else setTheme(true); // default to dark
  }, []);

  // Apply theme to <html> tag and persist
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => !prev);

  const navItems = navItemsList.map((item) => (
    <li key={item}>
      <Link
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-60}
        duration={500}
        onSetActive={() => setActive(item)}
        className={`cursor-pointer transition-all duration-300 ${
          active === item
            ? "scale-105 bg-blue-600 text-white dark:text-white rounded-md px-2 pb-0.5"
            : "hover:text-blue-500 text-gray-900 dark:text-gray-200"
        }`}
      >
        {item}
      </Link>
    </li>
  ));

  return (
    <nav
      className="w-full h-12 px-3 lg:px-8 gap-2 text-base tracking-wide flex items-center justify-between fixed top-0 left-0 lg:text-lg
      bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md
      text-black dark:text-white border-b border-neutral-300 dark:border-neutral-800 z-50 transition-all duration-300"
    >
      <span className="font-semibold text-lg">Ankit Mishra</span>

      <ul className="md:flex items-center hidden md:gap-4 lg:gap-6">
        {navItems}
      </ul>

      <button
        onClick={toggleTheme}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
        aria-label="Toggle Dark Mode"
      >
        {theme ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>
    </nav>
  );
}
