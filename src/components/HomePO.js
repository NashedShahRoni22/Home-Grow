import React from "react";
import { Link } from "react-router-dom";
import opportutines from "../img/opportunities.jpg";
import management from "../img/department.jpg";

const HomePO = () => {
  return (
    <div className="my-10 bg-[#212529] py-10">
      <h1 className="text-4xl font-semibold text-center mb-5 text-white">Profile & Opportunites</h1>
      <div className="flex flex-col items-center md:flex-row container mx-auto md:justify-evenly gap-4">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={management} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Management Profile</h2>
            <p>
              Parvin Sultana is a dynamic and enthusiastic agriculturist having
              over 20 ...
            </p>
            <div className="card-actions justify-start">
              <Link className="btn bg-[#71b002] border-0">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={opportutines} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Opportunities</h2>
            <p>
              Food will be the major issue in future for whole world. Quality
              seed is the ...
            </p>
            <div className="card-actions justify-start">
              <Link className="btn bg-[#71b002] border-0">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePO;
