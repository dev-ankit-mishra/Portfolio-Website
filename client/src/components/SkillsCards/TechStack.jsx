import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ToolTip from "../ToolTip";

import {
  SiHtml5,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

const techStackItems = [
  {
    id: 1,
    icon: <SiHtml5 className="text-2xl lg:text-3xl text-orange-500" />,
    label: "HTML",
    tooltip: "Structure the content of web pages",
  },
  {
    id: 2,
    icon: <SiTailwindcss className="text-2xl lg:text-3xl text-cyan-400" />,
    label: "Tailwind",
    tooltip: "Utility-first CSS framework for rapid UI development",
  },
  {
    id: 3,
    icon: <SiReact className="text-2xl lg:text-3xl text-sky-400" />,
    label: "React",
    tooltip: "Build dynamic user interfaces with components",
  },
  {
    id: 4,
    icon: <SiNodedotjs className="text-2xl lg:text-3xl text-green-500" />,
    label: "Node",
    tooltip: "JavaScript runtime for backend development",
  },
  {
    id: 5,
    icon: <SiExpress className="text-2xl lg:text-3xl text-gray-300" />,
    label: "Express",
    tooltip: "Minimalist Node.js framework for APIs",
  },
  {
    id: 6,
    icon: <SiNextdotjs className="text-2xl lg:text-3xl text-white" />,
    label: "Next",
    tooltip: "React framework for SSR and static websites",
  },
];

export const techStacks = techStackItems.map((lang) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={lang.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {lang.icon}
          <span className="lg:text-sm text-xs tracking-wide  mt-1">
            {lang.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
