import React from "react";

const TopBrand = () => {
  return (
    <div className="w-[95%] mx-auto py-40">
      <div className="text-center pb-40">
        <h1 className="text-[30px] ">Top Brand</h1>
        <div className="flex justify-center pt-4">
          <hr className="bg-[#F56E07] h-1 w-[60px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5  text-center md:gap-5 gap-16">
        <div>
          <img
            src="https://i.ibb.co/nb84DMG/image-4.png"
            alt=""
            className="object-cover h-auto w-auto"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/dPPTdH9/image-5.png"
            alt=""
            className="object-cover h-auto w-auto"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/7YHLQpy/image-6.png"
            alt=""
            className="object-cover h-auto w-auto"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/7264Lp0/image-7.png"
            alt=""
            className="object-cover h-auto w-auto"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/2PDjs9p/image-8.png"
            alt=""
            className="object-cover h-auto w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBrand;
