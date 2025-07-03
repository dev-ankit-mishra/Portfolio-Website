import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  const [active, setActive] = useState("Home");

  const navItems = useMemo(
    () => ["Home", "About", "Skills", "Projects", "Achievements", "Contact"],
    []
  );

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [theme]);

  const toggleTheme = useCallback(() => setTheme((prev) => !prev), []);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full h-12 px-3 lg:px-8 flex items-center justify-between 
                 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border-b 
                 border-neutral-300 dark:border-neutral-800 text-black dark:text-white 
                 transition-all duration-300"
    >
      <span className="font-semibold text-lg">Ankit Mishra</span>

      <ul className="hidden md:flex items-center gap-4 lg:gap-6">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              spy
              smooth
              offset={-40}
              duration={500}
              onSetActive={() => setActive(item)}
              className={`cursor-pointer transition-all duration-300 ${
                active === item
                  ? "scale-105 bg-blue-600 text-white rounded-md px-2 pb-0.5"
                  : "hover:text-blue-500 text-gray-900 dark:text-gray-200"
              }`}
              component="a"
              href={`#${item}`} // 🔥 This adds the crawlable href
              aria-current={active === item ? "page" : undefined}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleTheme}
        className="p-1 rounded-full hover:scale-110 transition-transform duration-200"
        aria-label={`Switch to ${theme ? "light" : "dark"} mode`}
      >
        {theme ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
      </button>
    </nav>
  );
}
