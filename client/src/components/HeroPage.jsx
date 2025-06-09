import resume from "../assets/resume.pdf";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

export default function HeroPage() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <section id="Home" className="w-full h-screen font-Inter">
      <NavBar />

      <main className="w-full h-screen flex flex-row justify-center items-center  text-neutral-200  bg-neutral-950 ">
        {/* Left Section: Name and Title */}
        <div className="pl-12 w-1/2 h-full  flex flex-col gap-y-4 justify-center items-center font-Inter">
          <h1 className="text-center tracking-wide text-4xl mt-14 font-bold">
            <Typewriter
              words={["Hi, I'm Ankit Mishra"]}
              cursor={showCursor}
              cursorStyle="|"
              typeSpeed={80}
              onType={() => setShowCursor(false)}
            />
          </h1>
          <h2 className="text-center tracking-wide text-2xl font-semibold">
            Full-Stack Developer
          </h2>

          <p className="px-6 text-center text-lg tracking-wide leading-relaxed  font-normal mb-6 mt-1">
            I build interactive, scalable and responsive web apps using React,
            Next.js, and Node.js — from AI-powered tools to real-time
            collaboration platforms.
          </p>
          <div className="w-12 h-1 bg-blue-500 rounded-full mb-2"></div>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="py-3 px-6 flex justify-center items-center gap-2  text-xl font-medium border border-blue-600 text-blue-400 hover:bg-blue-800/20 hover:shadow-md hover:shadow-blue-600/30 transition duration-300  rounded-xl mt-8  cursor-pointer"
            href={resume}
            target="_blank"
          >
            Download Resume
            <ExternalLink className="w-5 h-5" />
          </motion.a>
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
