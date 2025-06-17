import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

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
    icon: <SiHtml5 className="text-3xl text-orange-500" />,
    label: "HTML",
  },
  {
    id: 2,
    icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
    label: "Tailwind",
  },
  {
    id: 3,
    icon: <SiReact className="text-3xl text-sky-400" />,
    label: "React",
  },
  {
    id: 4,
    icon: <SiNodedotjs className="text-3xl text-green-500" />,
    label: "Node",
  },
  {
    id: 5,
    icon: <SiExpress className="text-3xl text-gray-300" />,
    label: "Express",
  },
  {
    id: 6,
    icon: <SiNextdotjs className="text-3xl text-white" />,
    label: "Next",
  },
];

export const techStacks = techStackItems.map((lang) => {
  return (
    <div>
      {/* single skill */}
      <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
        {lang.icon}
        <span className="text-sm tracking-wide  mt-1">{lang.label}</span>
      </div>
    </div>
  );
});
