import coreJavaImg from "../assets/coreJavaImg.png";
import { TbBrandLeetcode } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function AchievementsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 640);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const renderCard = (cert, idx) => {
    return (
      <div
        key={idx}
        className="relative group bg-gradient-to-br from-zinc-900 via-neutral-900 to-black
                        w-[18rem] xl:w-sm  flex items-center justify-between gap-x-6 border border-cyan-400/10 hover:shadow-cyan-500/20 hover:scale-102 shadow-[0_0_20px_rgba(255,255,255,0.05)] rounded-lg p-5  hover:shadow-2xl transition-all duration-200 overflow-hidden"
      >
        <div className="w-full h-full z-0 absolute bg-white/5 inset-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 " />
        <div className="w-2/3">
          <h3 className="text-base xl:text-xl text-cyan-400  font-semibold mb-2">
            {cert.title}
          </h3>
          <p className="text-xs xl:text-sm text-gray-400 mb-2">
            {cert.issuer}{" "}
            <span className="bg-cyan-400 text-black text-[0.625rem] xl:text-xs px-2 py-0.5 rounded-full ml-2">
              {cert.date}
            </span>
          </p>
          <p className="text-xs xl:text-sm text-gray-300 mb-3">
            {cert.description}
          </p>
        </div>

        <img
          src={coreJavaImg}
          alt=""
          title="click to view"
          className="w-16 xl:w-20 h-auto  mt-2 rounded cursor-pointer brightness-95 hover:scale-102 shadow-md transition-all duration-75"
        />
      </div>
    );
  };

  const milestones = [
    {
      title: (
        <span>
          <CountUp enableScrollSpy end={400} duration={5} />+
        </span>
      ),
      subtitle: "LeetCode Problems Solved",
      color: "text-yellow-400",
      icon: (
        <TbBrandLeetcode className="text-yellow-400 text-2xl xl:text-3xl mb-2" />
      ),
    },
    {
      title: (
        <span>
          <CountUp enableScrollSpy end={1000} duration={5} />+
        </span>
      ),
      subtitle: "GitHub Contributions (2024)",
      color: "text-green-400",
      icon: <FaGithub className="text-green-400 text-2xl xl:text-3xl mb-2" />,
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
      title: "Full-Stack Developer",
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
      className="lg:px-6 md:px-12 py-16  sm:py-10 bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1f1f1f]



 text-white"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Achievements & Certifications
      </h2>
      <div className="w-18 h-1 bg-blue-500 hover:w-32 transition-all duration-200 rounded-2xl mx-auto  mb-10" />

      {/* Milestones */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 mt-10 sm:mt=0">
        {milestones.map((m, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-zinc-900 via-neutral-900 to-black w-[13rem] xl:w-[15rem]  hover:scale-105 hover:shadow-cyan-500/20 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all border border-cyan-400/20 hover:border-cyan-400"
          >
            <div className="text-2xl xl:text-3xl mb-2 text-white">{m.icon}</div>
            <h3 className={`text-xl xl:text-2xl font-bold ${m.color}`}>
              {m.title}
            </h3>
            <p className="mt-1 text-xs xl:text-sm text-gray-300 font-medium">
              {m.subtitle}
            </p>
          </div>
        ))}
      </div>

      {/* Certificates */}

      <main className="mx-auto sm:py-0 py-8 ">
        {isMobile ? (
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-[20rem] mx-auto"
          >
            {certificates.map((cert, idx) => (
              <SwiperSlide
                key={idx}
                className="flex justify-center items-center h-auto" // Ensures card is centered
              >
                <div className=" flex items-center justify-center ">
                  {renderCard(cert, idx)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center justify-center sm:gap-x-4 md:gap-x-2  gap-y-10 px-4 ">
            {certificates.map((cert, idx) => renderCard(cert, idx))}
          </div>
        )}
      </main>
    </section>
  );
}
