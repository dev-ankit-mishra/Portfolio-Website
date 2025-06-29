import { motion } from "framer-motion";
import { SiGit, SiGithub, SiFigma, SiPostman, SiVite } from "react-icons/si";
import ToolTip from "../ToolTip";

const DevToolsItems = [
  {
    id: 1,
    icon: <SiGit className="text-2xl lg:text-3xl text-red-500" />,
    label: "Git",
    tooltip: "Version control system to track code changes",
  },
  {
    id: 2,
    icon: <SiGithub className="text-2xl lg:text-3xl text-white" />,
    label: "Github",
    tooltip: "Code hosting platform for collaboration",
  },
  {
    id: 3,
    icon: <SiFigma className="text-2xl lg:text-3xl text-pink-500" />,
    label: "Figma",
    tooltip: "Design and prototyping tool",
  },
  {
    id: 4,
    icon: <SiPostman className="text-2xl lg:text-3xl text-orange-500" />,
    label: "Postman",
    tooltip: "API testing and documentation tool",
  },
  {
    id: 5,
    icon: <SiVite className="text-2xl lg:text-3xl text-purple-400" />,
    label: "Vite",
    tooltip: "Fast frontend build tool",
  },
];

export const devTools = DevToolsItems.map((tool) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={tool.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {tool.icon}
          <span className="lg:text-sm text-xs tracking-wide  mt-1">
            {tool.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
