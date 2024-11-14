import React from "react";

const MegaBox = ({ item, title }) => {
  return (
    <div className="w-[200px]">
      <h3 className="text-[#022C3B] font-semibold text-[15px] leading-[150%] tracking-[0.3px] mb-10 pt-5">
        {title}
      </h3>
      <ul className="hidden mb-4 md:mb-0 md:block">
        {item.map((listItem, index) => (
          <li key={index} className="mb-4">
            <a className="text-[#022C3B] font-normal text-[14px] leading-[150%] tracking-[0.28px] hover:text-[#EA4715] duration-300 transition-all hover:font-[500] cursor-pointer">
              {listItem.list}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaBox;
