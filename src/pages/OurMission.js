import React from "react";
import missionImg from "../img/mission.jpg";

const OurMission = () => {
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">
        Our <span className="text-[#71B002]">Mission</span>
      </h1>
      <div className="md:flex items-center gap-4 my-10">
        <div className="md:w-1/2">
          <img src={missionImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <p className="text-justify">
            Breeding for high yielding varieties to adapt with climatic change.
            Increase food production by producing and supplying quality seed for
            domestic and international market. Use of modern technology for
            agricultural research. Increase average nutritional uptake for poor
            people. Reduce import cost for seed in Bangladesh and earning
            foreign currency by exporting seed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
