import { useQuery } from "@tanstack/react-query";
import React from "react";

const OurRecentProjects = () => {
  const { data: projectsImages } = useQuery({
    queryKey: ["projectsImages"],
    queryFn: () => fetch("ourRecentProjects.json").then((res) => res.json()),
  });

  return (
    <div className="bg-[#212529]">
      <div className="py-10 container mx-auto">
        <h1 className="text-4xl font font-semibold mb-10 text-white text-center">
          Our <span className="text-[#71B002]">Recent Projects</span>
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center">
          {projectsImages?.map((pi) => (
            <img src={pi.img} alt="projectsImages" className="rounded-2xl"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRecentProjects;
