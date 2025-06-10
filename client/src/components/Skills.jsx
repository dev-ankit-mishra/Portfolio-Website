import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import {
  languagesItems,
  techStackItems,
  datbasesItems,
  cloudDeploymentItems,
  devToolsItems,
  aiToolsItems,
} from "./SkillsData";

export default function Skills() {
  const languages = languagesItems.map((lang) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* single skill */}
        <div className="flex flex-col items-center">
          <img
            className="w-8 h-8 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-blue-400/30 rounded-md"
            src={lang.src}
            alt={lang.label + "-icon"}
          />
          <span className="text-sm text-neutral-200 mt-1">{lang.label}</span>
        </div>
      </motion.div>
    );
  });

  return (
    <section
      className="scroll-mt-16 w-full h-screen box-border bg-neutral-950 font-[Inter]"
      id="Skills"
    >
      <h1 className="text-4xl font-semibold text-center pt-8 tracking-wide text-neutral-200">
        Skills
      </h1>

      <main className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center place-content-center mt-[-3rem] pb-10 px-4">
        {/* Languages */}
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
            <div className="w-[20rem] h-65  bg-gradient-to-b from-[#1a1a1f] to-[#23232a] tracking-wide border border-white/50 rounded-2xl shadow-xl ">
              <p className="text-xl  text-center font-[550] text-neutral-200 pt-6 mb-1">
                Languages
              </p>
              <div className="mx-auto w-24 h-1 bg-blue-500 rounded mb-1 transition-all duration-200 hover:w-20"></div>
              <div
                className="grid grid-cols-3 gap-y-6 py-6 px-6
           place-items-center "
              >
                {/* Replace these with icons or images */}

                {languages}
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Frontend */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Frontend
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">React, Tailwind</span>
          </div>
        </div>

        {/* Backend */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Backend
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">Node, Express</span>
          </div>
        </div>

        {/* Databases */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Databases
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">MongoDB, MySQL</span>
          </div>
        </div>

        {/* Libraries/Frameworks */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Libraries & Frameworks
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">React, Tailwind, Express</span>
          </div>
        </div>

        {/* Tools */}
        <div className="w-[22rem] h-60 bg-slate-900 rounded-2xl border border-white p-4">
          <p className="text-2xl text-center font-normal text-white mb-4">
            Tools
          </p>
          <div className="flex justify-center items-center h-full">
            <span className="text-white">Git, VSCode, Postman</span>
          </div>
        </div>
      </main>
    </section>
  );
}
