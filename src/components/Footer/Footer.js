import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black flex justify-center items-center py-20 flex-col">
        <h1 className="text-white text-center font-display text-2xl font-medium leading-[42px] tracking-[0.32px] uppercase mb-6">
          Let’s Contact
        </h1>
        <p className="text-white text-center font-display text-[15px] font-normal leading-[22.5px] tracking-[0.3px] mb-10 md:w-1/2 w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button className="inline-flex p-[16px_24px] items-start gap-[10px] rounded-[5px] bg-[#EA4715] text-white">
          Contact Us
        </button>
      </div>
      <div className="bg-white py-2">
        <p className="text-[#2B2B2B] text-center font-display text-[15px] font-normal leading-[22.5px] tracking-[0.3px]">
          Copyright @2022 | Notionhive
        </p>
      </div>
    </div>
  );
};

export default Footer;
