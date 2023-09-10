import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SeedsProductCard from "../components/SeedsProductCard";

const SeedsProducts = () => {
  const [seedsProduct, setSeedsProduct] = useState([]);
  useEffect(() => {
    fetch("seedsProducts.json")
      .then((res) => res.json())
      .then((data) => setSeedsProduct(data));
  }, []);
  return (
    <div className="my-10 p-10 container mx-auto">
      <h2 className="text-3xl font-semibold">
      <span className="text-[#71B002]">{seedsProduct?.length} Seeds</span> Products
      </h2>
      <div className="my-10 grid gap-6 justify-center md:grid-cols-2 lg:grid-cols-4">
                                                                                                                              
                                                                                          
        {seedsProduct?.map((sp,i) => (                                   
          <SeedsProductCard sp={sp} key={i}></SeedsProductCard>
        ))}                                                                                                    
      </div>
    </div>
  );
};

export default SeedsProducts;
