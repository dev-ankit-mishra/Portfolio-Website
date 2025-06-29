import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import ToolTip from "../ToolTip";

import {
  SiTensorflow,
  SiOpenai,
  SiHuggingface,
  SiClaude,
  SiAnthropic,
} from "react-icons/si";

const AIToolsItems = [
  {
    id: 1,
    icon: <SiTensorflow className="text-2xl xl:text-3xl text-[#FF6F00]" />,
    label: "TensorFlow",
    tooltip: "Google's open-source library for deep learning and ML",
  },
  {
    id: 2,
    icon: <SiOpenai className="text-2xl xl:text-3xl text-[#412991]" />,
    label: "OpenAI",
    tooltip: "AI research and deployment company behind GPT and Codex",
  },
  {
    id: 3,
    icon: <SiHuggingface className="text-2xl xl:text-3xl text-[#FFD21F]" />,
    label: "HuggingFace",
    tooltip: "Leading NLP platform for transformers and AI models",
  },
  {
    id: 4,
    icon: <SiAnthropic className="text-2xl xl:text-3xl text-[#4C5FD5]" />, // Claude by Anthropic
    label: "Claude AI",
    tooltip: "Conversational AI assistant developed by Anthropic",
  },
];

export const aiTools = AIToolsItems.map((tool) => {
  return (
    <div>
      {/* single skill */}
      <ToolTip text={tool.tooltip}>
        <div className="flex flex-col items-center hover:scale-105 hover:shadow-md transition-all duration-200">
          {tool.icon}
          <span className="xl:text-sm text-xs tracking-wide  mt-1">
            {tool.label}
          </span>
        </div>
      </ToolTip>
    </div>
  );
});
