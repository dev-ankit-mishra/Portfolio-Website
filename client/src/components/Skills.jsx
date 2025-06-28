import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { techStacks } from "./SkillsCards/TechStack";
import { languages } from "./SkillsCards/Languages";
import { aiTools } from "./SkillsCards/AITools";
import { cloudAndDevops } from "./SkillsCards/CloudAndDevops";
import { databases } from "./SkillsCards/Databases";
import { devTools } from "./SkillsCards/DevTools";

export default function Skills() {
  const cardItems = [
    { id: 1, label: "Languages", content: languages },
    { id: 2, label: "Tech Stacks", content: techStacks },
    { id: 3, label: "Databases", content: databases },
    { id: 4, label: "Cloud & Devops", content: cloudAndDevops },
    { id: 5, label: "AI Tools", content: aiTools },
    { id: 6, label: "Development Tools", content: devTools },
  ];

  const bgColors = {
    Languages: "bg-gradient-to-br from-[#0a1a3d] to-[#0f2c63]", // Slate
    "Tech Stacks": "bg-gradient-to-br from-[#0d1117] to-[#1f2937]", // Darker blue-gray
    Databases: "bg-gradient-to-br from-[#002d2d] to-[#014f40]", // Neutral
    "Cloud & Devops": "bg-gradient-to-br from-[#002d3d] to-[#004f73]", // Indigo tint
    "AI Tools": "bg-gradient-to-br from-[#3a0d00] to-[#5a2000]", // Purple hint
    "Development Tools": "bg-gradient-to-br from-[#2b0033] to-[#50005a]", // Cool gray
  };

  const cards = cardItems.map((card) => {
    return (
      <>
        {/* your card here */}
        <div
          className={`w-[24rem] h-[268px] rounded-2xl  
                    shadow-xl shadow-black/40 transition-all duration-200 
                    hover:ring-1 hover:ring-cyan-400
                    hover:scale-102 hover:shadow-cyan-500/20 border border-white/10

                    ${bgColors[card.label]}`}
        >
          <p className="inline-block ml-8 text-[1.38rem] font-[502]  text-center  text-white pt-5 border-b border-b-indigo-400 pb-1 ">
            {card.label}
          </p>

          <div
            className="grid grid-cols-3 gap-y-10 py-8 px-6
           place-items-center font-medium "
          >
            {/* Replace these with icons or images */}

            {card.content}
          </div>
        </div>
      </>
    );
  });

  return (
    <section
      className="scroll-mt-8 w-full h-fit box-border bg-gradient-to-br from-[#1e293b] to-[#0f172a] pb-10"
      id="Skills"
    >
      <header>
        <h1 className="text-3xl font-bold text-center pt-6 pb-2 tracking-wide text-white">
          Skills
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2 mb-6" />
      </header>

      <main className=" text-white grid sm:grid-cols-1 []:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-center place-content-center">
        {/* Languages */}

        {cards}
      </main>
    </section>
  );
}
