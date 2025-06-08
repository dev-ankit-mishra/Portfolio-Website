import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState(true);

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
      <a
        href={`#${item}`}
        className=" hover:text-blue-400 font-normal transition"
      >
        {item}
      </a>
    </li>
  ));

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
