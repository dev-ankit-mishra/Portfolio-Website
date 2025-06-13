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
    Languages: "bg-blue-950", // Slate
    "Tech Stacks": "bg-rose-900", // Darker blue-gray
    Databases: "bg-emerald-950", // Neutral
    "Cloud & Devops": "bg-cyan-950", // Indigo tint
    "AI Tools": "bg-amber-900", // Purple hint
    "Development Tools": "bg-fuchsia-950", // Cool gray
  };

  const cards = cardItems.map((card) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: false }}
      >
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
        >
          {/* your card here */}
          <div
            className={`w-[20rem] h-[16.25rem] rounded-xl border border-white/50 tracking-wide 
                          shadow-lg shadow-accent/40
                          ${bgColors[card.label]} `}
          >
            <p className="text-[1.38rem] font-[502]  text-center  text-neutral-100 pt-5  ">
              {card.label}
            </p>
            <div className="mx-auto w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-2 shadow-md transition-all duration-300 hover:w-24 hover:shadow-blue-500/50"></div>

            <div
              className="grid grid-cols-3 gap-y-7 py-4 px-6
           place-items-center "
            >
              {/* Replace these with icons or images */}

              {card.content}
            </div>
          </div>
        </Tilt>
      </motion.div>
    );
  });

  return (
    <section
      className="scroll-mt-8 w-full h-screen box-border bg-neutral-900 font-[Inter]"
      id="Skills"
    >
      <header>
        <h1 className="text-3xl font-semibold text-center pt-6 pb-2 tracking-wide text-neutral-100">
          Skills
        </h1>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></div>
      </header>

      <main className="w-full h-full grid grid-cols-3 gap-y-12 place-items-center place-content-center mt-[-3rem] px-44 pb-4">
        {/* Languages */}

        {cards}
      </main>
    </section>
  );
}
