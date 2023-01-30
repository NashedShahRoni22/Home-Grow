import React from "react";
import { Link } from "react-router-dom";
import opportutines from "../img/opportunities.jpg";
import management from "../img/department.jpg";

const HomePO = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center my-10">
        Profile & <span className="text-[#71B002]">Opportunites</span>
      </h1>
      <div className="py-5 my-5 flex flex-col items-center md:flex-row container mx-auto md:justify-evenly gap-4">
        <div data-aos="fade-right" data-aos-duration="2000" className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={management} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#71B002]">Management Profile</h2>
            <p>
              Parvin Sultana is a dynamic and enthusiastic agriculturist having
              over 20 ...
            </p>
            <div className="card-actions justify-start">
              <Link to="/profile" className="btn bg-[#71b002] border-0">Learn More</Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000" className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={opportutines} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#71B002]">Opportunities</h2>
            <p>
              Food will be the major issue in future for whole world. Quality
              seed is the ...
            </p>
            <div className="card-actions justify-start">
              <Link to="/opportunites" className="btn bg-[#71b002] border-0">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePO;
