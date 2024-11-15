import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Map = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const branches = [
    {
      id: 1,
      name: "Dhaka Branch",
      location: "Dhaka",
      address:
        "Green Plaza, 4th Floor, Plot-8, Road-8/A Satmasjid Road, Dhanmondi, Dhaka-1209",
      phone: ["+880-4-0937432", "+8809370272634"],
      coordinates: { x: "50%", y: "46%" },
    },
    {
      id: 2,
      name: "Chandpur Branch",
      location: "Chandpur",
      address: "Lake View Tower, Chandpur Main Road, Chandpur",
      phone: ["+880-1-2345678", "+8809370289999"],
      coordinates: { x: "54%", y: "55%" },
    },
    {
      id: 3,
      name: "Jessore Branch",
      location: "Jessore",
      address: "City Center, 2nd Floor, Jessore Sadar, Jessore",
      phone: ["+880-3-4567890"],
      coordinates: { x: "39%", y: "57%" },
    },
    {
      id: 4,
      name: "Sirajganj Branch",
      location: "Sirajganj",
      address: "Riverside Plaza, Main Street, Sirajganj",
      phone: ["+880-5-6789012"],
      coordinates: { x: "42%", y: "37%" },
    },
    {
      id: 5,
      name: "Tangail Branch",
      location: "Tangail",
      address: "Green Market, 3rd Floor, Tangail City",
      phone: ["+880-6-7890123"],
      coordinates: { x: "47%", y: "38%" },
    },
    {
      id: 6,
      name: "Kishoreganj Branch",
      location: "Kishoreganj",
      address: "Hilltop Center, Kishoreganj Main Road",
      phone: ["+880-7-8901234"],
      coordinates: { x: "56%", y: "37%" },
    },
    {
      id: 7,
      name: "Comilla Branch",
      location: "Comilla",
      address: "Victory Tower, Kandirpar, Comilla",
      phone: ["+880-8-9012345"],
      coordinates: { x: "56%", y: "48%" },
    },
  ];

  const handleMarkerClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div className="bg-[#F6F6F6]">
      <div className="container mx-auto px-4 py-[100px]">
        <h1 className="text-black text-center  text-[32px] font-medium leading-[42px] tracking-[0.32px] uppercase mb-6">
          Our Branches
        </h1>
        <p className="text-black text-center mx-auto text-[15px] font-normal leading-[150%] tracking-[0.3px] md:w-[60%] mb-[60px] w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <div className="relative container mx-auto">
          <div className="relative">
            {/* Map SVG */}
            <div className="items-center justify-center md:flex hidden relative">
              <img src="/bd.png" alt="Map" className="w-[506px] h-[700px]" />
              {/* Markers */}
              {branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => handleMarkerClick(branch)}
                  className="absolute w-10 h-10 bg-transparent rounded-full cursor-pointer"
                  style={{
                    top: branch.coordinates.y,
                    left: branch.coordinates.x,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="sr-only">{branch.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Info Box */}
          {selectedBranch && (
            <div className="absolute top-[60%] left-[50%] w-[300px] p-5 bg-[#F0F0F0] shadow-lg border rounded-md z-50 transform -translate-x-1/2 -translate-y-1/2 ">
              <div className="flex gap-2.5 pb-4 border-b border-b-[#E6E2E1] relative">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M5 28V8L17 4V24"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 11L27 14V25"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2 28H30"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11 3V6"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 12C12 11.5 12.4 11 13 11C13.5 11 14 11.5 14 12C14 12.5 13.5 13 13 13C12.4 13 12 12.5 12 12ZM8 12C8 11.5 8.5 11 9 11C9.5 11 10 11.5 10 12C10 12.5 9.5 13 9 13C8.5 13 8 12.5 8 12Z"
                      fill="#EA4715"
                    />
                    <path
                      d="M12 17C12 16.5 12.4 16 13 16C13.5 16 14 16.5 14 17C14 17.5 13.5 18 13 18C12.4 18 12 17.5 12 17ZM8 17C8 16.5 8.5 16 9 16C9.5 16 10 16.5 10 17C10 17.5 9.5 18 9 18C8.5 18 8 17.5 8 17Z"
                      fill="#EA4715"
                    />
                    <path
                      d="M12 22C12 21.5 12.4 21 13 21C13.5 21 14 21.5 14 22C14 22.5 13.5 23 13 23C12.4 23 12 22.5 12 22ZM8 22C8 21.5 8.5 21 9 21C9.5 21 10 21.5 10 22C10 22.5 9.5 23 9 23C8.5 23 8 22.5 8 22Z"
                      fill="#EA4715"
                    />
                    <path
                      d="M21 17H23"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 22H23"
                      stroke="#EA4715"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h1 className="text-black font-red-hat-display text-[20px] font-semibold leading-[32px] ">
                  {" "}
                  {selectedBranch.name}
                </h1>
                <button
                  onClick={() => setSelectedBranch(null)}
                  className="absolute -top-2 right-0"
                >
                  <IoMdClose size={20} />
                </button>
              </div>
              <div className="bg-white p-5 rounded-md mt-5">
                <h2 className="text-black text-[18px] font-semibold leading-[28px]">
                  {selectedBranch.name}
                </h2>
                <div className="text-black  text-[14px] font-normal leading-[24px] flex gap-2 items-center">
                  <div className="w-8 h-8 rounded-full flex justify-center items-center border border-[#E6E2E1] p-2">
                    <FaMapMarkerAlt className="text-[#EA4715] " />
                  </div>
                  <p className="text-black  text-[14px] font-normal leading-[24px]">
                    {selectedBranch.address}
                  </p>
                </div>
                {selectedBranch.phone.map((phone, index) => (
                  <div
                    key={index}
                    className="text-black  text-[14px] font-normal leading-[24px] flex gap-2 items-center"
                  >
                    <div className="w-8 h-8 rounded-full flex justify-center items-center border border-[#E6E2E1] p-2">
                      <FaPhoneAlt className="text-[#EA4715] " />
                    </div>
                    <p>{phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
