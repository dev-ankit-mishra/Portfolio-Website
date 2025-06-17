import { motion } from "framer-motion";
import { SiGit, SiGithub, SiFigma, SiPostman, SiVite } from "react-icons/si";

const DevToolsItems = [
  {
    id: 1,
    icon: <SiGit className="text-3xl text-red-500" />,
    label: "Git",
  },
  {
    id: 2,
    icon: <SiGithub className="text-3xl text-white" />,
    label: "Github",
  },
  {
    id: 3,
    icon: <SiFigma className="text-3xl text-pink-500" />,
    label: "Figma",
  },
  {
    id: 4,
    icon: <SiPostman className="text-3xl text-orange-500" />,
    label: "Postman",
  },
  {
    id: 5,
    icon: <SiVite className="text-3xl text-purple-400" />,
    label: "Vite",
  },
];

export const devTools = DevToolsItems.map((tool) => {
  return (
    <div>
      {/* single skill */}
      <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
        {tool.icon}
        <span className="text-sm tracking-wide  mt-1">{tool.label}</span>
      </div>
    </div>
  );
});
