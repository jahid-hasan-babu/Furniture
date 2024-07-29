import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#E9F4EE] ">
      <div className="flex items-start justify-start lg:w-[80%] mx-auto">
        <div className="ml-[100px] absolute mt-7">
          <hr className="h-[50px] w-[1px] bg-black ml-[12px] mb-5" />
          <p
            style={{
              writingMode: "vertical-rl",
            }}
            className="tracking-[5px]"
          >
            2024 EDITION
          </p>
        </div>
        <div className="absolute  md:ml-[300px]  lg:ml-[340px] mt-[30px] z-30">
          <h1 className="text-[#FFC39A] text-[192px]  ">New</h1>
        </div>
        <div className="flex justify-start items-start ml-14 space-x-[-150px]">
          <img
            src="https://i.ibb.co/DQM9V3x/360-F-312917850-Xh-Tv-KWGT5-D25q-Jv8t-HMVSn-Vwlx-N5-Hb-Me-removebg-preview-1.png"
            alt="tree"
            className="md:ml-0 lg:ml-[20px] mt-[-80px]"
          />
          <img
            src="https://i.ibb.co/KNRXf65/image-2.png"
            alt="chair"
            className="w-auto h-auto md:mt-11 xl:mt-0 z-20"
          />
        </div>
        <div className="flex items-center ml-[-600px] mt-[370px]">
          <div className="flex">
            <hr className="h-[60px] w-[3px] bg-black mr-5" />
            <p className="text-[14px] pt-2">
              TimberTrove <br /> Furniture
            </p>
          </div>
          <div>
            <h1 className="text-[#FF6F00] text-[131px] ml-[150px] mt-[-150px] z-10">
              arrivals
            </h1>
            <h1
              className="mt-[-430px] ml-[500px] text-white text-[55px] tracking-[20px]"
              style={{
                writingMode: "vertical-rl",
              }}
            >
              2024
            </h1>
          </div>
        </div>
        <div className="mt-[400px] ml-[150px]">
          <hr className="h-[50px] w-[1px] bg-black ml-[12px] mb-5" />
          <p
            style={{
              writingMode: "vertical-rl",
            }}
            className="tracking-[5px]"
          >
            2024 EDITION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
