import React from "react";

const SeedsProductCard = ({ sp }) => {
  const { img, name, details } = sp;
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={img} alt="SeedsProductCard" className="h-48 w-full"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#71B002]">{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SeedsProductCard;
