import React from "react";
import Lottie from "lottie-react";
import anim from "../anim/healthy-or-junk-food.json";

const Contact = () => {
  const style = {
    height: 400,
  };
  return (
    <div className="my-10 py-10 container mx-auto">
      <h1 className="text-4xl font-semibold text-center"><span className="text-[#71B002]">Contact</span> With Us</h1>
      <div className="md:flex items-center mx-5">
        <form action="" className="flex flex-col gap-4 my-5 md:w-1/2">
          <input
            type="text"
            placeholder="Enter name"
            className="input border-2 w-full border-[#71B002]"
          />
          <input
            type="text"
            placeholder="Enter email"
            className="input border-2 w-full border-[#71B002]"
          />
          <textarea
            className="textarea border-2 w-full border-[#71B002]"
            placeholder="Enter Message"
          ></textarea>
          <button className="btn w-1/4 border-2 border-[#71B002] bg-transparent text-[#71B002] hover:bg-[#71B002] hover:text-white hover:border-0 duration-300 ease-linear">Submit</button>
        </form>
        <div className="md:w-1/2">
          <Lottie animationData={anim} style={style}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
