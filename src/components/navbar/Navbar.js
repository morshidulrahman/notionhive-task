import React, { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import HeaderTop from "../Header/HeaderTop";
import { MdKeyboardArrowDown } from "react-icons/md";
import MegaBox from "./MegaBox";
import { megaDataOne, megaDataThree, megaDatatwo } from "../../data/megadata";

const Navbar = () => {
  const [navmenu, setnavmenu] = useState(false);
  const [megamenu, setmegamenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-white" : megamenu ? "bg-white" : "bg-transparent"
      }`}
    >
      {!scrolled && <HeaderTop megamenu={megamenu} />}

      <div className="flex flex-wrap justify-between items-center container mx-auto px-4 py-[30px]">
        <a
          className={`text-[32px] font-medium leading-[25px] uppercase ${
            !megamenu && !scrolled ? "text-white" : "text-black"
          }`}
        >
          Logo
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          close
        </button>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-10 rtl:space-x-reverse">
            <li>
              <a
                className={`block hover:text-[#EA4715] ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <button
                onClick={() => setmegamenu(!megamenu)}
                className={`flex items-center justify-between w-full font-medium ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                } hover:text-[#EA4715]`}
              >
                Company
                <MdKeyboardArrowDown size={20} />
              </button>
            </li>
            <li>
              <a
                className={`block hover:text-[#EA4715] ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`block hover:text-[#EA4715] ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className={`block hover:text-[#EA4715] ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                }`}
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                className={`block hover:text-[#EA4715] ${
                  !megamenu && !scrolled ? "text-white" : "text-black"
                }`}
              >
                More
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-[30px]">
          <button>
            <IoSearchOutline
              className={`w-4 h-4 ${
                megamenu || scrolled ? "text-black" : "text-white"
              }`}
            />
          </button>
          <button
            className={`text-[15px] font-[500] ${
              megamenu || scrolled ? "text-black" : "text-white"
            }`}
          >
            Sign in
          </button>
        </div>
      </div>
      {megamenu && (
        <div className="mt-1 bg-white border-t border-t-black/20 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-5">
              {megaDataOne.map((item, index) => (
                <MegaBox key={index} item={item.items} title={item.title} />
              ))}
              {megaDatatwo.map((item, index) => (
                <MegaBox key={index} item={item.items} title={item.title} />
              ))}
              {megaDataThree.map((item, index) => (
                <MegaBox key={index} item={item.items} title={item.title} />
              ))}

              <div>
                <div className="bg-[url(/mega.png)] w-[450px] h-[330px] flex flex-col justify-end py-9">
                  <div className="text-white px-9">
                    <h3 className="font-normal text-[26px] w-[290px]">
                      Bespoke Bifolds
                    </h3>
                    <p className="font-normal text-[14px] py-2 w-[270px]">
                      Our most popular bifold. Perfect for thermal efficiency.
                    </p>
                    <button className="font-normal text-[14px] hover:underline duration-300 transition-all">
                      Create your own
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
