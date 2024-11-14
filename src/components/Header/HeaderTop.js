import React from "react";

import { FiPhone } from "react-icons/fi";
const HeaderTop = ({ megamenu }) => {
  return (
    <div
      className={`border-b  ${
        megamenu ? "border-b-black/20" : "border-b-white/20"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="text-[15px]  flex items-center gap-3">
          <span className="block">
            <FiPhone
              className={`w-4 h-4 ${megamenu ? "text-black" : "text-white/20"}`}
            />
          </span>
          <p className={`font-[500] ${megamenu ? "text-black" : "text-white"}`}>
            Call us: 783 367 2678
          </p>
        </div>
        <div
          className={`flex  text-center font-normal text-[13px] leading-normal tracking-[0.26px] items-center ${
            megamenu ? "text-black" : "text-white"
          }`}
        >
          <p
            className={`px-6 border-r  py-4 ${
              megamenu
                ? "border-black/20 border-l border-l-black/20"
                : "border-white/20 border-l border-l-white/20"
            }`}
          >
            Help centre
          </p>
          <p
            className={`px-6 border-r ${
              megamenu ? "border-black/20" : "border-white/20"
            } py-4`}
          >
            Free brochure
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
