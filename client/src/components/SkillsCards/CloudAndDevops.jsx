import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const cloudAndDevopsItems = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
    label: "Netlify",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    label: "Vercel",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    label: "Docker",
  },
];

export const cloudAndDevops = cloudAndDevopsItems.map((item) => {
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
          src={item.src}
          alt={item.label + "-icon"}
        />
        <span className="text-sm text-neutral-100 mt-1">{item.label}</span>
      </div>
    </motion.div>
  );
});
