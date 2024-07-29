import React from "react";

const ProductZone = () => {
  return (
    <div>
      <div className="w-[75%] mx-auto flex justify-center items-center mt-[-100px] pb-24 space-x-9">
        <div className="bg-white rounded-md shadow-lg text-center px-20 py-14">
          <img
            className="object-cover h-auto w-auto mt-[-70%]"
            src="https://i.ibb.co/8c7tgzX/png-transparent-ball-chair-office-desk-chairs-couch-wing-chair-modern-eggs-thumbnail-removebg-previe.png"
            alt=""
          />
          <h3 className="text-[20px] pt-5">Comfy Chair</h3>
          <div className="flex justify-center  pt-[95px]">
            <p className="text-[14px] text-[#FE9341]">$30.50</p>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-lg text-center px-24 py-14">
          <img
            className="object-cover h-auto w-auto mt-[-70%]"
            src="https://i.ibb.co/ZGQ36Zy/fashion-thumbnail-removebg-preview-1-1.png"
            alt=""
          />
          <h3 className="text-[20px] pt-[95px]">Comfy Chair</h3>
          <div className="flex justify-center pt-5">
            <del className="text-[14px] text-[#BFBFBF] mr-2">$17.50</del>
            <p className="text-[14px] text-[#FE9341]">$30.50</p>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-lg text-center px-20 py-14">
          <img
            className="object-cover h-auto w-auto mt-[-70%]"
            src="https://i.ibb.co/R35mVgF/kisspng-eames-lounge-chair-vitra-fur297231342674-removebg-preview-1.png"
            alt=""
          />
          <h3 className="text-[20px] pt-5">Vibe Living Chair</h3>
          <div className="flex justify-center pt-5">
            <del className="text-[14px] text-[#BFBFBF] mr-2">$17.50</del>
            <p className="text-[14px] text-[#FE9341]">$30.50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductZone;
