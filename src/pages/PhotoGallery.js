import { useQuery } from "@tanstack/react-query";
import React from "react";
import ImageGallery from "react-image-gallery";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoGallery = () => {
  const images = [
    {
      original: "https://i.ibb.co/nk8jcb6/Whats-App-Image-2024-06-12-at-10-22-30-46ec7611.jpg",
      thumbnail: "https://i.ibb.co/nk8jcb6/Whats-App-Image-2024-06-12-at-10-22-30-46ec7611.jpg",
    },
    {
      original: "https://i.ibb.co/pRM7PcV/Whats-App-Image-2024-06-12-at-10-22-29-f9769f3a.jpg",
      thumbnail: "https://i.ibb.co/pRM7PcV/Whats-App-Image-2024-06-12-at-10-22-29-f9769f3a.jpg",
    },
    {
      original: "https://i.ibb.co/y0LBw7J/Whats-App-Image-2024-06-12-at-10-22-29-3c8d7779.jpg",
      thumbnail: "https://i.ibb.co/y0LBw7J/Whats-App-Image-2024-06-12-at-10-22-29-3c8d7779.jpg",
    },
    {
      original: "https://i.ibb.co/HK5qHsG/Whats-App-Image-2024-06-12-at-10-22-29-263e4e54.jpg",
      thumbnail: "https://i.ibb.co/HK5qHsG/Whats-App-Image-2024-06-12-at-10-22-29-263e4e54.jpg",
    },
    {
      original: "https://i.ibb.co/1LcyXb9/Whats-App-Image-2024-06-12-at-10-22-28-027f093c.jpg",
      thumbnail: "https://i.ibb.co/1LcyXb9/Whats-App-Image-2024-06-12-at-10-22-28-027f093c.jpg",
    },
    {
      original: "https://i.ibb.co/4mC8KKj/Whats-App-Image-2024-06-12-at-10-22-28-cfc03acf.jpg",
      thumbnail: "https://i.ibb.co/4mC8KKj/Whats-App-Image-2024-06-12-at-10-22-28-cfc03acf.jpg",
    },
    {
      original: "https://i.ibb.co/d7TKMbh/Whats-App-Image-2024-06-12-at-10-22-27-1d8d1387.jpg",
      thumbnail: "https://i.ibb.co/d7TKMbh/Whats-App-Image-2024-06-12-at-10-22-27-1d8d1387.jpg",
    },
    {
      original: "https://i.ibb.co/znRgk6D/Whats-App-Image-2024-06-12-at-10-22-27-56ce417c.jpg",
      thumbnail: "https://i.ibb.co/znRgk6D/Whats-App-Image-2024-06-12-at-10-22-27-56ce417c.jpg",
    },
    {
      original: "https://i.ibb.co/3c5MhpL/Whats-App-Image-2024-06-12-at-10-22-27-f04c5e02.jpg",
      thumbnail: "https://i.ibb.co/3c5MhpL/Whats-App-Image-2024-06-12-at-10-22-27-f04c5e02.jpg",
    },
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
    }
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
        <div className="mx-5 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <PhotoProvider>
        {galleryImages?.map((gi, i) => (
            <PhotoView key={i} src={gi.img}>
              <img
                src={gi.img}
                alt="gi"
                className="h-64 w-64 shadow-2xl rounded-xl cursor-pointer"
              />
            </PhotoView>
          ))}
        </PhotoProvider>
          
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
