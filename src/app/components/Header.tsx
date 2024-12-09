import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { FaBell } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiSlidersHorizontalLight } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-[1440px] h-[124px]">
      <div className="w-[148px] h-[44px] absolute left-[60px] top-[40px] font-bold text-[32px] text-[#3563E9]">
        MORENT
      </div>
      <div className="w-[492px] h-[44px] absolute left-[272px] top-[40px] rounded-[70px] stroke-[#C3D4E9] border shadow-md">
        <div className="relative top-[7px] left-[10px]">
          <IoSearch className="w-[24px] h-[24px]" />
        </div>
        <div className="absolute w-[149px] h-[20px]">
          <p className="text-[14px] font-medium absolute left-[60px] top-[-15px] text-nowrap opacity-[50%]">
            Search something here
          </p>
        </div>
        <PiSlidersHorizontalLight className="w-[24px] h-[24px] absolute left-[450px] top-[10px]" />
      </div>
      <div className=" flex w-[236px] h-[44px] absolute left-[1172px] top-[40px]">
        <div className="w-[44px] h-[44px] border rounded-full">
          <div className="opacity-[80%] stroke-[#C3D4E9]">
            <IoMdHeart className="w-[24px] h-[24px] absolute left-[10px] top-[10px] opacity-75" />
          </div>
        </div>

        <div className="w-[44px] h-[44px] absolute left-[64px] border rounded-full">
          <div className="opacity-[80%] stroke-[#C3D4E9]">
            <FaBell className="w-[24px] h-[24px] absolute left-[10px] top-[10px] opacity-75" />
          </div>
        </div>
        <div className="w-[44px] h-[44px] absolute left-[64px] border rounded-full">
          <div className="opacity-[80%] stroke-[#C3D4E9]">
            <FaBell className="w-[24px] h-[24px] absolute left-[10px] top-[10px] opacity-25" />
            <FaRegCircle className="w-[11px] h-[11px] absolute left-[25px] top-[2px] text-[#FF4423] bg-[#FF4423] rounded-full" />
          </div>
        </div>

        <div className="w-[44px] h-[44px] absolute left-[128px] border rounded-full">
          <div className="opacity-[80%] stroke-[#C3D4E9]">
            <IoMdSettings className="w-[24px] h-[24px] absolute left-[10px] top-[10px] opacity-75" />
          </div>
        </div>
        <div className="w-[44px] h-[44px] absolute left-[192px] border rounded-full">
          <div className="stroke-[#C3D4E9]">
            <Image src="Image.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
