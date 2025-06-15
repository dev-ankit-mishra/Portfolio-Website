import codeImg from "../../assets/image.png";
import portfoilioImg from "../../assets/portfolio.png";
import { portfolioFeatures } from "./CardFeatures";
import { codeEditorFeatures } from "./CardFeatures";
import { portfolioTechItems } from "./CardTechStack";
import { codeEditorTechItems } from "./CardTechStack";

export default function Cards() {
  const cardItems = [
    {
      id: 1,
      src: portfoilioImg,
      label: "Portfolio Website",
      desc: "A responsive portfolio site to highlight my work, tech stack, and contact info—all in one place.",
      features: portfolioFeatures,
      tech: portfolioTechItems,
    },
    {
      id: 2,
      src: codeImg,
      label: "Collaborative Code Editor",
      desc: "A real-time code editor built for seamless collaboration and live coding with teams.",
      features: codeEditorFeatures,
      tech: codeEditorTechItems,
    },
  ];

  const cards = cardItems.map((card) => {
    return (
      <div className="relative  w-[360px] h-[300px] group  overflow-hidden bg-slate-700 rounded-lg text-neutral-100 transition-all duration-300 hover:h-[360px] border border-white">
        <img src={card.src} className="w-full h-48" />
        <h1 className=" text-xl px-3 mt-1 pt-2 font-semibold">{card.label}</h1>
        <p className="px-3 pt-1 tracking-wide leading-relaxed text-sm">
          {card.desc}
        </p>
        <div className="absolute inset-0 bg-slate-900 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h2 className="px-4 text-xl py-1 mt-2 font-semibold">Key Features</h2>
          <ul className="px-8 pt-1 mb-4 text-sm leading-relaxed tracking-wide list-disc ">
            {card.features.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <h2 className="text-xl px-4 pb-3 font-semibold border-t border-neutral-600 mt-4 pt-2">
            Tech Stack
          </h2>
          <div className="px-3  flex flex-wrap gap-y-2 gap-x-2 ">
            {card.tech.map((item) => {
              return (
                <span className="bg-neutral-700 flex flex-row gap-x-2 items-center px-2 py-1 text-xs rounded-lg">
                  <img src={item.src} className="w-4 h-4" />
                  {item.label}
                </span>
              );
            })}
          </div>
          <div className="px-4 py-2 flex justify-between mt-1">
            <button className="bg-blue-700 px-2 py-1 text-sm rounded-md">
              Live Demo
            </button>
            <button className="bg-blue-700 px-2 py-1 text-sm  rounded-md">
              Code
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
}
