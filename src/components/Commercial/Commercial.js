import React from "react";

import CommercialBox from "./CommercialBox";

const Commercial = () => {
  return (
    <div className="bg-[#5C5C5C]  ">
      <div className="container px-4 mx-auto">
        <div className="flex md:gap-[135px] md:flex-row flex-col gap-4">
          <CommercialBox text="Residential" />
          <CommercialBox text="Commercial" />
          <CommercialBox text="Duplex" />
        </div>
      </div>
    </div>
  );
};

export default Commercial;
