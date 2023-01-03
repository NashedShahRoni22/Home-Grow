import React from "react";
import image1 from "../img/home (1).jpg";
import image2 from "../img/home (2).jpg";
import slider1 from "../img/slider (1).jpg";

const HomeCompanyProfile = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center mb-5">Company Profile</h1>
      <div className="md:flex gap-4 container mx-auto">
        <div className="md:w-1/2">
          <img src={slider1} alt="" className="mb-5" />
          <p className="text-justify">
            Home Grow is an initiative in agriculture sector with a new vision
            was incorporated in the year of 2022 to enter in international seed
            market by exporting and contract seed production as well as increase
            food production of country and upgrade the farmer’s income. Global
            warming as well as climate change is now becoming the burning issue
            for agriculture.
          </p>
          <p className="my-4 text-justify">
            Keeping this in mind, Home Grow is giving special emphasize on
            stress tolerant product development. Our objective is not only to
            produce, process and supply of quality seed for farmer’s
            satisfaction, but also develop and disseminate the appropriate
            technologies for successful crop production, which is one of the
            corner stones of our mission.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={image2} alt="" className="mb-4"/>
          <img src={image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeCompanyProfile;
