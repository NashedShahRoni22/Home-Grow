import React from "react";

const HomeVideo = () => {
  return (
    <div className="my-10 container mx-auto">
      <h1 className="text-4xl font-semibold mb-10 text-center">
        Perennial colored malts <span className="text-[#71B002]">from Vietnam</span>
      </h1>
      <div className="">
        <video
          src="https://www.youtube.com/watch?v=KJCS4xuCiVc"
          autoPlay
          loop
          muted
          controls
        ></video>
      </div>
    </div>
  );
};

export default HomeVideo;
