import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
    icon: <SiC className="text-2xl lg:text-3xl  text-blue-500" />,
    label: "C",
    tooltip: "Low-level system programming language",
  },
  {
    id: 2,
    icon: <FaJava className="text-2xl lg:text-3xl  text-red-600" />,
    label: "Java",
    tooltip: "Object-oriented programming for cross-platform apps",
  },
  {
    id: 3,
    icon: <SiTypescript className="text-2xl lg:text-3xl  text-blue-400" />,
    label: "TypeScript",
    tooltip: "Typed superset of JavaScript",
  },
  {
    id: 4,
    icon: <SiJavascript className="text-2xl lg:text-3xl text-yellow-400" />,
    label: "JavaScript",
    tooltip: "The language of the web",
  },
  {
    id: 5,
    icon: <SiCplusplus className="text-2xl lg:text-3xl text-indigo-400" />,
    label: "C++",
    tooltip: "Powerful language for performance-critical applications",
  },
  {
    id: 6,
    icon: <SiPython className="text-2xl lg:text-3xl text-yellow-300" />,
    label: "Python",
    tooltip: "High-level language for AI, automation, and more",
  },
];

export const languages = languagesItems.map((lang) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={lang.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {lang.icon}
          <span className="lg:text-sm text-xs  tracking-wide mt-1">
            {lang.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
