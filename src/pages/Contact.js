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
      <div className="md:flex items-center">
        <form action="" className="flex flex-col gap-4 my-5 md:w-1/2">
          <input
            type="text"
            placeholder="Enter name"
            className="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Enter email"
            className="input input-bordered input-success w-full"
          />
          <textarea
            className="textarea textarea-success w-full"
            placeholder="Enter Message"
          ></textarea>
          <button className="btn btn-outline btn-success w-fit">Submit</button>
        </form>
        <div className="md:w-1/2">
          <Lottie animationData={anim} style={style}/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
