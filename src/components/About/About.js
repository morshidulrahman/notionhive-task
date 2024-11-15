import React from "react";
import CarouselComponent from "./CarouselComponent";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-[100px]">
      <h1 className="text-black text-center  text-[32px] font-medium leading-[42px] tracking-[0.32px] uppercase mb-6">
        About us
      </h1>
      <p className="text-black text-center mx-auto text-[15px] font-normal leading-[150%] tracking-[0.3px] md:w-[60%] mb-[60px] w-[80%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <CarouselComponent />
    </div>
  );
};

export default About;
