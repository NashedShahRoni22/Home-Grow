import React, { useEffect, useState } from "react";
import usaImg from "../../src/img/usa.jpg";

const JuteProducts = () => {
  const [jutesProduct, setJutesProduct] = useState([]);
  useEffect(() => {
    fetch("juteProducts.json")
      .then((res) => res.json())
      .then((data) => setJutesProduct(data));
  }, []);
  return (
    <div className="my-10 p-10 container mx-auto">
      <div className="">
        <img
          src={usaImg}
          className="w-full max-w-[600px] h-auto mx-auto rounded-lg"
          alt="our_rp"
        />

        <p className="text-gray-700 text-lg md:text-xl mt-4 text-center font-semibold">
          Displaying home grow products at the Consulate Office of Bangladesh in
          Los Angeles, where the Consul General, Commercial Counselor, and
          representatives were present.
        </p>
      </div>

      <h2 className="text-3xl font-semibold mt-5">
        <span className="text-[#71B002]">{jutesProduct?.length} Jutes</span>{" "}
        Products
      </h2>
      <div className="my-10 grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-4">
        {jutesProduct?.map((jp, i) => (
          <div
            key={i}
            className="card glass"
            data-aos="flip-right"
            data-aos-duration="2000"
          >
            <figure>
              <img
                src={jp.img}
                alt="SeedsProductCard"
                className="h-48 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#71B002]">{jp.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JuteProducts;
