import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-[100px]">
      <h1 className="text-black text-center  text-[32px] font-medium leading-[42px] tracking-[0.32px] uppercase mb-6">
        About us
      </h1>
      <p className="text-black text-center mx-auto text-[15px] font-normal leading-[150%] tracking-[0.3px] w-[60%] mb-[60px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="flex">
        <div>
          <img
            src="/RectangleWmen.png"
            alt="women"
            className="w-[488px] h-[465px]"
          />
        </div>
        <div className="h-[324px] w-[156px] bg-[#EA4715]"></div>
      </div>
    </div>
  );
};

export default About;
