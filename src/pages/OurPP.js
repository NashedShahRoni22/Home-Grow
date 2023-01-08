import React from "react";
import ourPPImg from "../img/production.jpg";
import ourRD from "../img/r&d.jpg";

const OurPP = () => {
  return (
    <div className="container mx-auto py-10">
      <div>
        <h2 className="text-4xl font-semibold text-center">
          Our Production & <span className="text-[#71b002]">Processing</span>
        </h2>
        <div className="my-10 md:flex items-center gap-4">
          <div className="md:w-1/2">
            <img src={ourPPImg} alt="" />
          </div>
          <div className="md:w-1/2">   
            <h3 className="text-2xl font-semibold">Production</h3>
            <p className="text-justify">
              Home Grow has more than 80 experienced contract seed growers and 3
              confined farm for seed production. A dedicated production team of
              agriculturist is producing all kind of seed specially hybrid seed.
              More than 150 acre of land is engaged for seed production.
            </p>
            <h3 className="text-2xl font-semibold">Processing</h3>
            <p className="text-justify">
              Processing department is responsible to ensure very high quality
              of seed suitable for export market. We have facilities of
              mechanical drying, cleaning, grading, treating, coating etc. We
              also have dehumidified cold room for seed preservation.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold text-center">
          Our R&D <span className="text-[#71b002]">Activities</span>
        </h2>
        <div className="my-10 md:flex items-center gap-4">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold">Our R&D</h3>
            <div>
              <p className="text-justify">
                Farmers/foreign customers demand Research job New variety PDS,
                Demonstration, adaptive trials Germplasm collection and
                preservation Maintenance breeding and breeder seed production.
              </p>
              <h3 className="text-2xl font-semibold">We have</h3>
              <p className="text-justify">
                3 research farm in Thakurgao, Bogra and Panchagar 6 Breeders 10
                breeder assistant Around 20000 germplasm and a gene bank.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={ourRD} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPP;
