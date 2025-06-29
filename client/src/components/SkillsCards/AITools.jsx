import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ToolTip from "../ToolTip";

import { SiTensorflow } from "react-icons/si";

const AIToolsItems = [
  {
    id: 1,
    icon: <SiTensorflow className="text-2xl lg:text-3xl text-orange-500" />,
    label: "TensorFlow",
    tooltip: "Open-source library for machine learning",
  },
];

export const aiTools = AIToolsItems.map((tool) => {
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
