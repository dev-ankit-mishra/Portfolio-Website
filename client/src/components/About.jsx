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
      className="w-full h-screen bg-gradient-to-br from-[#0c0c0c] via-[#121212] to-[#1a1a1a] text-[#dbdee3] flex flex-col px-6"
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
        <div className="w-full h-full px-4 py-6">
          <p className="px-2 tracking-wide leading-relaxed text-white">
            I’m <span className="font-semibold">Ankit Mishra</span>, a{" "}
            <span className="font-semibold">full-stack developer</span> with
            strong <span className="font-semibold">DSA fundamentals</span> and a
            passion for building{" "}
            <span className="font-semibold">clean, user-friendly apps</span>. I
            enjoy working with <span className="italic">React</span>,{" "}
            <span className="italic">Node.js</span>, and{" "}
            <span className="italic">real-time APIs</span> to solve real-world
            problems, and I’m currently exploring{" "}
            <span className="italic">AI integration</span> and{" "}
            <span className="italic">scalable deployments</span>.
          </p>

          <div className="relative mt-6">
            <div className="absolute top-0 left-8 w-0.5 bg-gray-600 h-full"></div>
            <ul className="space-y-5 ml-10">
              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaGraduationCap className="text-blue-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="pl-8 pr-2 tracking-wide leading-relaxed hover:text-white transition duration-200">
                  Final-year{" "}
                  <span className="font-semibold">
                    MCA (Master of Computer Applications)
                  </span>{" "}
                  student with a strong foundation in{" "}
                  <span className="font-semibold">
                    Data Structures and Algorithms
                  </span>
                  , and a deep interest in{" "}
                  <span className="italic">software development</span>,{" "}
                  <span className="italic">system design</span>, and{" "}
                  <span className="italic">problem-solving</span>.
                </p>
              </li>

              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaBook className="text-indigo-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2 hover:text-white transition duration-200">
                  <span className="font-semibold">Academically consistent</span>{" "}
                  — secured <span className="font-semibold">93%</span> in
                  Intermediate, <span className="font-semibold">8.6 CGPA</span>{" "}
                  in graduation, and currently maintaining an{" "}
                  <span className="font-semibold">8.65 CGPA</span> in my
                  master's program.
                </p>
              </li>

              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaBrain className="text-purple-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2 hover:text-white transition duration-200">
                  Solved <span className="font-semibold">400+</span> problems on{" "}
                  <span className="italic">LeetCode</span> and hold a{" "}
                  <span className="font-semibold">
                    3★ CodeChef rating (1600+)
                  </span>
                  , demonstrating <span className="italic">consistency</span>{" "}
                  and{" "}
                  <span className="italic">strong problem-solving skills</span>.
                </p>
              </li>

              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaLaptopCode className="text-teal-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2 hover:text-white transition duration-200">
                  Built <span className="font-semibold">responsive</span> and{" "}
                  <span className="font-semibold">accessible</span> web
                  applications using <span className="italic">React</span>,{" "}
                  <span className="italic">Tailwind CSS</span>, and{" "}
                  <span className="italic">TypeScript</span>, with robust
                  backend services using <span className="italic">Node.js</span>{" "}
                  and <span className="italic">Express</span>.
                </p>
              </li>

              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaTools className="text-yellow-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2 hover:text-white transition duration-200">
                  Made <span className="font-semibold">1000+</span> GitHub
                  contributions in <span className="font-semibold">2025</span>{" "}
                  with active participation in{" "}
                  <span className="italic">open-source projects</span>,
                  reflecting{" "}
                  <span className="italic">community involvement</span> and{" "}
                  <span className="italic">engineering consistency</span>.
                </p>
              </li>

              <li className="relative">
                <div className="absolute -left-6 top-2 bg-gray-700 p-2 rounded-full">
                  <FaRocket className="text-pink-400 text-xl hover:scale-105 transition" />
                </div>
                <p className="tracking-wide leading-relaxed pl-8 pr-2 hover:text-white transition duration-200">
                  Passionate about <span className="italic">system design</span>
                  , <span className="italic">AI</span>,{" "}
                  <span className="italic">performance optimization</span>, and
                  using tools like <span className="italic">Git</span>,{" "}
                  <span className="italic">Postman</span>,{" "}
                  <span className="italic">Docker</span>, and{" "}
                  <span className="italic">Vite</span> to boost{" "}
                  <span className="italic">efficiency</span> and{" "}
                  <span className="italic">scalability</span>.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
}
