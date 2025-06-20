import aboutImg from "../assets/aboutImg.png";
import {
  FaGraduationCap,
  FaBook,
  FaBrain,
  FaLaptopCode,
  FaTools,
  FaRocket,
} from "react-icons/fa";
export default function About() {
  return (
    <section
      id="About"
      className="w-full h-screen bg-gradient-to-br from-[#0c0c0c] via-[#121212] to-[#1a1a1a] text-gray-200 flex flex-col px-6"
    >
      <header>
        <h1 className="text-3xl font-bold text-center py-4 mt-2 text-white">
          About Me
        </h1>
      </header>
      <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mb-1" />
      <main className="flex-1 flex ">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={aboutImg}
            alt="AbouImg"
            className="h-130 rounded-2xl object-cover mb-4"
          />
        </div>
        <div className="w-full h-full  px-4 py-6 text-white">
          <p className="px-2 tracking-wide leading-relaxed">
            I’m Ankit Mishra, a full-stack developer with strong DSA
            fundamentals and a passion for building clean, user-friendly apps. I
            enjoy working with React, Node.js, and real-time APIs to solve
            real-world problems, and I’m currently exploring AI integration and
            scalable deployments.
          </p>

          <div className="relative mt-6">
            <div className="absolute top-0 left-8 w-0.5 bg-gray-600 h-full"></div>
            <ul className="space-y-5 ml-10">
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaGraduationCap className="text-blue-400 text-xl hover:scale-105 transition" />
                </div>
                <p className=" pl-8 pr-2 tracking-wide leading-relaxed">
                  Final-year MCA (Master of Computer Applications) student with
                  a strong foundation in Data Structures and Algorithms, and a
                  deep interest in software development, system design, and
                  problem-solving.
                </p>
              </li>
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaBook className="text-indigo-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2">
                  Academically consistent — secured 93% in Intermediate, 8.6
                  CGPA in graduation, and currently maintaining an 8.65 CGPA in
                  my master's program.
                </p>
              </li>
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaBrain className="text-purple-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2">
                  Solved 400+ problems on LeetCode and hold a 3★ CodeChef rating
                  (1600+), demonstrating consistency and strong problem-solving
                  skills.
                </p>
              </li>
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaLaptopCode className="text-teal-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2">
                  Built responsive and accessible web applications using React,
                  Tailwind CSS, and TypeScript, with robust backend services
                  using Node.js and Express.
                </p>
              </li>
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaTools className="text-yellow-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2">
                  Made 1000+ GitHub contributions in 2025 with active
                  participation in open-source projects, reflecting community
                  involvement and engineering consistency.
                </p>
              </li>
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaRocket className="text-pink-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2">
                  Passionate about system design, AI, performance optimization,
                  and using tools like Git, Postman, Docker, and Vite to boost
                  efficiency and scalability.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
