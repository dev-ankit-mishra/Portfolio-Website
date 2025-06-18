import { cards } from "./MiniProjectCard/Cards";
import React, { Component } from "react";
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
        <h1 className="text-3xl text-center font-semibold py-3 pt-6 ">
          Minor Project
        </h1>
        <div className="h-1 w-20 bg-blue-500 mt-1 mx-auto"></div>
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
