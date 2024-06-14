import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-semibold text-center mb-5">
        Our <span className="text-[#71B002]">Products</span>
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-5">
        <Link to="/seedsProduct" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://img.freepik.com/free-photo/mix-beans_1339-258.jpg?w=1060&t=st=1667387378~exp=1667387978~hmac=7d5649b1d12be70cb8240f468a00d3aaa225b064ddb18c2282463cae84a28c2d"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0 h-full  rounded-xl w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Seeds
            </h3>
          </div>
        </Link>
        <Link to="/foodsProduct" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://img.freepik.com/free-photo/front-view-pancakes-yummy-delicious-choco-with-sliced-red-strawberries-bananas-inside-white-plate-grey-background_140725-13111.jpg?t=st=1718384255~exp=1718387855~hmac=7c4d4b9e6c25c745e010af38926ef50b42b7f403876aef4e6c60e1da4ded0c77&w=996"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0 h-full  rounded-xl w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Food
            </h3>
          </div>
        </Link>

        <Link to="/vagetablesProduct" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0 rounded-xl h-full w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Vagetables
            </h3>
          </div>
        </Link>

        <Link to="/jutesProduct" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://img.freepik.com/free-vector/realistic-hands-bag-green-grass-composition_1284-71180.jpg?w=1380&t=st=1667396880~exp=1667397480~hmac=72e9a341979d2a20d2926946ae8ae2ec2b6c9d23b028df32b394933b1fea6d6d"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0 rounded-xl h-full w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Jute
            </h3>
          </div>
        </Link>

        <Link to="/comigSoon" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://img.freepik.com/free-photo/top-view-person-holding-brown-chicks-cloth_181624-34688.jpg?w=996&t=st=1667396971~exp=1667397571~hmac=48c97a36771f1715688f6e4fbc5d6bafcb73b55ad1b67a8830ff5e2563f7ee18"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0 rounded-xl h-full w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Poultry
            </h3>
          </div>
        </Link>

        <Link to="/comigSoon" className="overflow-hidden rounded-xl">
          <div className="h-64 md:h-96 relative hover:scale-110 transition duration-300 ease-in-out rounded-xl">
            <img
              src="https://images.pexels.com/photos/13121930/pexels-photo-13121930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="h-full w-full rounded-xl"
            />
            <div className="mask absolute top-0  rounded-xl h-full w-full bg-black opacity-50"></div>
            <h3 className="text-white text-3xl absolute bottom-5 right-5">
              Duck
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
