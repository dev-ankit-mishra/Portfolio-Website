import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });
  const [active, setActive] = useState("Home");

  const navItems = useMemo(
    () => ["Home", "About", "Skills", "Projects", "Achievements", "Contact"],
    []
  );

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 768);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme;
    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [theme]);

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleTheme = useCallback(() => setTheme((prev) => !prev), []);

  function renderListItem(item) {
    return (
      <li key={item} className="w-full text-left md:text-center py-1">
        <Link
          to={item}
          spy={true}
          smooth={true}
          offset={isMobile ? -120 : -60}
          duration={500}
          onSetActive={() => setActive(item)}
          className={`block w-full cursor-pointer px-4 py-2 transition-all duration-300 ${
            active === item
              ? "scale-105 bg-blue-600 text-white rounded-md"
              : "hover:text-blue-500 text-gray-900 dark:text-gray-200"
          }`}
          aria-current={active === item ? "page" : undefined}
        >
          {item}
        </Link>
      </li>
    );
  }

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full h-12 px-3 lg:px-8 flex items-center justify-between 
                 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-md border-b 
                 border-neutral-300 dark:border-neutral-800 text-black dark:text-white 
                 transition-all duration-300"
    >
      <span className="font-semibold text-lg">Ankit Mishra</span>

      <ul className="hidden md:flex items-center font-medium  lg:gap-3 lg:text-base">
        {navItems.map((item) => renderListItem(item))}
      </ul>

      <div>
        <button
          onClick={toggleTheme}
          className="p-1 rounded-full hover:scale-110 transition-transform duration-200 pr-4 md:pr-0"
          aria-label={`Switch to ${theme ? "light" : "dark"} mode`}
        >
          {theme ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        {isMobile && (
          <>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="text-2xl text-black dark:text-white focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X size={28} className="cursor-pointer" />
              ) : (
                <Menu size={28} className="cursor-pointer" />
              )}
            </button>

            {isOpen && (
              <div className="absolute top-12 right-0 z-50 w-auto rounded bg-white/80 dark:bg-neutral-900/70 backdrop-blur-md shadow-lg border border-neutral-300 dark:border-neutral-800 text-black dark:text-white">
                <ul className="flex flex-col items-center justify-center py-1 px-2">
                  {navItems.map((item) => renderListItem(item))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
