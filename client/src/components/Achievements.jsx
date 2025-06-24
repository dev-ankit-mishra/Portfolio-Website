import coreJavaImg from "../assets/coreJavaImg.png";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import ToolTip from "./ToolTip";

export default function AchievementsSection() {
  const milestones = [
    {
      title: (
        <span>
          <CountUp end={400} duration={5} />+
        </span>
      ),
      subtitle: "LeetCode Problems Solved",
      color: "text-yellow-400",
      icon: <TbBrandLeetcode className="text-yellow-400 text-3xl mb-2" />,
    },
    {
      title: (
        <span>
          <CountUp end={1000} duration={5} />+
        </span>
      ),
      subtitle: "GitHub Contributions (2024)",
      color: "text-green-400",
      icon: <FaGithub className="text-green-400 text-3xl mb-2" />,
    },
  ];

  const certificates = [
    {
      title: "Front-End Developer",
      issuer: "HackerRank",
      date: "Apr 2024",
      link: "#",
      description: "Hands-on React and UI development experience.",
    },
    {
      title: "DSA",
      issuer: "PW-Skills",
      date: "Jan 2024",
      link: "#",
      description: "Mastered core algorithms and data structures in JS.",
    },
    {
      title: "SQL Intermediate",
      issuer: "HackerRank",
      date: "Mar 2024",
      link: "#",
      description: "Learned complex queries and analytics techniques.",
    },
    {
      title: "Full-stack Developer",
      issuer: "Scrimba",
      date: "Feb 2024",
      link: "#",
      description: "Solid understanding of React components and state.",
    },
    {
      title: "Core Java",
      issuer: "Internshala",
      date: "May 2024",
      link: "#",
      description: "Mastered Flexbox, Grid, and responsive UI design.",
    },
    {
      title: "React Basics",
      issuer: "HackerRank",
      date: "May 2024",
      link: "#",
      description: "Mastered Flexbox, Grid, and responsive UI design.",
    },
  ];

  return (
    <section
      id="Achievements"
      className="px-6 py-10 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]


 text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Achievements & Certifications
      </h2>
      <div className="w-18 h-1 bg-blue-500 hover:w-32 transition-all duration-200 rounded-2xl mx-auto  mb-10" />

      {/* Milestones */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-black max-w-sm  hover:scale-105 hover:shadow-cyan-500/20 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border border-cyan-400/20 hover:border-cyan-400"
          >
            <div className="text-3xl mb-2 text-white">{m.icon}</div>
            <h3 className={`text-2xl font-bold ${m.color}`}>{m.title}</h3>
            <p className="mt-1 text-sm text-gray-300 font-medium">
              {m.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Certificates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 px-20 ">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="relative group bg-gradient-to-br from-zinc-900 via-neutral-900 to-black
  max-w-sm flex items-center justify-between gap-x-6 border border-cyan-400/10 hover:shadow-cyan-500/20 hover:scale-102 shadow-md rounded-lg p-5  hover:shadow-2xl transition-all duration-200 overflow-hidden"
          >
            <div className="w-full h-full z-0 absolute bg-white/5 inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 " />
            <div className="w-2/3">
              <h3 className="text-xl text-cyan-400  font-semibold mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
                {cert.issuer}{" "}
                <span className="bg-cyan-400 text-black text-xs px-2 py-0.5 rounded-full ml-2">
                  {cert.date}
                </span>
              </p>
              <p className="text-sm text-gray-300 mb-3">{cert.description}</p>
            </div>

            <img
              src={coreJavaImg}
              alt=""
              title="click to view"
              className="w-20 h-auto  mt-2 rounded cursor-pointer brightness-95 hover:scale-102 shadow-md transition-all duration-75"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
