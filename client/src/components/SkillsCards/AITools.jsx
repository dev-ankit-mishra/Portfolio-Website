import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SiTensorflow } from "react-icons/si";

const AIToolsItems = [
  {
    id: 1,
    icon: <SiTensorflow className="text-3xl text-orange-500" />,
    label: "TensorFlow",
  },
];

export const aiTools = AIToolsItems.map((tool) => {
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
