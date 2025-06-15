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
      <div className="relative group w-md bg-gradient-to-br tracking-wide shadow-xl shadow-black/40 leading-relaxed from-gray-800 to-gray-900 rounded-2xl text-neutral-100 transition-all duration-300 p-4  hover:scale-102 hover:ring-1 hover:ring-indigo-500 hover:shadow-2xl">
        <img
          src={card.src}
          className="w-full h-44 object-cover rounded-t-2xl"
        />

        <div className="absolute inset-0 z-0 bg-white/5 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition duration-200" />

        <div className="relative z-10 space-y-3 mt-5">
          <h1 className=" text-2xl  font-semibold">{card.label}</h1>
          <p className=" tracking-wide leading-relaxed text text-gray-300">
            {card.desc}
          </p>

          <ul className=" leading-relaxed tracking-wide text-gray-400 list-disc list-inside ">
            {card.features.map((item) => {
              return <li className="py-1">{item}</li>;
            })}
          </ul>
          <div className="mt-4 flex flex-wrap gap-y-2 gap-x-3 ">
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
          <div className="flex justify-between mt-4">
            <button className="bg-indigo-600 px-4 py-2 hover:bg-indigo-800 transition cursor-pointer rounded-lg">
              Live Demo
            </button>
            <button className="bg-transparent border text-indigo-400 border-indigo-500 hover:bg-indigo-600 cursor-pointer transition-all hover:text-white px-4 py-2 rounded-lg">
              Code
            </button>
          </div>
        </div>
      </div>
    );
  });

  return <>{cards}</>;
}
