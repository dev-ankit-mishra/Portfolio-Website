import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ToolTip from "../ToolTip";

import { SiMysql, SiMongodb, SiPostgresql, SiFirebase } from "react-icons/si";

const DatabaseItems = [
  {
    id: 1,
    icon: (
      <SiMongodb className="text-xl sm:text-2xl xl:text-3xl text-green-600" />
    ),
    label: "MongoDB",
    tooltip: "NoSQL database for flexible document storage",
  },
  {
    id: 2,
    icon: (
      <SiPostgresql className="text-xl sm:text-2xl xl:text-3xl text-sky-600" />
    ),
    label: "PostgreSQL",
    tooltip: "Powerful open-source relational database",
  },
  {
    id: 3,
    icon: <SiMysql className="text-xl sm:text-2xl xl:text-3xl text-blue-400" />,
    label: "MySQL",
    tooltip: "Popular relational database for web apps",
  },
  {
    id: 4,
    icon: (
      <SiFirebase className="text-xl sm:text-2xl xl:text-3xl text-yellow-400" />
    ),
    label: "Firebase",
    tooltip: "Google's real-time database and hosting platform",
  },
];

export const databases = DatabaseItems.map((database) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={database.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {database.icon}
          <span className="xl:text-sm sm:text-xs text-[0.625rem]  tracking-wide  mt-1">
            {database.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
