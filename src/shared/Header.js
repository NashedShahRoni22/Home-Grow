import React from "react";
import Logo from "../img/logo-hg.png";
import { IoLocationSharp, IoPhonePortraitOutline, IoTimeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-[#212529]">
      <div className="flex justify-center">
        <img src={Logo} alt="" className="w-64 mt-5"/>
      </div>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto py-10">
        <div className="flex items-center gap-4">
            <IoLocationSharp className="text-3xl text-[#71B002]"></IoLocationSharp>
            <p>Kadim Gaziaron, Goshingga, Shreepur, Gazipur.</p>
        </div>
        <div className="flex items-center gap-4">
            <IoPhonePortraitOutline className="text-3xl text-[#71B002]"></IoPhonePortraitOutline>
            <p>Cell/WhatsApp: +880 1731106046</p>
        </div>
        <div className="flex items-center gap-4">
            <IoTimeOutline className="text-3xl text-[#71B002]"></IoTimeOutline>
            <p>9:00 - 6:00 (GMT+6)</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
