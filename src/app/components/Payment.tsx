import React from 'react';
import Image from 'next/image';


const Payment = () => {
  return (
    
    <div className='w-[1440px] h-[1240px] bg-gray-50 gap-[32px]'>
      
      {/* Form Container */}
      <div className="min-h-screen max-h-[2176px] max-w-[852px] py-10 px-6 relative top-[24px] gap-[32px]">
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
                <label className="block text-gray-700 font-medium" htmlFor="name">
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
                <label className="block text-gray-700 font-medium" htmlFor="phone">
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
                <label className="block text-gray-700 font-medium" htmlFor="address">
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
                <label className="block text-gray-700 font-medium" htmlFor="city">
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
                <label className="block text-gray-700 font-medium" htmlFor="pickup-location">
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
                <label className="block text-gray-700 font-medium" htmlFor="pickup-date">
                  Date
                </label>
                <input
                  type="date"
                  id="pickup-date"
                  className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium" htmlFor="pickup-time">
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
            <p className="text-gray-400 mt-2">Please enter your payment method</p>

            <div className="mt-6">
              <div>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="form-radio text-blue-500" />
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
                  <input type="radio" name="payment" className="form-radio text-blue-500" />
                  <span className="ml-2 text-gray-700">PayPal</span>
                </label>
              </div>
              <div className="mt-6">
                <label className="flex items-center">
                  <input type="radio" name="payment" className="form-radio text-blue-500" />
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
              We are getting to the end. Just a few clicks and your rental is ready!
            </p>

            <div className="mt-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" />
                <span className="ml-2 text-gray-700">
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </span>
              </label>
              <label className="flex items-center mt-4">
                <input type="checkbox" className="form-checkbox text-blue-500" />
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
      </div>
    );
}

      
    

export default Payment
