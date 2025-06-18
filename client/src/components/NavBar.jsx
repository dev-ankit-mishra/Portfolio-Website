import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function NavBar() {
  const [theme, setTheme] = useState(true);
  const [active, setActive] = useState("Home");

  const navItemsList = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  useEffect(() => {
    // react-scroll event listeners
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    scrollSpy.update(); // required for active state on scroll

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleTheme = () => setTheme((prev) => !prev);

  const navItems = navItemsList.map((item) => (
    <li key={item}>
      <Link
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        offset={-30} // your navbar height here
        duration={500}
        onSetActive={() => setActive(item)}
        className={`cursor-pointer transition-all duration-300 ${
          active === item
            ? "scale-105 bg-blue-600 rounded-md px-2"
            : "hover:text-blue-400 font-normal"
        }`}
      >
        {item}
      </Link>
    </li>
  ));

  return (
    <nav className="w-full h-12 px-8 gap-6 text-lg tracking-wide flex items-center justify-between fixed top-0 left-0 bg-neutral-900/60 backdrop-blur-md text-white border-b border-neutral-800 z-50">
      <span>Ankit Mishra</span>
      <ul className="flex items-center gap-6">{navItems}</ul>
      <button onClick={toggleTheme} className="cursor-pointer">
        {theme ? <Moon className="w-7 h-7" /> : <Sun className="w-7 h-7" />}
      </button>
    </nav>
  );
}
