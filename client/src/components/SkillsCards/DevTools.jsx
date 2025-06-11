import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const DevToolsItems = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    label: "Git",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    label: "Github",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    label: "Figma",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    label: "Postman",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg",
    label: "Vite",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    label: "VSCode",
  },
];

export const devTools = DevToolsItems.map((tool) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* single skill */}
      <div className="flex flex-col items-center">
        <img
          className="w-8 h-8 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-400/30 rounded-md"
          src={tool.src}
          alt={tool.label + "-icon"}
        />
        <span className="text-sm text-neutral-200 mt-1">{tool.label}</span>
      </div>
    </motion.div>
  );
});
