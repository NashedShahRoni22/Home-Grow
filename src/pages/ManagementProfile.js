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
      <div className="my-10 lg:flex items-center gap-4 mx-5">
        <div className="flex md:items-center gap-4">
          <img src={ceoImg} alt="" className="w-2/5 md:h-64 md:w-64 shadow-xl" />
          <p className="text-justify w-3/5 lg:text-xl">
            Home Grow is a proprietorship organisation, owned by <span className="font-bold text-green-500">Parvin Sultana</span> ,
            an agriculturist. She is the President of Home Grow. She is working
            with her organisation to ensure healthy food, fruits, vegetables.
          </p>
        </div>
        <div className="mt-10">
          <Lottie animationData={managementAnim} style={style} />
        </div>
      </div>
    </div>
  );
};

export default ManagementProfile;
