import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const AIToolsItems = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    label: "TensorFlow",
  },
];

export const aiTools = AIToolsItems.map((tool) => {
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
        <span className="text-sm text-neutral-100 mt-1">{tool.label}</span>
      </div>
    </motion.div>
  );
});
