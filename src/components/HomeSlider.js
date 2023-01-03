import React from "react";
import Slider1 from "../img/slider (1).jpg";
import Slider2 from "../img/slider (2).jpg";
import Slider3 from "../img/slider (3).jpg";

const HomeSlider = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img alt="" src={Slider1} className="w-full" />
        <div className="absolute h-full w-full bg-black opacity-70"></div>
        <div className="absolute flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-[#71B002] text-5xl font-bold">Home Grow</h1>
          <p className="text-white text-xl my-4">
            Home Grow is an initiative in agriculture sector with a new vision
            was incorporated
          </p>
          <button className="btn btn-outline btn-success">
            Learn More
          </button>
        </div>
        <div className="absolute flex gap-4 bottom-5 right-5">
          <a href="#slide3" className="btn btn-circle btn-outline btn-success">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-outline btn-success">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img alt="" src={Slider2} className="w-full" />
        <div className="absolute h-full w-full bg-black opacity-70"></div>
        <div className="absolute flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-[#71B002] text-5xl font-bold">Breeding</h1>
          <p className="text-white text-xl my-4">
            Breeding for high yielding varieties to adapt with climatic change.
          </p>
          <button className="btn btn-outline btn-success">
            Learn More
          </button>
        </div>
        <div className="absolute flex gap-4 bottom-5 right-5">
          <a href="#slide1" className="btn btn-circle btn-outline btn-success">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-outline btn-success">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img alt="" src={Slider3} className="w-full" />
        <div className="absolute h-full w-full bg-black opacity-70"></div>
        <div className="absolute flex flex-col justify-center items-center h-full w-full">
          <h1 className="text-[#71B002] text-5xl font-bold">Export</h1>
          <p className="text-white text-xl my-4">We export seed to Hongkong, Pakistan, Malaysia, S. Korea, China etc.</p>
          <button className="btn btn-outline btn-success">
            Learn More
          </button>
        </div>
        <div className="absolute flex gap-4 bottom-5 right-5">
          <a href="#slide2" className="btn btn-outline btn-success btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-outline btn-success btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
