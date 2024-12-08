import React from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbSteeringWheel } from "react-icons/tb";
import { IoPeople } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-[1440px] h-[2120px] absolute top-[124px] bg-[#F6F7F9]">
      <div className="flex w-[640px] h-[360px] border rounded-[10px] absolute left-[64px] top-[32px] bg-[#54A6FF]">
        <div className="w-[284px] h-[224px] absolute left-[24px] top-[24px] gap-[20px]">
          <div>
            <h2 className="w-[272px] h-[96px] font-semibold text-[32px] text-white">
              The Best Platform for Car Rental
            </h2>
            <p className="w-[284px] h-[48px] absolute top-[112px] text-white">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
          </div>
        </div>
        <button className="w-[120px] h-[44px] justify-center text-center absolute top-[200px] left-[20px] text-white bg-[#3563E9] border rounded-[4px] border-none gap-[8px]">
          Rental Car
        </button>
        <div className="w-[406px] h-[116px] absolute left-[137px] top-[234px]">
          <img src="image7.png" />
        </div>
      </div>
      <div className="w-[640px] h-[360px] border rounded-[10px] absolute left-[736px] top-[32px] bg-[#3563E9]">
        <div className="w-[284px] h-[224px] absolute left-[24px] top-[24px] gap-[20px]">
          <div>
            <h2 className="w-[272px] h-[96px] font-semibold text-[32px] text-white">
              Easy way to rent a car at a low price
            </h2>
            <p className="w-[284px] h-[48px] absolute top-[112px] text-white">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
          </div>
        </div>
        <button className="w-[120px] h-[44px] justify-center text-center absolute top-[200px] left-[20px] text-white bg-[#54A6FF] border rounded-[4px] border-none gap-[8px]">
          Rental Car
        </button>
        <div className="w-[406px] h-[116px] absolute left-[137px] top-[234px]">
          <img src="image 8.png" />
        </div>
      </div>
      <div className="w-[582px] h-[132px] absolute left-[64px] top-[424px] border rounded-[10px]">
        <div className="flex w-[92px] h-[20px] absolute left-[48px] top-[24px] gap-[8px]">
          <IoMdRadioButtonOn className="relative top-[2px] w-[16px] h-[16px] text-blue-500" />
          <p className="w-[68px] h-[20px] relative left-[2px] top-[-2px] font-semibold text-[16px]">
            Pick-Up
          </p>
        </div>
        <div className="w-[486px] h-[48px] absolute left-[48px] top-[60px] gap-[24px]">
          <div className="w-[126px] h-[48px] gap-y-8">
            <div className="w-[77px] h-[20px] gap-[8px]">
              <p className="font-bold text-[16px]">Location</p>
            </div>
            <div className="w-[126px] h-[20px] relative top-[20px]">
              <div className="w-[104px] h-[20px] gap-[4px]">
                <p className="text-[12px]  text-[#90A3BF]">Select your city</p>
                <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
              </div>
            </div>
            <div className="w-[134px] h-[48px] relative left-[174px] top-[-35px] gap-[8px]">
              <div className="w-[48px] h-[20px] gap-[8px]">
                <p className="text-[16px] font-bold">Date</p>
                <div className="w-[104px] h-[20px] gap-[8px]">
                  <p className="text-[12px]  text-[#90A3BF] mt-3">
                    Select your date
                  </p>
                  <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
                </div>
              </div>
            </div>
            <div className="w-[134px] h-[48px] absolute left-[356px] top-[3px] gap-[8px]">
              <div className="w-[48px] h-[20px] gap-[8px]">
                <p className="text-[16px] font-bold">Time</p>
                <div className="w-[104px] h-[20px] gap-[8px]">
                  <p className="text-[12px]  text-[#90A3BF] mt-3">
                    Select your time
                  </p>
                  <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[60px] h-[60px] absolute left-[690px] top-[460px] border rounded-[5px] bg-[#3563E9]">
        <HiMiniArrowsUpDown className="w-[24px] h-[24px] relative left-[17px] top-[18px]" />
      </div>
      <div className="w-[582px] h-[132px] absolute left-[794px] top-[424px] border rounded-[10px]">
        <IoMdRadioButtonOn className="relative left-[48px] top-[24px] w-[16px] h-[16px] text-blue-500" />
        <p className="w-[68px] h-[20px] relative left-[75px] top-[3px] font-semibold text-[16px]">
          Drop-Off
        </p>
        <div className="w-[126px] h-[48px] relative left-[48px] top-[25px] gap-[8px]">
          <div className="w-[77px] h-[20px] gap-[8px]">
            <p className="font-bold text-[16px]">Location</p>
          </div>
          <div className="w-[126px] h-[20px] relative top-[20px]">
            <div className="w-[104px] h-[20px] gap-[4px]">
              <p className="text-[12px]  text-[#90A3BF]">Select your city</p>
              <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
            </div>
          </div>
          <div className="w-[134px] h-[48px] relative left-[174px] top-[-35px] gap-[8px]">
            <div className="w-[48px] h-[20px] gap-[8px]">
              <p className="text-[16px] font-bold">Date</p>
              <div className="w-[104px] h-[20px] gap-[8px]">
                <p className="text-[12px]  text-[#90A3BF] mt-3">
                  Select your date
                </p>
                <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
              </div>
            </div>
          </div>
          <div className="w-[134px] h-[48px] absolute left-[356px] top-[3px] gap-[8px]">
            <div className="w-[48px] h-[20px] gap-[8px]">
              <p className="text-[16px] font-bold">Time</p>
              <div className="w-[104px] h-[20px] gap-[8px]">
                <p className="text-[12px]  text-[#90A3BF] mt-3">
                  Select your time
                </p>
                <FaAngleDown className="w-[14px] h-[14px] relative left-[112px] top-[-12px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Section */}
      {/* Main Div Car Section */}
      
      <div className="flex w-[1312px] h-[1356px] absolute left-[64px] top-[636px]">
        
      <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
        <div
          className="flex flex-col p-6 bg-white rounded-xl max-w-[304px]"
          role="article"
          aria-label="Car rental listing for Koenigsegg Sport"
        >
          <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
            <div className="flex flex-col">
              <h2 className="text-xl tracking-tight text-gray-900">
                Koenigsegg
              </h2>
              <p className="mt-1 text-sm tracking-tight text-slate-400">
                Sport
              </p>
            </div>
            <FaHeart className="text-red-500" />
          </div>
          <img
            src="car.png"
            className="object-contain self-center mt-16 aspect-[3.23] max-w-[232px] w-[232px]"
            alt="Koenigsegg Sport car side view"
          />
          <div
            className="flex gap-4 items-start mt-16 text-sm font-medium text-slate-400"
            role="list"
          >
            <div
              className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap"
              role="listitem"
            >
              <img
                src="gas-station.png"
                alt="Fuel capacity icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <span className="w-7">90L</span>
            </div>
            <div
              className="flex gap-1 items-start whitespace-nowrap"
              role="listitem"
            >
              <img
                src="manual.png"
                alt="Transmission type icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />

              <span className="w-12">Manual</span>
            </div>
            <div className="flex gap-1.5 items-start" role="listitem">
              <IoPeople className="w-[24px] h-[24px]" />
              <span className="w-[60px]">2 People</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 w-full">
            <div className="text-xl font-bold min-h-[44px] text-slate-400">
              $99.00/
              <span className="text-sm text-slate-400">day</span>
            </div>
            <button
              className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
              aria-label="Rent Koenigsegg Sport"
            >
              Rent Now
            </button>
          </div>
        </div>

        <div
          className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-w-[304px] absolute left-[336px]"
          role="article"
          aria-labelledby="car-title"
        >
          <div className="flex gap-5 justify-between font-bold">
            <div className="flex flex-col">
              <h2
                id="car-title"
                className="text-xl tracking-tight text-gray-900"
              >
                Nissan GT - R
              </h2>
              <div className="mt-1 text-sm tracking-tight text-slate-400">
                Sport
              </div>
            </div>
            <FaRegHeart />
          </div>
          <img
            src="image 8.png"
            alt="Nissan GT-R sports car"
            className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px]"
          />
          <div
            className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400"
            role="list"
            aria-label="Car specifications"
          >
            <div
              className="flex gap-1.5 items-start tracking-tight whitespace-nowrap"
              role="listitem"
            >
              <img
                src="gas-station.png"
                alt="Fuel capacity icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div className="w-7">80L</div>
            </div>
            <div
              className="flex gap-1 items-start whitespace-nowrap"
              role="listitem"
            >
              <img
                src="manual.png"
                alt="Transmission type icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div className="w-12">Manual</div>
            </div>
            <div
              className="flex gap-1.5 items-start tracking-tight"
              role="listitem"
            >
              <IoPeople className="w-[24px] h-[24px]" />
              <div className="w-[60px]">2 People</div>
            </div>
          </div>
          <div className="flex gap-3 mt-5 w-full">
            <div className="flex flex-col font-bold text-slate-400">
              <div className="text-xl">
                $80.00/
                <span className="text-sm text-slate-400">day</span>
              </div>
              <div className="mt-1 text-sm">$100.00</div>
            </div>
            <button
              className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
              aria-label="Rent Nissan GT-R"
            >
              Rent Now
            </button>
          </div>
        </div>
        <div
          className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-w-[304px] max-h-[388px] absolute left-[672px]"
          role="article"
          aria-label="Car rental listing for Rolls-Royce"
        >
          <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
            <div className="flex flex-col">
              <h2 className="text-xl tracking-tight text-gray-900">
                Rolls Royce
              </h2>
              <p className="mt-1 text-sm tracking-tight text-slate-400">
                Sedan
              </p>
            </div>
            <FaHeart className="text-red-500" />
          </div>
          <img
            src="Rolls.png"
            className="object-contain self-center mt-16 aspect-[3.23] max-w-[232px] w-[232px]"
            alt="Rolls-Royce car side view"
          />
          <div
            className="flex gap-4 items-start mt-16 text-sm font-medium text-slate-400"
            role="list"
          >
            <div
              className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap"
              role="listitem"
            >
              <img
                src="gas-station.png"
                alt="Fuel capacity icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <span className="w-7">90L</span>
            </div>
            <div
              className="flex gap-1 items-start whitespace-nowrap"
              role="listitem"
            >
              <img
                src="manual.png"
                alt="Transmission type icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />

              <span className="w-12">Manual</span>
            </div>
            <div className="flex gap-1.5 items-start" role="listitem">
              <IoPeople className="w-[24px] h-[24px]" />
              <span className="w-[60px]">2 People</span>
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 w-full">
            <div className="text-xl font-bold min-h-[44px] text-slate-400">
              $99.00/
              <span className="text-sm text-slate-400">day</span>
            </div>
            <button
              className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
              aria-label="Rolls-Royce"
            >
              Rent Now
            </button>
          </div>
        </div>
        <div
          className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-w-[304px] absolute left-[1008px]"
          role="article"
          aria-labelledby="car-title"
        >
          <div className="flex gap-5 justify-between font-bold">
            <div className="flex flex-col">
              <h2
                id="car-title"
                className="text-xl tracking-tight text-gray-900"
              >
                Nissan GT - R
              </h2>
              <div className="mt-1 text-sm tracking-tight text-slate-400">
                Sport
              </div>
            </div>
            <FaRegHeart />
          </div>
          <img
            src="image 8.png"
            alt="Nissan GT-R sports car"
            className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[204px]"
          />
          <div
            className="flex gap-4 items-start mt-16 text-sm font-medium leading-5 text-slate-400"
            role="list"
            aria-label="Car specifications"
          >
            <div
              className="flex gap-1.5 items-start tracking-tight whitespace-nowrap"
              role="listitem"
            >
              <img
                src="gas-station.png"
                alt="Fuel capacity icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div className="w-7">80L</div>
            </div>
            <div
              className="flex gap-1 items-start whitespace-nowrap"
              role="listitem"
            >
              <img
                src="manual.png"
                alt="Transmission type icon"
                className="object-contain shrink-0 w-6 aspect-square"
              />
              <div className="w-12">Manual</div>
            </div>
            <div
              className="flex gap-1.5 items-start tracking-tight"
              role="listitem"
            >
              <IoPeople className="w-[24px] h-[24px]" />
              <div className="w-[60px]">2 People</div>
            </div>
          </div>
          <div className="flex gap-3 mt-5 w-full">
            <div className="flex flex-col font-bold text-slate-400">
              <div className="text-xl">
                $80.00/
                <span className="text-sm text-slate-400">day</span>
              </div>
              <div className="mt-1 text-sm">$100.00</div>
            </div>
            <button
              className="gap-2 self-stretch px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
              aria-label="Rent Nissan GT-R"
            >
              Rent Now
            </button>
          </div>
          
        </div>
        
       </div>
       
      </div>
      
      
    </div>
    
  );
};

export default Hero;
