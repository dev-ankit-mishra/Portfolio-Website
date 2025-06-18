import { cards } from "./MiniProjectCard/Cards";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MinorProject() {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "40px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="min-h-screen min-w-full bg-gradient-to-br from-[#0d0221] to-[#232526] text-white tracking-wide leading-relaxed">
      <header>
        <h1 className="text-3xl text-center font-bold py-3 pt-6 ">
          Mini Project
        </h1>
        <div className="w-10 h-1 bg-blue-500 hover:w-24 transition-all duration-200 rounded-2xl mx-auto mt-2" />
      </header>
      <main className="w-full h-full">
        <div className="slider-container w-[80rem]  p-4 mx-auto ">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className="py-4 px-5">
                {card}
              </div>
            ))}
          </Slider>
        </div>
      </main>
    </section>
  );
}
