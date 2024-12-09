import React from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { IoMdRadioButtonOn } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Footer from "./Footer";
import Image from "next/image";

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
          <Image src="image7.png" alt="herocar"/>
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
          <Image src="image 8.png" alt="herocar1"/>
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

      <div className="w-[1312px] h-[44px] relative left-[64px] top-[580px] gap-[1075px]">
        <p className="w-[132px] h-[44px] gap-[8px] pt-[10px] font-semibold text-[16px]">
          Popular Car
        </p>
        <p className="w-[104px] h-[44px] absolute left-[1208px] top-0 text-[16px] text-justify mt-[10px] text-blue-600">
          <a href="">View All</a>
        </p>
      </div>

      {/* Car Section */}
      {/* Main Div Car Section */}

      <div className="flex w-[1312px] h-[1356px] absolute left-[64px] top-[636px]">
        <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
          <div className="w-[1312px] h-[388px]">
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
              <Image
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
                  <Image
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
                  <Image
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
            <Image
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
                <Image
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
                <Image
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
            <Image
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
                <Image
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
                <Image
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
            <Image
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
                <Image
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
                <Image
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
        <p className="absolute top-[450px] font-semibold text-[16px] text-[#90A3BF]">
        Recomendation Cars
      </p>
      {/* Second Section of Cars */}
      <div className="w-[1312px] h-[388px] gap-[32px] absolute top-[490px]">
      <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
          
            <div
              className="flex flex-col p-6 bg-white rounded-xl max-w-[304px] max-h-[388px]"
              role="article"
              aria-label="Car rental listing for All New Rush"
            >
              <div className="flex gap-5 justify-between font-bold whitespace-nowrap ">
                <div className="flex flex-col">
                  <h2 className="text-xl tracking-tight text-gray-900">
                  All New Rush
                  </h2>
                  <p className="mt-1 text-sm tracking-tight text-slate-400">
                    SUV
                  </p>
                </div>
                <FaRegHeart  />
              </div>
              <Image
                src="New Rush.png"
                className="object-contain self-center mt-16 aspect-[3.20] max-w-[232px]"
                alt="All New Rush car side view"
              />
              <div
                className="flex gap-4 items-start mt-12 text-sm font-medium text-slate-400"
                role="list"
              >
                <div
                  className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap"
                  role="listitem"
                >
                  <Image
                    src="gas-station.png"
                    alt="Fuel capacity icon"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <span className="w-7">70L</span>
                </div>
                <div
                  className="flex gap-1 items-start whitespace-nowrap"
                  role="listitem"
                >
                  <Image
                    src="manual.png"
                    alt="Transmission type icon"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />

                  <span className="w-12">Manual</span>
                </div>
                <div className="flex gap-1.5 items-start" role="listitem">
                  <IoPeople className="w-[24px] h-[24px]" />
                  <span className="w-[60px]">6 People</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 w-full">
                <div className="text-xl font-bold min-h-[44px] text-slate-400">
                  $72.00/
                  <span className="text-sm text-slate-400">day</span>
                  <div className="mt-1 text-sm line-through">$80.00</div>
                </div>
                <button
                  className="gap-2 w-[116px] h-[44px] px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
                  aria-label="Rent All New Rush"
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
                  CR - V
                </h2>
                <div className="mt-1 text-sm tracking-tight text-slate-400">
                  SUV
                </div>
              </div>
              <FaHeart className="text-red-500"/>
            </div>
            <Image
              src="CR-V1.png"
              alt="CR - V"
              className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[248px] h-[90px]"
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
                <Image
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
                <Image
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
                <div className="w-[60px]">6 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 w-full">
              <div className="flex flex-col font-bold text-slate-400">
                <div className="text-xl">
                  $80.00/
                  <span className="text-sm text-slate-400">day</span>
                </div>
                
              </div>
              <button
                className="gap-2 self-stretch mt-2 px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
                aria-label="Rent CR - V"
              >
                Rent Now
              </button>
            </div>
          </div>
          <div
            className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-w-[304px] max-h-[388px] absolute left-[672px]"
            role="article"
            aria-label="Car rental listing for All New Terios"
          >
            <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-tight text-gray-900">
                All New Terios
                </h2>
                <p className="mt-1 text-sm tracking-tight text-slate-400">
                  SUV
                </p>
              </div>
              <FaRegHeart />
            </div>
            <Image
              src="Terios.png"
              className="object-contain self-center mt-16 aspect-[3.23] max-w-[248px] h-[90px]"
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
                <Image
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
                <Image
                  src="manual.png"
                  alt="Transmission type icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />

                <span className="w-12">Manual</span>
              </div>
              <div className="flex gap-1.5 items-start" role="listitem">
                <IoPeople className="w-[24px] h-[24px]" />
                <span className="w-[60px]">6 People</span>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 w-full">
              <div className="text-xl font-bold min-h-[44px] text-slate-400">
                $74.00/
                <span className="text-sm text-slate-400">day</span>
              </div>
              <button
                className="gap-2 self-stretch px-5 relative top-[-10px] text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
                aria-label="All New Terios"
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
                  CR - V
                </h2>
                <div className="mt-1 text-sm tracking-tight text-slate-400">
                  SUV
                </div>
              </div>
              <FaHeart className="text-[#ED3F3F]" />
              
            </div>
            <Image
              src="CR-V.png"
              alt="CR - V car"
              className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[248px] h-[90px]"
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
                <Image
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
                <Image
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
                <div className="w-[60px]">6 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 w-full">
              <div className="flex flex-col font-bold text-slate-400">
                <div className="text-xl">
                  $80.00/
                  <span className="text-sm text-slate-400">day</span>
                </div>
                
              </div>
              <button
                className="gap-2 self-stretch px-5 mt-[10px] text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
                aria-label="Rent CR - V"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Third Section of Cars */}
      <div className="w-[1312px] h-[388px] gap-[32px] absolute top-[920px]">
      <div className="flex flex-wrap gap-8 items-start mt-5 max-md:max-w-full">
          
            <div
              className="flex flex-col p-6 bg-white rounded-xl max-w-[304px] max-h-[388px]"
              role="article"
              aria-label="Car rental listing for MG ZX Exclusice"
            >
              <div className="flex gap-5 justify-between font-bold whitespace-nowrap ">
                <div className="flex flex-col">
                  <h2 className="text-xl tracking-tight text-gray-900">
                  MG ZX Exclusice
                  </h2>
                  <p className="mt-1 text-sm tracking-tight text-slate-400">
                    Hatchback
                  </p>
                </div>
                <FaHeart className="text-red-500" />
              </div>
              <Image
                src="MG ZX.png"
                className="object-contain self-center mt-16 aspect-[3.20] max-w-[265px]"
                alt="MG ZX Exclusice car side view"
              />
              <div
                className="flex gap-4 items-start mt-10 text-sm font-medium text-slate-400"
                role="list"
              >
                <div
                  className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap"
                  role="listitem"
                >
                  <Image
                    src="gas-station.png"
                    alt="Fuel capacity icon"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <span className="w-7">70L</span>
                </div>
                <div
                  className="flex gap-1 items-start whitespace-nowrap"
                  role="listitem"
                >
                  <Image
                    src="manual.png"
                    alt="Transmission type icon"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />

                  <span className="w-12">Manual</span>
                </div>
                <div className="flex gap-1.5 items-start" role="listitem">
                  <IoPeople className="w-[24px] h-[24px]" />
                  <span className="w-[60px]">4 People</span>
                </div>
              </div>
              <div className="flex gap-5 justify-between mt-4 w-full">
                <div className="text-xl font-bold min-h-[44px] text-slate-400">
                  $76.00/
                  <span className="text-sm text-slate-400">day</span>
                  <div className="mt-1 text-sm line-through">$80.00</div>
                </div>
                <button
                  className="gap-2 w-[116px] h-[44px] px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
                  aria-label="Rent All New Rush"
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
                  New MG ZS
                </h2>
                <div className="mt-1 text-sm tracking-tight text-slate-400">
                  SUV
                </div>
              </div>
              <FaHeart className="text-red-500"/>
            </div>
            <Image
              src="New MG ZS.png"
              alt="New MG ZS"
              className="object-contain self-center mt-16 max-w-full aspect-[3.18] h-[90px]"
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
                <Image
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
                <Image
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
                <div className="w-[60px]">6 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-4 w-full">
              <div className="flex flex-col font-bold text-slate-400">
                <div className="text-xl">
                  $80.00/
                  <span className="text-sm text-slate-400">day</span>
                </div>
                
              </div>
              <button
                className="gap-2 self-stretch mt-2 px-5 text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
                aria-label="Rent New MG ZS"
              >
                Rent Now
              </button>
            </div>
          </div>
          <div
            className="flex overflow-hidden flex-col p-6 bg-white rounded-xl max-w-[304px] max-h-[388px] absolute left-[672px]"
            role="article"
            aria-label="Car rental listing for MG ZX Excite"
          >
            <div className="flex gap-5 justify-between font-bold whitespace-nowrap">
              <div className="flex flex-col">
                <h2 className="text-xl tracking-tight text-gray-900">
                MG ZX Excite
                </h2>
                <p className="mt-1 text-sm tracking-tight text-slate-400">
                  Hatchback
                </p>
              </div>
              <FaHeart className="text-red-500"/>
            </div>
            <Image
              src="MG ZX Excite.png"
              className="object-contain self-center mt-16 aspect-[3.23] max-w-[248px] h-[90px]"
              alt="MG ZX Excite car side view"
            />
            <div
              className="flex gap-4 items-start mt-16 text-sm font-medium text-slate-400"
              role="list"
            >
              <div
                className="flex gap-1.5 items-start tracking-tight leading-5 whitespace-nowrap"
                role="listitem"
              >
                <Image
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
                <Image
                  src="manual.png"
                  alt="Transmission type icon"
                  className="object-contain shrink-0 w-6 aspect-square"
                />

                <span className="w-12">Manual</span>
              </div>
              <div className="flex gap-1.5 items-start" role="listitem">
                <IoPeople className="w-[24px] h-[24px]" />
                <span className="w-[60px]">4 People</span>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-6 w-full">
              <div className="text-xl font-bold min-h-[44px] text-slate-400">
                $74.00/
                <span className="text-sm text-slate-400">day</span>
              </div>
              <button
                className="gap-2 self-stretch px-5 relative top-[-10px] text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px]"
                aria-label="MG ZX Excite"
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
                  New MG ZS 
                </h2>
                <div className="mt-1 text-sm tracking-tight text-slate-400">
                  SUV
                </div>
              </div>
              <FaRegHeart  />
              
            </div>
            <Image
              src="New MG ZS1.png"
              alt="New MG ZS car"
              className="object-contain self-center mt-16 max-w-full aspect-[3.18] w-[248px] h-[90px]"
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
                <Image
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
                <Image
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
                <div className="w-[60px]">6 People</div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 w-full">
              <div className="flex flex-col font-bold text-slate-400">
                <div className="text-xl">
                  $80.00/
                  <span className="text-sm text-slate-400">day</span>
                </div>
                
              </div>
              <button
                className="gap-2 self-stretch px-5 mt-[10px] text-base font-semibold tracking-tight text-center text-white bg-blue-600 rounded min-h-[44px] max-w-[116px] absolute left-[164px] top-[320px]"
                aria-label="Rent New MG ZS"
              >
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[734px] h-[44px] absolute left-[580px] top-[1400px] gap-[4.38px]">
        <button className="w-[156px] h-[44px] bg-[#3563E9] pl-[5px] text-white gap-[8px] rounded-[4px] font-semibold text-[16px]">
        Show more car
        </button>
        <p className="font-medium text-[14px] relative left-[670px] top-[-40px] text-[#90A3BF]">120 Car</p>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
