import React from "react";
import productionImg from "../img/production.jpg";

const HomePP = () => {
  return (
    <section className="bg-[#212529] text-white">
      <div className="my-10 py-10 mx-5 md:container md:mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-5">
          Our Production & <span className="text-[#71B002]">Processing</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <img src={productionImg} alt="" className="rounded-2xl" />
          </div>
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="2000">
            <h2 className="text-3xl font-semibold my-2 text-[#71B002]">
              Production
            </h2>
            <p className="text-justify">
              Home Grow has more than 80 experienced contract seed growers and 3
              confined farm for seed production. A dedicated production team of
              agriculturist is producing all kind of seed specially hybrid seed.
              More than 150 acre of land is engaged for seed production.
            </p>
            <h2 className="text-3xl font-semibold my-2 text-[#71B002]">
              Processing
            </h2>
            <p className="text-justify">
              Processing department is responsible to ensure very high quality
              of seed suitable for export market. We have facilities of
              mechanical drying, cleaning, grading, treating, coating etc. We
              also have dehumidified cold room for seed preservation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePP;
