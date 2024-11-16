import React from "react";
import { FaPlus } from "react-icons/fa";

const CommercialBox = ({ text }) => {
  return (
    <div className="group comercial">
      <div className="relative">
        <div className="py-20 group-hover:opacity-0 opacity-100 transition-all duration-300  ">
          <h3 className="text-white text-[16px] font-normal leading-[26px] uppercase mb-10 text-center md:text-start">
            Projects We have done
          </h3>
          <div className="w-[280px] h-[350px] bg-[url(/commer1.jpg)] relative comercial-imgbox mx-auto md:mx-0">
            <p className="text-white text-center text-[32px] font-normal leading-[42px] tracking-[0.32px] absolute bottom-10 -left-10">
              {text}
            </p>
          </div>
        </div>
        <div className="w-[416px] h-full group-hover:opacity-100 opacity-0  transition-all duration-300 absolute top-0 left-1/2  bg-[#393939] -translate-x-1/2 ">
          <div className="bg-[url(/commer1.jpg)] bg-lightgray bg-center bg-cover bg-no-repeat bg-[#D9D9D9] w-full h-[300px] flex-shrink-0 relative ">
            <div className="bg-[#EA4715] w-16 h-16 rounded-full flex justify-center items-center absolute right-4 bottom-4 transition-transform duration-300 group-hover:scale-110">
              <FaPlus className="text-white h-5 w-5" />
            </div>
          </div>
          <div className="bg-[#393939] transition-all duration-300">
            <div className="px-6">
              <h1 className="text-white text-[24px] font-normal leading-[34px] tracking-[0.24px] pt-8">
                Commercial
              </h1>
              <p className="text-white text-[15px] font-normal leading-[22.5px] tracking-[0.3px] mb-7 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
            <div className="border-t border-t-[#494949]">
              <p className="text-white text-[15px] font-normal leading-[22.5px] tracking-[0.3px] pt-4 px-6 pb-12">
                928 367 3789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialBox;
