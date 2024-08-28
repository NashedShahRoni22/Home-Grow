import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomeInfoBoxs = () => {
  return (
    <div className="py-10 flex flex-col lg:flex-row gap-4 mx-5 md:container md:mx-auto">
      <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center text-center p-4 rounded-3xl hover:bg-[#71B002] hover:text-white">
        <h2 className="text-2xl font-semibold">Our R&D Activities</h2>
        <p className="my-3">
          We work for farmers satisfaction with stress tolerance products
          farmers/foreign customers demand research job
        </p>

        <Link className="p-2 border rounded-full border-white">
          <AiOutlineArrowRight className="text-3xl" />
        </Link>
      </div>
      <div data-aos="fade-down" data-aos-duration="2000" className="flex flex-col items-center text-center p-4 rounded-3xl hover:bg-[#71B002] hover:text-white">
        <h2 className="text-2xl font-semibold">Production & Processing</h2>
        <p className="my-3">
          Production Home Grow has more than 100 experienced contract seed
          growers and 5 confined farm.
        </p>
        <Link className="p-2 border rounded-full border-white">
          <AiOutlineArrowRight className="text-3xl" />
        </Link>
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" className="flex flex-col items-center text-center p-4 rounded-3xl hover:bg-[#71B002] hover:text-white">
        <h2 className="text-2xl font-semibold">Our Departments</h2>
        <p className="my-3">
          R&D Stock seed Production Processing and quality control PDS,
          Demonstration and Promotion Sales and Marketing
        </p>
        <Link className="p-2 border rounded-full border-white">
          <AiOutlineArrowRight className="text-3xl" />
        </Link>
      </div>
    </div>
  );
};

export default HomeInfoBoxs;
