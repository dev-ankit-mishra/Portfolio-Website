import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { techStacks } from "./SkillsCards/TechStack";
import { languages } from "./SkillsCards/Languages";
import { AITools } from "./SkillsCards/AITools";
import { cloudAndDevops } from "./SkillsCards/CloudAndDevops";
import { databases } from "./SkillsCards/Databases";
import { devTools } from "./SkillsCards/DevTools";

export default function Skills() {
  const cardItems = [
    { id: 1, label: "Languages", content: languages },
    { id: 2, label: "Tech Stacks", content: techStacks },
    { id: 3, label: "Databases", content: databases },
    { id: 4, label: "Cloud & Devops", content: cloudAndDevops },
    { id: 5, label: "AI Tools", content: AITools },
    { id: 6, label: "Development Tools", content: devTools },
  ];

  const cards = cardItems.map((card) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
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
          <div className="w-[20rem] h-65  bg-[#1E1E1E] tracking-wide border border-white/50 rounded-2xl shadow-xl ">
            <p className="text-xl  text-center font-[550] text-neutral-200 pt-6 ">
              {card.label}
            </p>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded mb-1 transition-all duration-200 hover:w-20"></div>
            <div
              className="grid grid-cols-3 gap-y-7 py-6 px-6
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
      className="scroll-mt-16 w-full h-screen box-border bg-neutral-950 font-[Inter]"
      id="Skills"
    >
      <header>
        <h1 className="text-4xl font-semibold text-center pt-6 pb-4 tracking-wide text-neutral-200">
          Skills
        </h1>
      </header>

      <main className="w-full h-full grid grid-cols-3 gap-y-14 place-items-center place-content-center mt-[-3rem] px-44 pb-4">
        {/* Languages */}

        {cards}
      </main>
    </section>
  );
}
