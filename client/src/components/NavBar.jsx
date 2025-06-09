import { Moon, Sun } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState(true);

  const [active, setActive] = useState("Home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "auto" });
    setActive(id);
  };

  const navItemsList = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  const navItems = navItemsList.map((item) => (
    <li key={item}>
      <button
        onClick={() => scrollToSection(item)}
        className={
          active === item
            ? "bg-blue-500 rounded px-2"
            : "hover:text-blue-400 font-normal transition cursor-pointer"
        }
      >
        {item}
      </button>
    </li>
  ));

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;
      const scrollY = window.scrollY;

      for (const id of navItemsList) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            if (active !== id) setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  const toggleTheme = () => {
    return setTheme((prev) => !prev);
  };

  return (
    <nav className="w-full h-16 px-8 gap-6 text-lg tracking-wide  flex items-center justify-between fixed top-0 left-0  bg-neutral-900/60 backdrop-blur-md text-white border-b border-neutral-800 z-50">
      <span className="">Ankit Mishra</span>

      <ul className="flex items-center gap-6">{navItems}</ul>

      <button onClick={toggleTheme} className="cursor-pointer ">
        {theme ? <Moon className="w-7 h-7 " /> : <Sun className="w-7 h-7 " />}
      </button>
    </nav>
  );
}
