import { useQuery } from "@tanstack/react-query";
import React from "react";
import usaImg from "../../src/img/usa.jpg";

const OurRecentProjects = () => {
  const { data: projectsImages } = useQuery({
    queryKey: ["projectsImages"],
    queryFn: () => fetch("ourRecentProjects.json").then((res) => res.json()),
  });

  return (
    <div className="py-20 bg-[#212529]">
      <div className="mx-5 md:container md:mx-auto">
        <h1 className="text-4xl font font-semibold mb-10 md:mb-20 text-white text-center">
          Our <span className="text-[#71B002]">Recent Projects</span>
        </h1>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="relative">
            <img src={usaImg} className="w-full rounded-t-2xl" alt="our_rp" />
            {/* <div className="h-full w-full absolute top-0 rounded-2xl flex items-end">
              <p className="text-white text-center mt-5 bg-black py-2.5 rounded-b-2xl">
                Displaying home grow products consulate office of Bangladesh at
                Los Angeles where consul General, commercial counselor and
                representative were present there.
              </p>
            </div> */}
            <p className="text-white text-center bg-black py-2.5 rounded-b-2xl">
                Displaying home grow products consulate office of Bangladesh at
                Los Angeles where consul General, commercial counselor and
                representative were present there.
              </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projectsImages?.map((pi) => (
              <img
                src={pi.img}
                alt="projectsImages"
                className="rounded-2xl h-full"
                // data-aos="flip-left"
                // data-aos-easing="ease-out-cubic"
                // data-aos-duration="2000"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecentProjects;
