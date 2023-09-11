import React from "react";
import { Link } from "react-router-dom";

export default function VagetablesProd() {
  return (
    <div className="my-10 p-10 container mx-auto">
      <h2 className="text-3xl font-semibold">
        <span className="text-[#71B002]"> Vagetables</span> Products
      </h2>
      <div className="my-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link to="/moringa">
          <div className="relative group overflow-hidden rounded-xl">
            <img
              className="h-48 w-full rounded-xl group-hover:scale-125 duration-300 ease-linear"
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ7kV3DCZjkF6OiHaCAbK8-UipNQ77VLHAjVp10QU8pIeUZASelMOCv6RaYwh0rKwJc4rPm1-NH62ESRSI"
              alt=""
            />
            <div className="absolute top-0 h-full w-full bg-black/80 flex justify-end items-end p-5">
              <p className="text-green-500 font-semibold text-xl group-hover:text-2xl duration-300 ease-linear">Moringa Products</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
