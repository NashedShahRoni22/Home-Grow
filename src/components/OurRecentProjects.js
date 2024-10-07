import { useQuery } from "@tanstack/react-query";
import React from "react";


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

        <div className="grid gap-5 md:grid-cols-2">
          {projectsImages?.map((pi) => (
            <img
              src={pi.img}
              alt="projectsImages"
              className="rounded-2xl h-full"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRecentProjects;
