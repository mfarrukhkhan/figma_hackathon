import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const dashboard = () => {
  return (
    <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5" role="main">
  <div className="flex gap-5 max-md:flex-col">
    <nav className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full" role="navigation" aria-label="Main Navigation">
      <div className="flex overflow-hidden flex-col px-4 pt-20 pb-12 mx-auto w-full text-justify bg-white border-r border-solid border-r-gray-100 max-md:mt-8">
        <div className="flex shrink-0 h-14 bg-blue-600 rounded-xl" aria-hidden="true"></div>
        <div className="flex z-10 flex-col self-center mt-0">
          <div className="flex flex-col self-start">
            <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
              MAIN MENU
            </div>
            <div className="flex flex-col items-start mt-11 text-base font-medium tracking-tight leading-6 text-slate-400 max-md:mt-10">
              <button className="flex gap-3 items-center self-stretch text-white whitespace-nowrap" tabindex="0">
                <img src=""alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-24">Dashboard</span>
              </button>
              <button className="flex gap-3 items-center mt-8" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/acaff06118398a85b1fe0c890cc9040c40b14fe8bd393d6d5218122ab4e6ff08?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-20">Car Rent</span>
              </button>
              <button className="flex gap-3 items-center mt-8 whitespace-nowrap" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1f163573fc3bf7624b5342b5447c078001b462aa134f5ec88512c1099a7827?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-14">Insight</span>
              </button>
              <button className="flex gap-3 items-center self-stretch mt-8 whitespace-nowrap" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/69aac79c1902ee5f27ecaa6d923bba4f8189cc56400a2850b65da4bd1e075761?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-[92px]">Reimburse</span>
              </button>
              <button className="flex gap-3 items-center mt-8 whitespace-nowrap" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd9ab3f7100da400834934a4e5d8446c60203a3a62249dd6ae7bda152e84d238?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-12">Inbox</span>
              </button>
              <button className="flex gap-3 items-center mt-8 whitespace-nowrap" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c791fb9bc1ca0e2c23364359ebc1df12dabe0e5b6942c386828b1a1d3815e227?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-20">Calendar</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-16 max-md:mt-10">
            <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
              PREFERENCES
            </div>
            <div className="flex flex-col items-start mt-7 text-base font-medium tracking-tight leading-6 text-slate-400">
              <button className="flex gap-3 items-center whitespace-nowrap" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/da54dd4f5b900962e59291b9d1a3b01f3a72b3fab36018e88e7186d95634574a?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-[72px]">Settings</span>
              </button>
              <button className="flex gap-3 items-center mt-8" tabindex="0">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79ec339f04cf44b7c450998d891e0ad53e55b6443c6528f46571511c693e3b00?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                <span className="self-stretch my-auto w-[116px]">Help & Center</span>
              </button>
              <div className="flex gap-6 items-center self-stretch mt-8">
                <button className="flex gap-3 items-center self-stretch my-auto" tabindex="0">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3616307c4a35aa98437f801eb4a0cd14c806f826d675eadebbca74d943fc6477?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
                  <span className="self-stretch my-auto w-[92px]">Dark Mode</span>
                </button>
                <button className="flex items-center" tabindex="0" aria-label="Toggle Dark Mode">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/12038560cf29b4da36bdfbdc445a33cf2c09045a05a63488ac92574a97386ff6?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2] w-[68px]" aria-hidden="true"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <button className="flex gap-3 items-center self-start ml-4 text-base font-medium tracking-tight leading-6 mt-[744px] text-slate-400 max-md:mt-10 max-md:ml-2.5" tabindex="0">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f01d1fd6cc1dc0c9b7ae6af9e9dc3a8d5a6474bff4255c450d5b7c62f3c5137?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" aria-hidden="true"/>
          <span className="self-stretch my-auto w-[68px]">Log Out</span>
        </button>
      </div>
    </nav>
    <section className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full" aria-labelledby="rental-details-title">
      <div className="flex overflow-hidden flex-col self-stretch px-6 py-7 m-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 id="rental-details-title" className="self-start text-xl font-bold tracking-tight text-gray-900">
          Details Rental
        </h1>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6648ed990ee4f4176e912cfa14aa9e9d885e834258ecd73da4a303478b6f6bad?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Car rental details" className="object-contain mt-7 w-full rounded-xl aspect-[1.79] max-md:max-w-full"/>
        <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-md:max-w-full">
          <div className="flex gap-4">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/862082cbf7ee8f55a1ae1e8af11dc1a1bc23907d52770d8d9687eb3c53d8d670?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Nissan GT-R thumbnail" className="object-contain shrink-0 max-w-full aspect-[1.83] w-[132px]"/>
            <div className="flex flex-col my-auto">
              <h2 className="text-2xl font-bold tracking-tighter text-gray-900">
                Nissan GT - R
              </h2>
              <div className="mt-2 text-sm font-medium tracking-tight text-slate-600">
                Sport Car
              </div>
            </div>
          </div>
          <div className="self-start mt-4 text-sm font-medium tracking-tight text-right text-slate-600">
            #9761
          </div>
        </div>
        <div className="flex gap-2 items-center self-start mt-8">
          <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-600 bg-opacity-30 rounded-[70px]">
            <div className="flex self-stretch my-auto w-2 h-2 bg-blue-600 rounded-full fill-blue-600 min-h-[8px]"></div>
          </div>
          <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900 w-[68px]">
            Pick - Up
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-5">
          <div className="flex flex-col">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Locations
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-[104px]">Kota Semarang</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
          <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" aria-hidden="true"></div>
          <div className="flex flex-col">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Date
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-28">20 July 2022</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
          <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" aria-hidden="true"></div>
          <div className="flex flex-col whitespace-nowrap">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Time
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-[108px]">07.00</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center self-start mt-8">
          <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px]">
            <div className="flex self-stretch my-auto w-2 h-2 bg-blue-400 rounded-full fill-blue-400 min-h-[8px]"></div>
          </div>
          <div className="self-stretch my-auto w-20 text-base font-semibold tracking-tight text-gray-900">
            Drop - Off
          </div>
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-5">
          <div className="flex flex-col">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Locations
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-[104px]">Kota Semarang</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
          <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" aria-hidden="true"></div>
          <div className="flex flex-col">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Date
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-28">21 July 2022</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
          <div className="shrink-0 w-0 h-12 border border-solid border-slate-300 border-opacity-40" aria-hidden="true"></div>
          <div className="flex flex-col whitespace-nowrap">
            <h3 className="text-base font-bold tracking-tight text-gray-900">
              Time
            </h3>
            <div className="flex gap-2 items-center mt-2 text-xs font-medium tracking-tight text-slate-400">
              <div className="self-stretch my-auto w-[108px]">01.00</div>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90686fa66594254091a26e4dc1b6e35c9ed1ad3540c46d9e958e4e1d6ea8621?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square" aria-hidden="true"/>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-10 h-px border border-solid border-slate-300 border-opacity-40 max-md:max-w-full" aria-hidden="true"></div>
        <div className="flex flex-wrap gap-10 items-start mt-9 max-md:max-w-full">
          <div className="flex flex-col min-w-[240px] w-[284px]">
            <h3 className="text-xl font-bold tracking-tight text-gray-900">
              Total Rental Price
            </h3>
            <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
              Overall price and includes rental discount
            </div>
          </div>
          <div className="w-32 text-3xl font-bold text-right text-gray-900" aria-label="Total price">
            $80.00
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full" aria-labelledby="rental-stats-title">
      <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-10 items-start text-xl font-bold tracking-tight text-gray-900 max-md:max-w-full">
            <h2 id="rental-stats-title">Top 5 Car Rental</h2>
            <button aria-label="More options" tabindex="0">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b45a559e22eab88a7ef41214fd110ccca8bdb141a203ffc348c913235ab7d636?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="" className="object-contain shrink-0 w-6 aspect-square" aria-hidden="true"/>
            </button>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col justify-center items-center px-11 py-20 text-center rounded-md aspect-square max-md:px-5 max-md:mt-6">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9ba1c69c975d8f978cfe9c002309164391c56ddf4b7ca16bfafb290cda8c68?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Rental statistics chart" className="object-cover absolute inset-0 size-full"/>
                  <div className="flex relative flex-col items-start max-w-full w-[100px]">
                    <div className="text-2xl font-bold tracking-tighter text-gray-900">
                      72,030
                    </div>
                    <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                      Rental Car
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full text-sm font-semibold tracking-tight max-md:mt-6">
                  <div className="flex gap-9 items-center">
                    <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
                      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-sky-950 rounded-[70px]"></div>
                      <div className="self-stretch my-auto w-[100px]">Sport Car</div>
                    </div>
                    <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">17,439</div>
                  </div>
                  <div className="flex gap-9 items-center mt-6 whitespace-nowrap">
                    <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
                      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-sky-700 rounded-[70px]"></div>
                      <div className="self-stretch my-auto w-[100px]">SUV</div>
                    </div>
                    <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">9,478</div>
                  </div>
                  <div className="flex gap-9 items-center mt-6 whitespace-nowrap">
                    <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
                      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-blue-500 rounded-[70px]"></div>
                      <div className="self-stretch my-auto w-[100px]">Coupe</div>
                    </div>
                    <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">18,197</div>
                  </div>
                  <div className="flex gap-9 items-center mt-6 whitespace-nowrap">
                    <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
                      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-blue-400 rounded-[70px]"></div>
                      <div className="self-stretch my-auto w-[100px]">Hatchback</div>
                    </div>
                    <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">12,510</div>
                  </div>
                  <div className="flex gap-9 items-center mt-6 whitespace-nowrap">
                    <div className="flex gap-3 items-center self-stretch my-auto text-justify text-slate-400">
                      <div className="flex shrink-0 self-stretch my-auto w-3 h-3 bg-blue-300 rounded-[70px]"></div>
                      <div className="self-stretch my-auto w-[100px]">MPV</div>
                    </div>
                    <div className="self-stretch my-auto leading-5 text-right text-gray-900 w-[72px]">14,406</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
          <div className="flex gap-10 items-start max-md:max-w-full">
            <h2 className="w-48 text-xl font-bold tracking-tight text-gray-900">Recent Transaction</h2>
            <button className="text-xs font-medium leading-6 text-right text-blue-600 w-[68px]" tabindex="0">View All</button>
          </div>
          <div className="flex flex-col mt-8 w-full max-md:max-w-full">
            <div className="flex gap-5 justify-between w-full rounded-none max-w-[476px] max-md:max-w-full">
              <div className="flex gap-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/25cf6d98934b84ad2d689d800c6bcd378175ecbfa4db0d964c26ee896c89a3c5?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Nissan GT-R rental" className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"/>
                <div className="flex flex-col my-auto">
                  <div className="text-base font-bold tracking-tight text-gray-900">Nissan GT - R</div>
                  <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">Sport Car</div>
                </div>
              </div>
              <div className="flex flex-col my-auto text-right">
                <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">20 July</div>
                <div className="mt-2 text-base font-bold tracking-tight text-gray-900">$80.00</div>
              </div>
            </div>
            <div className="mt-4 max-w-full border border-solid border-slate-300 border-opacity-40 min-h-[1px] w-[476px]" aria-hidden="true"></div>
            <div className="flex gap-5 justify-between mt-4 w-full rounded-none max-w-[476px] max-md:max-w-full">
              <div className="flex gap-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c3b376df6694c2c829c289077a3dbdaab6023e590438876d2b8bfa6f8a1b8cc?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Koegnigsegg rental" className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"/>
                <div className="flex flex-col my-auto">
                  <div className="text-base font-bold tracking-tight text-gray-900">Koegnigsegg</div>
                  <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">Sport Car</div>
                </div>
              </div>
              <div className="flex flex-col my-auto text-right">
                <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">19 July</div>
                <div className="mt-2 text-base font-bold tracking-tight text-gray-900">$99.00</div>
              </div>
            </div>
            <div className="mt-4 max-w-full border border-solid border-slate-300 border-opacity-40 min-h-[1px] w-[476px]" aria-hidden="true"></div>
            <div className="flex gap-5 justify-between mt-4 w-full rounded-none max-w-[476px] max-md:max-w-full">
              <div className="flex gap-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ade7c6f93815f73f2c043dde271061d2017bc3eedca012b46e7d070eb10f7c7?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="Rolls-Royce rental" className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"/>
                <div className="flex flex-col my-auto">
                  <div className="text-base font-bold tracking-tight text-gray-900">Rolls - Royce</div>
                  <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">Sport Car</div>
                </div>
              </div>
              <div className="flex flex-col my-auto text-right">
                <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">18 July</div>
                <div className="mt-2 text-base font-bold tracking-tight text-gray-900">$96.00</div>
              </div>
            </div>
            <div className="mt-4 max-w-full border border-solid border-slate-300 border-opacity-40 min-h-[1px] w-[476px]" aria-hidden="true"></div>
            <div className="flex gap-5 justify-between mt-4 w-full rounded-none max-w-[476px] max-md:max-w-full">
              <div className="flex gap-4">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a635d62e6119690ce2ba31b8d955607afeb5c55285797331371d8cfc5002790?placeholderIfAbsent=true&apiKey=cc91ea34bffa4ebe9ba0506a8d4ad69f" alt="CR-V rental" className="object-contain shrink-0 max-w-full rounded-lg aspect-[1.89] w-[132px]"/>
                <div className="flex flex-col my-auto">
                  <div className="text-base font-bold tracking-tight text-gray-900">CR - V</div>
                  <div className="gap-2 self-stretch mt-2 max-w-full text-xs font-medium tracking-tight whitespace-nowrap text-slate-400 w-[108px]">SUV</div>
                </div>
              </div>
              <div className="flex flex-col my-auto text-right">
                <div className="gap-2 self-stretch max-w-full text-xs font-medium tracking-tight text-slate-400 w-[108px]">17 July</div>
                <div className="mt-2 text-base font-bold tracking-tight text-gray-900">$80.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
  )
}

export default dashboard


