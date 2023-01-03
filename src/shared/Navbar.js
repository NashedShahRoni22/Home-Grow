import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo-hg.png";
import { HiBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/" className="lg:text-white lg:text-xl lg:font-semibold">Home</Link>
      </li>
      <li>
        <Link className="lg:text-white lg:text-xl lg:font-semibold">Photo Gallery</Link>
      </li>
      <li>
        <Link className="lg:text-white lg:text-xl lg:font-semibold">Products</Link>
      </li>
      <li>
        <Link className="lg:text-white lg:text-xl lg:font-semibold">Contact Us</Link>
      </li>
      <li tabIndex={0}>
        <Link className="justify-between lg:text-white lg:text-xl lg:font-semibold">
          Company Profile
        </Link>
        <ul className="p-2 bg-white z-10">
          <li>
            <Link>Our Mission</Link>
          </li>
          <li>
            <Link>Opportunities</Link>
          </li>
          <li>
            <Link>Management Profile</Link>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <Link className="justify-between lg:text-white lg:text-xl lg:font-semibold">
          Our R&D Activities
        </Link>
        <ul className="p-2 bg-white z-10">
          <li>
            <Link>Production & Processing</Link>
          </li>
          <li>
            <Link>Our Export & Foregien Actiivities</Link>
          </li>
          <li>
            <Link>Our Departments</Link>
          </li>
        </ul>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#71B002]">
      <div className="navbar-start">
        <div className="dropdown mx-1">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiBars3CenterLeft className="text-4xl text-white"/>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="bg-[#212529]">
          <img src={Logo} className="w-32 p-2" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
