import React from "react";

const FeedBack = () => {
  return (
    <div className="w-[90%] mx-auto py-20">
      <div className="text-center pb-40">
        <h1 className="text-[30px] ">Feedback Corner</h1>
        <div className="flex justify-center pt-4">
          <hr className="bg-[#F56E07] h-1 w-[60px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10 gap-16 ">
        <div className="bg-white rounded-md shadow-lg p-3 hover:bg-[#E9F4EE] hover:shadow-none">
          <img
            src="https://i.ibb.co/dmMwLNH/image.png"
            alt=""
            className="pb-5"
          />
          <h1 className="text-[20px] font-bold font-ROBOTO py-10">
            Emily Wilson
          </h1>
          <p className="text-[16px] font-semibold font-Poppins text-[#6F6F6F] pb-5">
            The customer experience was exceptional from start to finish. The
            website is user-friendly, the checkout process was smooth, and the
            clothes I ordered fit perfectly. I'm beyond satisfied!
          </p>
        </div>
        <div className="bg-white rounded-md shadow-lg p-3 hover:bg-[#E9F4EE] hover:shadow-none">
          <img
            src="https://i.ibb.co/dmMwLNH/image.png"
            alt=""
            className="pb-5"
          />
          <h1 className="text-[20px] font-bold font-ROBOTO py-10">
            Emily Wilson
          </h1>
          <p className="text-[16px] font-semibold font-Poppins text-[#6F6F6F] pb-5">
            The customer experience was exceptional from start to finish. The
            website is user-friendly, the checkout process was smooth, and the
            clothes I ordered fit perfectly. I'm beyond satisfied!
          </p>
        </div>
        <div className="bg-white rounded-md shadow-lg p-3 hover:bg-[#E9F4EE] hover:shadow-none">
          <img
            src="https://i.ibb.co/dmMwLNH/image.png"
            alt=""
            className="pb-5"
          />
          <h1 className="text-[20px] font-bold font-ROBOTO py-10">
            Emily Wilson
          </h1>
          <p className="text-[16px] font-semibold font-Poppins text-[#6F6F6F] pb-5">
            The customer experience was exceptional from start to finish. The
            website is user-friendly, the checkout process was smooth, and the
            clothes I ordered fit perfectly. I'm beyond satisfied!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
