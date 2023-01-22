import React from "react";
import rdImg from "../img/r&d.jpg";

const HomeRD = () => {
  return (
    <div className="py-10 container mx-auto">
      <h2 className="text-4xl font-semibold text-center">Our <span className="text-[#71B002]">R&D</span> Activities</h2>
      <div className="mt-5 md:flex items-center mx-10" data-aos="zoom-in-up" data-aos-duration="2000">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold text-[#71B002]">Our R&D</h2>
          <ul className="list-disc mt-3">
            <li>Farmers/foreign customers demand</li>
            <li>Research job</li>
            <li>New variety</li>
            <li>PDS, Demonstration, adaptive trials</li>
            <li>Germplasm collection and preservation</li>
            <li>Maintenance breeding and breeder seed production.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4 text-[#71B002]">We have</h2>
          <ul className="list-disc mt-3">
            <li>3 research farms in Thakurgao, Bogra and Panchagar</li>
            <li>6 Breeders</li>
            <li>10 breeder assistant</li>
            <li>Around 20000 germplasm and a gene bank</li>
          </ul>
        </div>
        <div className="md:w-1/2" data-aos="zoom-in-down" data-aos-duration="2000">
            <img src={rdImg} alt="" className="rounded-xl mt-5"/>
        </div>
      </div>
    </div>
  );
};

export default HomeRD;
