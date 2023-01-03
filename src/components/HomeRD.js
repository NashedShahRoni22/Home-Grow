import React from "react";
import rdImg from "../img/r&d.jpg";

const HomeRD = () => {
  return (
    <div className="my-10 py-10 bg-[#212529] text-white">
      <h2 className="text-4xl font-semibold text-center">Our R&D Activities</h2>
      <div className="mt-5 md:flex items-center container mx-auto">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold">Our R&D</h2>
          <ul className="list-disc mt-3">
            <li>Farmers/foreign customers demand</li>
            <li>Research job</li>
            <li>New variety</li>
            <li>PDS, Demonstration, adaptive trials</li>
            <li>Germplasm collection and preservation</li>
            <li>Maintenance breeding and breeder seed production.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">We have</h2>
          <ul className="list-disc mt-3">
            <li>3 research farms in Thakurgao, Bogra and Panchagar</li>
            <li>6 Breeders</li>
            <li>10 breeder assistant</li>
            <li>Around 20000 germplasm and a gene bank</li>
          </ul>
        </div>
        <div className="md:w-1/2">
            <img src={rdImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeRD;
