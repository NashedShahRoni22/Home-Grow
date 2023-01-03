import React from "react";
import productionImg from "../img/production.jpg";

const HomePP = () => {
  return (
    <div className="my-10 py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center mb-5">Our Production & Processing</h1>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src={productionImg} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-semibold my-2">Production</h2>
          <p className="text-justify">
            Home Grow has more than 80 experienced contract seed growers and 3
            confined farm for seed production. A dedicated production team of
            agriculturist is producing all kind of seed specially hybrid seed.
            More than 150 acre of land is engaged for seed production.
          </p>
          <h2 className="text-3xl font-semibold my-2">Processing</h2>
          <p className="text-justify">
            Processing department is responsible to ensure very high quality of
            seed suitable for export market. We have facilities of mechanical
            drying, cleaning, grading, treating, coating etc. We also have
            dehumidified cold room for seed preservation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePP;
