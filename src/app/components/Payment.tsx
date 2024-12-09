import React from "react";
import Image from "next/image";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const Payment = () => {
  return (
    <div className="flex w-[1440px] h-[1239px] bg-gray-50 gap-[32px]">
      {/* Form Container */}
      <div className="min-h-screen max-h-[2176px] max-w-[952px] py-10 px-6 relative top-[32px] left-[32px] gap-[32px]">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* Billing Info */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Billing Info</h2>
              <p className="text-sm text-gray-500">Step 1 of 4</p>
            </div>
            <p className="text-gray-400 mt-2">Please enter your billing info</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone number"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="city"
                >
                  Town / City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Town or city"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Rental Info</h2>
              <p className="text-sm text-gray-500">Step 2 of 4</p>
            </div>
            <p className="text-gray-400 mt-2">Please select your rental date</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="pickup-location"
                >
                  Locations
                </label>
                <select
                  id="pickup-location"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="pickup-date"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium"
                  htmlFor="pickup-time"
                >
                  Time
                </label>
                <select
                  id="pickup-time"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select your time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-10">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Payment Method</h2>
              <p className="text-sm text-gray-500">Step 3 of 4</p>
            </div>
            <p className="text-gray-400 mt-2">
              Please enter your payment method
            </p>

            <div className="mt-6">
              <div>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Credit Card</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="DD / MM / YY"
                      className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">PayPal</span>
                </label>
              </div>
              <div className="mt-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-gray-700">Bitcoin</span>
                </label>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Confirmation</h2>
              <p className="text-sm text-gray-500">Step 4 of 4</p>
            </div>
            <p className="text-gray-400 mt-2">
              We are getting to the end. Just a few clicks and your rental is
              ready!
            </p>

            <div className="mt-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </span>
              </label>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2 text-gray-700">
                  I agree with our terms and conditions and privacy policy.
                </span>
              </label>
            </div>
            <button className="mt-6 bg-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:bg-blue-600">
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Section Summary */}
      <div
        className="overflow-hidden flex-col p-6 bg-white rounded-xl absolute left-[900px] top-[190px] max-h-[560px] max-w-[492px] max-md:px-5"
        role="region"
        aria-label="Rental Summary Section"
      >
        <div className="flex flex-col max-md:max-w-full">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            Rental Summary
          </h2>
          <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
        </div>
        <div className="flex gap-4 self-start mt-8">
          <img
            loading="lazy"
            src="image 8.png"
            alt="Nissan GT-R vehicle"
            className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
          />
          <div className="flex overflow-hidden flex-col my-auto">
            <h3 className="text-3xl font-bold tracking-tighter text-gray-900">
              Nissan GT - R
            </h3>
            <div className="flex overflow-hidden gap-2 items-center mt-2 min-h-[24px]">
              <div
                className="flex overflow-hidden gap-0.5 items-center self-stretch my-auto"
                role="group"
                aria-label="Rating stars"
              >
                <FaStar className="text-[#FBAD39]"/>
                <FaStar className="text-[#FBAD39] "/>
                <FaStar className="text-[#FBAD39] "/>
                <FaStar className="text-[#FBAD39] "/>
                <CiStar />
              </div>
              <div className="self-stretch my-auto text-sm font-medium tracking-tight text-slate-500 w-[104px]">
                440+ Reviewer
              </div>
            </div>
          </div>
        </div>
        <hr
          className="shrink-0 mt-8 h-px border border-solid border-slate-300 border-opacity-40 max-md:max-w-full"
          aria-hidden="true"
        />
        <div className="flex gap-10 items-start mt-8 text-base tracking-tight whitespace-nowrap max-md:max-w-full">
          <div className="font-medium text-slate-400 w-[116px]">Subtotal</div>
          <div className="font-semibold text-right text-gray-900 w-[116px]">
            $80.00
          </div>
        </div>
        <div className="flex gap-10 items-start mt-6 text-base tracking-tight whitespace-nowrap max-md:max-w-full">
          <div className="font-medium text-slate-400 w-[116px]">Tax</div>
          <div className="font-semibold text-right text-gray-900 w-[116px]">
            $0
          </div>
        </div>
        <form className="flex gap-5 justify-between px-8 py-5 mt-8 rounded-xl bg-neutral-100 max-md:px-5 max-md:max-w-full">
          <label htmlFor="promoCode" className="sr-only">
            Enter promo code
          </label>
          <input
            type="text"
            id="promoCode"
            className="text-sm font-medium tracking-tight text-slate-400 bg-transparent border-none outline-none"
            placeholder="Enter promo code"
          />
          <button
            type="submit"
            className="text-base font-semibold tracking-tight text-right text-gray-900"
          >
            Apply now
          </button>
        </form>
        <div className="flex gap-8 items-start mt-8">
          <div className="flex flex-col min-w-[240px] w-[284px]">
            <h4 className="text-xl font-bold tracking-tight text-gray-900">
              Total Rental Price
            </h4>
            <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
              Overall price and includes rental discount
            </p>
          </div>
          <div
            className="w-32 text-3xl font-bold text-right text-gray-900"
            aria-label="Total price"
          >
            $80.00
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className='flex w-[1440px] h-[480px] absolute top-[1340px]'>
        <div className='w-[292px] h-[108px] absolute top-[80px] left-[60px] gap-[16px] space-y-[16px]'>
        <div>
            <h1 className="w-[148px] h-[44px] text-[#3563E9] text-[32px] leading-[48px] font-[700px]">MORENT</h1>
        </div>
        <div className='w-[292px] h-[48px] absolute top-[60px] text-[16px] text-[rgba(19, 19, 19, 0.6)]'>Our vision is to provide convenience and help increase your sales business.</div>
        </div>
        <div className='w-[152px] h-[244px] absolute left-[804px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='font-semibold text-[20px]'>About</h2>
            </div>
            <div className='w-[152px] h-[188px]'>
            <ul className='space-y-[24px]'>
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relations</li>
            </ul>
            </div>

        </div>
        <div className='w-[152px] h-[244px] absolute left-[1016px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='text-[20px] font-semibold'>Community</h2>
            </div>
            <ul className='space-y-[24px]'>
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a Friend</li>
            </ul>

        </div>
        <div className='w-[152px] h-[244px] absolute left-[1228px] top-[80px] space-y-[24px]'>
            <div className='w-[152px] h-[32px]'>
            <h2 className='text-[20px] font-semibold'>Socials</h2>
            </div>
            <ul className='space-y-[24px]'>
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>

        </div>
        <hr className='w-[1320px] absolute top-[360px] left-[50px] stroke-[#131313]'/>
        <div className='w-[292px] h-[24px] absolute left-[60px] top-[396px] text-[16px] font-semibold'>©2022 MORENT. All rights reserved</div>
        <div className='w-[144px] h-[24px] absolute left-[1032px] top-[396px] font-semibold text-[16px]'>Privacy & Policy</div>
        <div className='w-[144px] h-[24px] absolute left-[1236px] top-[396px] font-semibold text-[16px]'>Terms & Condition</div>
    </div> 
    </div>
    
  );
};
export default Payment;
