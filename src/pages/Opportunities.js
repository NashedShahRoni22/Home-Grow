import React from "react";
import opportunitiesImg from "../img/opportunities.jpg";

const Opportunities = () => {
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">
        Our <span className="text-[#71B002]">Opportunites</span>
      </h1>
      <div className="md:flex my-10 items-center gap-4 mx-5">
        <div className="md:w-1/2">
          <img src={opportunitiesImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <p className="text-justify">
            Food will be the major issue in future for whole world. Quality seed
            is the main component of food production. Adverse weather, quality
            and area of cultivable land decreasing drastically, moreover labour,
            irrigation, crop protective components crisis etc also becoming big
            problem. In such situation, Bangladesh has a good opportunity to
            concentrate on quality seed production for domestic and export
            market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
