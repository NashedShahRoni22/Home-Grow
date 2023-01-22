import React from "react";
import exportImg from "../img/export.jpg";

const OurEFA = () => {
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">
        Our Export And <span className="text-[#71B002]">Foreign Activities</span>
      </h1>
      <div className="my-10 md:flex items-center gap-4 mx-5">
        <div className="md:w-1/2">
          <img src={exportImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <p className="text-justify">
            One of the major objectives of Home Grow is to export, develop new
            breeds for other countries and contract of seed production for many
            companies. We have several own varieties of different crops which
            are very popular in Pakistan, Malaysia, China, S. Korea etc. We
            produce seed of different hybrid vegetables as contract basis for
            different countries like Hongkong, Pakistan, Malaysia, S. Korea,
            China etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurEFA;
