import {
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiPython,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import ToolTip from "../ToolTip";

const languagesItems = [
  {
    id: 1,
    icon: <SiC className="text-xl sm:text-2xl xl:text-3xl  text-blue-500" />,
    label: "C",
    tooltip: "Low-level system programming language",
  },
  {
    id: 2,
    icon: (
      <FaJava className="text-xl sm:text-2xl xl:text-3xl  text-red-600 dark:text-red-300" />
    ),
    label: "Java",
    tooltip: "Object-oriented programming for cross-platform apps",
  },
  {
    id: 3,
    icon: (
      <SiTypescript className="text-xl sm:text-2xl xl:text-3xl  text-blue-400" />
    ),
    label: "TypeScript",
    tooltip: "Typed superset of JavaScript",
  },
  {
    id: 4,
    icon: (
      <SiJavascript className="text-xl sm:text-2xl xl:text-3xl text-yellow-500" />
    ),
    label: "JavaScript",
    tooltip: "The language of the web",
  },
  {
    id: 5,
    icon: (
      <SiCplusplus className="text-xl sm:text-2xl xl:text-3xl text-indigo-400" />
    ),
    label: "C++",
    tooltip: "Powerful language for performance-critical applications",
  },
  {
    id: 6,
    icon: (
      <SiPython className="text-xl sm:text-2xl xl:text-3xl text-yellow-500" />
    ),
    label: "Python",
    tooltip: "High-level language for AI, automation, and more",
  },
];

export const languages = languagesItems.map((lang) => {
  return (
    <div key={lang.id}>
      {/* single skill */}

      <ToolTip text={lang.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {lang.icon}
          <span className="xl:text-sm sm:text-xs text-[0.625rem]   tracking-wide mt-1">
            {lang.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
