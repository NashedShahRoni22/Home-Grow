import React, { useEffect, useState } from "react";

const JuteProducts = () => {
  const [jutesProduct, setJutesProduct] = useState([]);
  useEffect(() => {
    fetch("juteProducts.json")
      .then((res) => res.json())
      .then((data) => setJutesProduct(data));
  }, []);
  return (
    <div className="my-10 p-10 container mx-auto">
      <h2 className="text-3xl font-semibold">
        <span className="text-[#71B002]">{jutesProduct?.length} Jutes</span>{" "}
        Products
      </h2>
      <div className="my-10 grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-4">
        {jutesProduct?.map((jp, i) => (
          <div key={i} className="card glass" data-aos="flip-right" data-aos-duration="2000">
          <figure>
            <img src={jp.img} alt="SeedsProductCard" className="h-48 w-full"/>
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
