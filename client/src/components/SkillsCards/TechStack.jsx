import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const techStackItems = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    label: "HTML",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    label: "React",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    label: "Node",
  },
  {
    id: 5,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    label: "Express",
  },
  {
    id: 6,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    label: "Next",
  },
];

export const techStacks = techStackItems.map((lang) => {
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
          src={lang.src}
          alt={lang.label + "-icon"}
        />
        <span className="text-sm text-neutral-200 mt-1">{lang.label}</span>
      </div>
    </motion.div>
  );
});
