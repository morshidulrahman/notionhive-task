import React from "react";

import { FiPhone } from "react-icons/fi";
const HeaderTop = () => {
  return (
    <div className="border-b border-b-black/20">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-[15px]  flex items-center gap-3">
          <span className="block">
            <FiPhone className="w-4 h-4" />
          </span>
          <p className="font-[500]">Call us: 783 367 2678</p>
        </div>
        <div className="flex  text-center font-normal text-[13px] leading-normal tracking-[0.26px] items-center">
          <p className="px-6 border-r border-black/20 border-l border-l-black/20 py-4">
            Help centre
          </p>
          <p className="px-6 border-r border-black/20 py-4">Free brochure</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
