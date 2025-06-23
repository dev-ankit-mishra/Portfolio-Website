import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ToolTip from "../ToolTip";
import { SiNetlify, SiVercel, SiDocker } from "react-icons/si";

const cloudAndDevopsItems = [
  {
    id: 1,
    icon: <SiNetlify className="text-3xl text-cyan-400" />,
    label: "Netlify",
    tooltip: "Deploy static websites easily",
  },
  {
    id: 2,
    icon: <SiVercel className="text-3xl text-white" />,
    label: "Vercel",
    tooltip: "Frontend platform for React and Next.js apps",
  },
  {
    id: 3,
    icon: <SiDocker className="text-3xl text-blue-400" />,
    label: "Docker",
    tooltip: "Containerization for consistent app environments",
  },
];

export const cloudAndDevops = cloudAndDevopsItems.map((item) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={item.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {item.icon}
          <span className="text-sm tracking-wide  mt-1">{item.label}</span>
        </div>
      </ToolTip>
    </div>
  );
});
