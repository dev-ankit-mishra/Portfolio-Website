import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const DatabaseItems = [
  {
    id: 1,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    label: "MySQL",
  },
  {
    id: 2,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    label: "MongoDB",
  },
  {
    id: 3,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    label: "PostgreSQL",
  },
  {
    id: 4,
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    label: "Firebase",
  },
];

export const databases = DatabaseItems.map((database) => {
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
          src={database.src}
          alt={database.label + "-icon"}
        />
        <span className="text-sm text-neutral-100 mt-1">{database.label}</span>
      </div>
    </motion.div>
  );
});
