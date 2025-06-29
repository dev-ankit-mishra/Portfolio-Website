import React from "react";
import { cards } from "./MiniProjectCard/Cards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function MinorProject() {
  return (
    <section className="w-full bg-gradient-to-br from-[#0d0221] to-[#232526] text-white tracking-wide leading-relaxed">
      <header>
        <h1 className="text-3xl text-center font-bold py-3 pt-6">
          Mini Project
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2" />
      </header>
      <main className="w-full h-full">
        <div className="slider-container max-w-[80rem]  py-6 mx-auto">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            keyboard={{ enabled: true, onlyInViewport: true, pageUpDown: true }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation, Keyboard]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3, // Tailwind 'xl'
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center py-4 px-5">
                  <div className="max-w-md w-full">{card}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </section>
  );
}
