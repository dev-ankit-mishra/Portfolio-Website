import resume from "../assets/resume.pdf";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function HeroPage() {
  return (
    <section id="Home" className="w-full h-screen font-Inter ">
      <NavBar />

      <main className="w-full h-screen flex flex-row justify-center items-center  text-neutral-200 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
        {/* Left Section: Name and Title */}
        <div className="pl-12 w-1/2 h-full  flex flex-col gap-y-4 justify-center items-center font-Inter">
          <h1 className="text-center tracking-wide text-3xl mt-14 font-bold">
            Hi I'm Ankit Mishra
          </h1>
          <h2 className="text-center tracking-wide text-2xl font-semibold">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Open Source Enthusiast",
                "AI Explorer",
                "Cloud Practitioner",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              loop
            />
          </h2>

          <p className="px-6 text-center text-[1.08rem]  tracking-wide leading-relaxed  font-normal mb-6 mt-1">
            I build interactive, scalable and responsive web apps using React,
            Next.js, and Node.js — from AI-powered tools to real-time
            collaboration platforms.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mb-2"></div>
          <a
            className="py-[0.75rem] px-10 flex justify-center items-center gap-2 text-lg font-medium border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 hover:shadow-md hover:shadow-cyan-500/30 transition-all hover:scale-105 duration-150 rounded-xl mt-8 cursor-pointer"
            href={resume}
            target="_blank"
          >
            Download Resume
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Right Section: Profile Image */}
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?semt=ais_hybrid"
            alt="profile-picture"
            className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-xl"
          />
        </div>
      </main>
    </section>
  );
}
