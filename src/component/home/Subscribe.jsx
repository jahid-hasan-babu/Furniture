import React from "react";
import { TfiEmail } from "react-icons/tfi";

const Subscribe = () => {
  return (
    <div className="bg-[#E9F4EE]">
      <div className="flex items-center justify-between">
        <div className="font-Poppins w-[50%] bg-[#F0F8F6] py-[128px] p-24">
          <div className="flex">
            <TfiEmail className="text-[20px] mt-3" />
            <h1 className="text-[12px] font-medium ml-3">
              Subscribe to get $30 off* <br />
              your first order
            </h1>
          </div>
          <div className="flex pt-7">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-3 border  border-black rounded-l-md w-full bg-[#E9F4EE]"
              style={{ "::placeholder": { color: "black" } }}
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
        <div className="w-[50%] items-end">
          <img src="https://i.ibb.co/FX04ptX/Rectangle-1079.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
