import codeCollabImg from "../../assets/codeCollab.png";
import portfoilioImg from "../../assets/imgPortfolio.png";

import { portfolioFeatures } from "./CardFeatures";
import { codeEditorFeatures } from "./CardFeatures";
import { portfolioTechItems } from "./CardTechStack";
import { codeEditorTechItems } from "./CardTechStack";

import { Code2, ExternalLink } from "lucide-react";

export default function Cards() {
  const cardItems = [
    {
      id: 1,
      src: portfoilioImg,
      label: "Portfolio Website",
      desc: "A responsive portfolio site to highlight my work, tech stack, and contact info—all in one place.",
      features: portfolioFeatures,
      tech: portfolioTechItems,
      live: "www.ankitmishra.pro",
      code: "https://github.com/dev-ankit-mishra/Portfolio-Website",
    },
    {
      id: 2,
      src: codeCollabImg,
      label: "Collaborative Code Editor",
      desc: "A real-time code editor built for seamless collaboration and live coding with teams.",
      features: codeEditorFeatures,
      tech: codeEditorTechItems,
      live: "/",
      code: "https://github.com/dev-ankit-mishra/collab-code-editor",
    },
  ];

  const cards = cardItems.map((card) => {
    return (
      <div
        className="relative group w-full max-w-md border border-white/10
 tracking-wide shadow-xl shadow-black/40 leading-relaxed bg-gradient-to-br from-slate-900 to-gray-800
 rounded-2xl text-neutral-100 transition-all duration-300 p-5  hover:scale-102 hover:ring-1 hover:ring-indigo-400 hover:shadow-2xl"
      >
        <img
          src={card.src}
          className="w-full h-42 object-cover rounded-t-2xl"
        />

        <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition duration-200" />

        <div className="relative z-10 space-y-2 mt-4">
          <h1 className=" text-2xl  font-semibold">{card.label}</h1>
          <p className=" tracking-wide leading-relaxed text text-gray-300">
            {card.desc}
          </p>

          <ul className=" leading-relaxed tracking-wide text-gray-400 list-disc list-inside ">
            {card.features.map((item) => {
              return <li className="py-1">{item}</li>;
            })}
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 ">
            {card.tech.map((item) => {
              return (
                <span
                  className={`${item.bgClass} text-white tracking-wide  py-1 px-3 text-sm rounded-2xl`}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href={card.live}
              className="bg-indigo-600 px-4 py-2 hover:bg-indigo-800 transition cursor-pointer rounded-lg flex gap-2 items-center"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={card.code}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border text-indigo-400 border-indigo-500 hover:bg-indigo-600/20 cursor-pointer transition-all hover:text-white px-4 py-2 rounded-lg flex gap-2 items-center"
            >
              <Code2 size={16} />
              Code
            </a>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
}
