import React from "react";
import ceoImg from "../img/ceoImg.jpeg";
import Lottie from "lottie-react";
import managementAnim from "../anim/management_anim.json";

const ManagementProfile = () => {
  const style = {
    height: 300,
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-semibold text-center">
        Management <span className="text-[#71B002]">Profile</span>
      </h1>
      <div className="my-10 md:flex items-center gap-4 mx-5">
        <div className="flex items-center justify-center">
          <img src={ceoImg} alt="" className="w-1/2 md:w-full shadow-2xl" />
        </div>
        <div>
          <p className="text-justify mt-4">
            Home Grow is a proprietorship organisation, owned by Parvin Sultana,
            an agriculturist.She is the President of Home Grow.She is working
            with her organisation to ensure healthy food, fruits, vegetables.
          </p>
        </div>
        <div>
          <Lottie
            animationData={managementAnim}
            style={style}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementProfile;
