import React from "react";
import { LiaFacebookSquare } from "react-icons/lia";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="bg-[#E9F4EE]">
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-20 pb-10">
          {/* Logo and Social Media Section */}
          <div>
            <p className="text-[38px] font-BEBAS">TIMBER TROVE</p>
            <div>
              <p className="font-ROBOTO text-[18px] pt-9">Social Media</p>
              <div className="flex space-x-5 text-[30px] pt-5">
                <LiaFacebookSquare className="text-[35px] cursor-pointer" />
                <SlSocialTwitter className="cursor-pointer" />
                <PiInstagramLogo className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Shop Section */}
          <div className="font-ROBOTO">
            <h1 className="text-[17px] font-medium">SHOP</h1>
            <ul className="cursor-pointer text-[15px]">
              <li className="pt-7">Products</li>
              <li className="pt-3">Overview</li>
              <li className="pt-3">Pricing</li>
              <li className="pt-3">Releases</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="font-ROBOTO">
            <h1 className="text-[17px] font-medium">COMPANY</h1>
            <ul className="cursor-pointer text-[15px]">
              <li className="pt-7">About Us</li>
              <li className="pt-3">Contact</li>
              <li className="pt-3">News</li>
              <li className="pt-3">Support</li>
            </ul>
          </div>

          {/* Stay Up to Date Section */}
          <div className="font-ROBOTO">
            <h1 className="text-[17px] font-medium">STAY UP TO DATE</h1>
            <div className="flex  pt-7">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-2 border bg-[#E9F4EE] border-black rounded-l-md w-full"
                style={{ "::placeholder": { color: "black" } }}
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-10 w-[90%] mx-auto flex">
        <hr className="bg-black w-[80%] h-[3px] my-5" />
        <div className="ml-5 space-x-5 mt-3 text-[15px] font-Poppins">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
