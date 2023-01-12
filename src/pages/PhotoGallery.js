import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageGallery from "react-image-gallery";

const PhotoGallery = () => {
  const images = [
    {
      original: "https://i.ibb.co/1bKcsL1/achivements-6.jpg",
      thumbnail: "https://i.ibb.co/1bKcsL1/achivements-6.jpg",
    },
    {
      original: "https://i.ibb.co/GcY11xX/achivements-5.jpg",
      thumbnail: "https://i.ibb.co/GcY11xX/achivements-5.jpg",
    },
    {
      original: "https://i.ibb.co/bF7hmp6/achivements-3.jpg",
      thumbnail: "https://i.ibb.co/bF7hmp6/achivements-3.jpg",
    },
    {
      original: "https://i.ibb.co/r7nCFcM/achivements-2.jpg",
      thumbnail: "https://i.ibb.co/r7nCFcM/achivements-2.jpg",
    },
    {
      original: "https://i.ibb.co/f8ZMmQG/achivements-1.jpg",
      thumbnail: "https://i.ibb.co/f8ZMmQG/achivements-1.jpg",
    },
  ];
  const { data: galleryImages } = useQuery({
    queryKey: ["imageGallery"],
    queryFn: () => fetch("imageGallery.json").then((res) => res.json()),
  });

  return (
    <div className="py-10 container mx-auto">
      <div className="my-10">
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Our Recent <span className="text-[#71B002]">Achivements</span>
        </h1>
        <ImageGallery items={images} />
      </div>
      <div className="my-10">
        <h1 className="text-4xl font-semibold mb-10 text-center">
          Our <span className="text-[#71B002]">Farm</span> Gallery
        </h1>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages?.map((gi, i) => (
            <figure key={i}>
              <img
                src={gi.img}
                alt="gi"
                className="h-64 w-64 shadow-2xl rounded-xl"
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
