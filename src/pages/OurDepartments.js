import React from "react";
import ourDeptImg from "../img/department.jpg";

const OurDepartments = () => {
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">Our Departments</h1>
      <div className="my-10 md:flex items-center gap-4">
        <div className="md:w-1/2">
          <img src={ourDeptImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <p className="list-disc">
            <li>R&D</li>
            <li>Stock seed</li>
            <li>Production</li>
            <li>Processing and quality control</li>
            <li>PDS, Demonstration and Promotion</li>
            <li>Sales and Marketing</li>
            <li>International correspondence</li>
            <li>Account, Finance and Commercial</li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;
