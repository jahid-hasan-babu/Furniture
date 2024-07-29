import React from "react";

const ChairZone = () => {
  return (
    <div className="w-[90%] mx-auto pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3  text-center md:gap-5 gap-16">
        <div>
          <div>
            <img
              src="https://i.ibb.co/vwVv7YN/interior-design-with-photoframes-white-couch-1.png"
              alt="chair"
            />
          </div>
          <div className="mt-[-130px] text-start ml-7">
            <h3 className="text-[#4D4B4F] text-[16px] font-ROBOTO font-medium">
              Hot Product
            </h3>
            <h1 className="text-[24px] py-3 text-black">Lounge Chair</h1>
            <p className="text-[#4D4B4F] text-[16px] font-ROBOTO">Shop now</p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.ibb.co/wNTC2CY/png-transparent-white-wooden-armchair-table-chair-furniture-throne-bench-chair-wholesale-couch-wing.png"
              alt="chair"
            />
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://i.ibb.co/dtB9D4N/home-indoor-design-concept-1.png"
              alt="chair"
            />
          </div>
          <div className="mt-[-130px] text-start ml-7">
            <h3 className="text-[#4D4B4F] text-[16px] font-ROBOTO font-medium">
              Hot Product
            </h3>
            <h1 className="text-[24px] py-3 text-black">Lounge Chair</h1>
            <p className="text-[#4D4B4F] text-[16px] font-ROBOTO">Shop now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairZone;
