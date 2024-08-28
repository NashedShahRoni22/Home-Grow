import React from "react";
import Slider1 from "../img/slider (5).jpg";
import Slider2 from "../img/slider (6).jpg";
import Slider3 from "../img/slider (7).jpg";

const HomeSlider = () => {
  const slidersData = [
    {
      title: "Home Grow",
      desc: "Welcome to Home Grow, where we cultivate organic seeds and promote rooftop gardening. Our vision is to empower individuals with sustainable agriculture solutions for a greener future.",
      image: Slider1,
    },
    {
      title: "Breeding",
      desc: "Expanding our reach globally, we export premium organic seeds to Hong Kong, Pakistan, Malaysia, South Korea, and China. Join us in spreading greenery worldwide.",
      image: Slider2,
    },
    {
      title: "Export",
      desc: "At Home Grow, we specialize in breeding high-yielding seed varieties resilient to climate change. Our commitment to innovation drives us to create superior seeds for sustainable farming practices.",
      image: Slider3,
    },
  ];
  return (
    <div className="carousel w-full lg:h-screen">
      {slidersData.map((s, i) => (
        <div id={`slide${i}`} className="carousel-item relative w-full">
          <img alt="" src={s.image} className="w-full" />
          <div className="absolute h-full w-full bg-black opacity-70"></div>
          <div className="absolute flex flex-col gap-5 lg:gap-10 justify-center h-full mx-10 lg:mx-20">
            <h1 className="text-[#71B002] text-xl md:text-3xl lg:text-5xl font-bold text-center">
              {s.title}
            </h1>
            <p className="text-white text-sm md:text-xl lg:text-5xl text-center">
              {s.desc}
            </p>
          </div>
          <div className="absolute flex gap-4 bottom-2  md:bottom-5 right-2 md:right-5">
            <a
              href={`#slide${i - 1}`}
              className="btn btn-outline btn-success btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❮
            </a>
            <a
              href={`#slide${i + 1}`}
              className="btn btn-outline btn-success btn-circle btn-sm md:btn-md lg:btn-lg"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;
