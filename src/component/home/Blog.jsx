import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="w-[90%] mx-auto py-28">
      <div className="text-center pb-40">
        <h1 className="text-[30px] ">Our Blog</h1>
        <div className="flex justify-center pt-4">
          <hr className="bg-[#F56E07] h-1 w-[60px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10 gap-16">
        <div>
          <div>
            <div className="text-[16px] font-Inter  rounded-md bg-white mt-[30px] ml-4 absolute text-center z-20 py-2 px-3">
              <p>5</p>
              <p>June</p>
            </div>
            <img src="https://i.ibb.co/W2w0cnZ/Rectangle-1083.png" alt="sofa" />
          </div>

          <div>
            <h3 className="text-[#F56E07] text-[16px] font-ROBOTO py-4 font-medium">
              Dining Chair
            </h3>
            <h1 className="text-[20px]">DOUBLE SOFA- ATHENS</h1>
            <p className="text-[16px] font-ROBOTO pt-5 pb-9 text-[#979797]">
              "Elegant, ergonomic dining chair with premium materials and modern
              design."
            </p>
            <Link to="/">Read more</Link>
            <hr className="bg-black h-1 w-[100px]" />
          </div>
        </div>
        <div>
          <div>
            <div className="text-[16px] font-Inter  rounded-md bg-white mt-[30px] ml-4 absolute text-center z-20 py-2 px-3">
              <p>5</p>
              <p>June</p>
            </div>
            <img src="https://i.ibb.co/XbJ995q/Rectangle-1084.png" alt="sofa" />
          </div>

          <div>
            <h3 className="text-[#F56E07] text-[16px] font-ROBOTO py-4 font-medium">
              Sofa
            </h3>
            <h1 className="text-[20px]">DOUBLE SOFA- ATHENS</h1>
            <p className="text-[16px] font-ROBOTO pt-5 pb-9 text-[#979797]">
              "Elegant, ergonomic dining chair with premium materials and modern
              design."
            </p>
            <Link to="/">Read more</Link>
            <hr className="bg-black h-1 w-[100px]" />
          </div>
        </div>
        <div>
          <div>
            <div className="text-[16px] font-Inter  rounded-md bg-white mt-[30px] ml-4 absolute text-center z-20 py-2 px-3">
              <p>5</p>
              <p>June</p>
            </div>
            <img src="https://i.ibb.co/yq25648/Rectangle-1085.png" alt="sofa" />
          </div>

          <div>
            <h3 className="text-[#F56E07] text-[16px] font-ROBOTO py-4 font-medium">
              Sofa
            </h3>
            <h1 className="text-[20px]">DOUBLE SOFA- ATHENS</h1>
            <p className="text-[16px] font-ROBOTO pt-5 pb-9 text-[#979797]">
              "Elegant, ergonomic dining chair with premium materials and modern
              design."
            </p>
            <Link to="/">Read more</Link>
            <hr className="bg-black h-1 w-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
