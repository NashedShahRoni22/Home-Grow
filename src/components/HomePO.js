import React from "react";
import { Link } from "react-router-dom";
import opportutines from "../img/opportunities.jpg";
import management from "../img/department.jpg";
import po from "../img/po.jpg";

const HomePO = () => {
  return (
    <div className="mx-5 md:container md:mx-auto py-20">
      <h1 className="text-4xl font-semibold text-center mb-10 md:mb-20">
        Profile & <span className="text-[#71B002]">Opportunites</span>
      </h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="flex flex-col md:flex-row gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={management} alt="home_po" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#71B002]">Management Profile</h2>
              <p>
                Parvin Sultana is a dynamic and enthusiastic agriculturist
                having over 20 ...
              </p>
              <div className="card-actions justify-start">
                <Link to="/profile" className="btn bg-[#71b002] border-0">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img src={opportutines} alt="home_po" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#71B002]">Opportunities</h2>
              <p>
                Food will be the major issue in future for whole world. Quality
                seed is the ...
              </p>
              <div className="card-actions justify-start">
                <Link to="/opportunites" className="btn bg-[#71b002] border-0">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={po} className="rounded-2xl" alt="home_po" />
        </div>
      </div>
    </div>
  );
};

export default HomePO;
