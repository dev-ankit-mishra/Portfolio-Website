import { useEffect, useState } from "react";
import { techStacks } from "./SkillsCards/TechStack";
import { languages } from "./SkillsCards/Languages";
import { aiTools } from "./SkillsCards/AITools";
import { cloudAndDevops } from "./SkillsCards/CloudAndDevops";
import { databases } from "./SkillsCards/Databases";
import { devTools } from "./SkillsCards/DevTools";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Skills() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreen = () => setIsMobile(window.innerWidth < 640);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const cardItems = [
    { id: 1, label: "Languages", content: languages },
    { id: 2, label: "Tech Stacks", content: techStacks },
    { id: 3, label: "Databases", content: databases },
    { id: 4, label: "Cloud & Devops", content: cloudAndDevops },
    { id: 5, label: "AI Tools", content: aiTools },
    { id: 6, label: "Development Tools", content: devTools },
  ];

  const bgColors = {
    Languages:
      "bg-gradient-to-br from-[#fef9c3] to-[#fef08a] dark:from-[#0a1a3d] dark:to-[#0f2c63]",

    "Tech Stacks":
      "bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd] dark:from-[#0d1117] dark:to-[#1f2937]",

    Databases:
      "bg-gradient-to-br from-[#d1fae5] to-[#a7f3d0] dark:from-[#002d2d] dark:to-[#014f40]",

    "Cloud & Devops":
      "bg-gradient-to-br from-[#ccfbf1] to-[#a5f3fc] dark:from-[#002d3d] dark:to-[#004f73]",

    "AI Tools":
      "bg-gradient-to-br from-[#ffedd5] to-[#fdba74] dark:from-[#3a0d00] dark:to-[#5a2000]",

    "Development Tools":
      "bg-gradient-to-br from-[#fae8ff] to-[#f5d0fe] dark:from-[#2b0033] dark:to-[#50005a]",
  };

  const renderCard = (card) => (
    <div
      key={card.label}
      className={`w-[16rem] sm:w-[18rem] md:w-xs xl:w-[23rem] rounded-2xl  
                shadow-xl transition-all duration-200 
                
                hover:ring-1 hover:ring-cyan-400
                hover:scale-102 hover:shadow-cyan-500/20 border border-black/10 dark:border-white/10
                ${bgColors[card.label]}`}
    >
      <p
        className="inline-block ml-8 text-base sm:text-lg xl:text-[1.38rem] font-semibold 
                  text-gray-800 dark:text-white pt-5 border-b border-b-indigo-400 pb-1"
      >
        {card.label}
      </p>
      <div className="grid grid-cols-3 gap-8 md:py-8 md:px-6 py-6 px-8 place-items-center font-medium">
        {card.content}
      </div>
    </div>
  );

  return (
    <section
      id="Skills"
      className="scroll-mt-8 w-full md:h-auto xl:h-screen md:px-6 py-4 md:py-6 box-border 
                 bg-gray-100 dark:bg-gradient-to-br dark:from-[#1e293b] dark:to-[#0f172a] pb-12"
    >
      <header>
        <h1 className="text-2xl md:text-3xl font-bold text-center pb-4 tracking-wide text-gray-900 dark:text-white">
          Skills
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2 mb-8" />
      </header>

      <main className="text-gray-900 dark:text-white py-20 md:py-2 h-full">
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
            {cardItems.map((card) => (
              <SwiperSlide key={card.id}>
                <div className=" flex items-center justify-center pt-6 pb-12">
                  {renderCard(card)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid sm:grid-cols-2 [@media(min-width:1080px)]:grid-cols-3 gap-10 place-items-center">
            {cardItems.map((card) => (
              <div key={card.id}>{renderCard(card)}</div>
            ))}
          </div>
        )}
      </main>
    </section>
  );
}
