import { useState, useRef } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const borderProgress = ((activeIndex + 1) / totalSlides) * 100;

  const handleSvgClick = (index) => {
    if (swiperRef.current) {
      const targetIndex = index >= totalSlides ? 0 : index;
      swiperRef.current.slideTo(targetIndex);
    }
  };

  return (
    <>
      <Swiper
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
        className="w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <div className="flex flex-col gap-6 md:gap-24 md:flex-row">
            <div className="flex md:w-[60%] w-full">
              <div>
                <img
                  src="https://img.freepik.com/free-photo/romantic-handsome-boyfriend-confessing-love-pointing_176420-19581.jpg?t=st=1731668731~exp=1731672331~hmac=fabce7afe3d96906788a844fce9975c36fc1c5da1f66faa9c42b686293239164&w=826"
                  alt="men"
                  className="w-full h-auto md:w-[488px] md:h-[465px] object-cover"
                />
              </div>
              <div className="h-[200px] md:h-[324px] w-[100px] md:w-[156px] bg-[#EA4715] relative">
                <div className="absolute top-5 md:top-7 -left-10 md:-left-12">
                  <div className="relative w-[150px] h-[150px] md:w-[248px] md:h-[248px]">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(black ${borderProgress}%, white  ${borderProgress}%)`,
                        borderRadius: "50%",
                        clipPath: "circle(44.2% at 50% 50%)",
                      }}
                    ></div>
                    <div className="absolute inset-2 md:inset-4 rounded-full bg-[#EA4715] flex justify-center items-center">
                      <div className="flex flex-col">
                        <h2 className="text-5xl md:text-8xl text-white">
                          1
                          <span
                            className="absolute top-16 md:top-24 left-[50px] md:left-[85px] cursor-pointer"
                            onClick={() => handleSvgClick(1)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="15"
                              viewBox="0 0 48 15"
                              fill="none"
                            >
                              <path d="M41 1L47 7.5L41 14" stroke="black" />
                              <line
                                x1="47"
                                y1="7.5"
                                x2="-4.37114e-08"
                                y2="7.5"
                                stroke="black"
                              />
                            </svg>
                          </span>
                        </h2>
                        <p className="text-white text-center text-[10px] font-medium leading-[18px] tracking-[0.1px]">
                          /THREE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex flex-col justify-end">
              <div>
                <h3 className="text-black text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[30px] tracking-[0.4px]">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </h3>
                <p className="text-black text-[14px] md:text-[15px] font-normal leading-[140%] md:leading-[150%] tracking-[0.3px] py-4 md:py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <button className="inline-flex p-[12px_20px] md:p-[16px_24px] items-start gap-[8px] md:gap-[10px] rounded-[5px] border border-[#E7E7EB] bg-black text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-6 md:gap-24 md:flex-row">
            <div className="flex md:w-[60%] w-full">
              <div>
                <img
                  src="/RectangleMen.png"
                  alt="men"
                  className="w-full h-auto md:w-[488px] md:h-[465px] object-cover"
                />
              </div>
              <div className="h-[200px] md:h-[324px] w-[100px] md:w-[156px] bg-[#EA4715] relative">
                <div className="absolute top-5 md:top-7 -left-10 md:-left-12">
                  <div className="relative w-[150px] h-[150px] md:w-[248px] md:h-[248px]">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(black ${borderProgress}%, white  ${borderProgress}%)`,
                        borderRadius: "50%",
                        clipPath: "circle(44.2% at 50% 50%)",
                      }}
                    ></div>
                    <div className="absolute inset-2 md:inset-4 rounded-full bg-[#EA4715] flex justify-center items-center">
                      <div className="flex flex-col">
                        <h2 className="text-5xl md:text-8xl text-white">
                          2
                          <span
                            className="absolute top-16 md:top-24 left-[50px] md:left-[85px] cursor-pointer"
                            onClick={() => handleSvgClick(2)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="15"
                              viewBox="0 0 48 15"
                              fill="none"
                            >
                              <path d="M41 1L47 7.5L41 14" stroke="black" />
                              <line
                                x1="47"
                                y1="7.5"
                                x2="-4.37114e-08"
                                y2="7.5"
                                stroke="black"
                              />
                            </svg>
                          </span>
                        </h2>
                        <p className="text-white text-center text-[10px] font-medium leading-[18px] tracking-[0.1px]">
                          /THREE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex flex-col justify-end">
              <div>
                <h3 className="text-black text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[30px] tracking-[0.4px]">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </h3>
                <p className="text-black text-[14px] md:text-[15px] font-normal leading-[140%] md:leading-[150%] tracking-[0.3px] py-4 md:py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <button className="inline-flex p-[12px_20px] md:p-[16px_24px] items-start gap-[8px] md:gap-[10px] rounded-[5px] border border-[#E7E7EB] bg-black text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-6 md:gap-24 md:flex-row">
            <div className="flex md:w-[60%] w-full">
              <div>
                <img
                  src="https://img.freepik.com/premium-photo/handsome-blond-guy-with-blue-eyes-white-t-shirt-pointing-side_1258-6965.jpg?w=826"
                  alt="men"
                  className="w-full h-auto md:w-[488px] md:h-[465px] object-cover"
                />
              </div>
              <div className="h-[200px] md:h-[324px] w-[100px] md:w-[156px] bg-[#EA4715] relative">
                <div className="absolute top-5 md:top-7 -left-10 md:-left-12">
                  <div className="relative w-[150px] h-[150px] md:w-[248px] md:h-[248px]">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(black ${borderProgress}%, white  ${borderProgress}%)`,
                        borderRadius: "50%",
                        clipPath: "circle(44.2% at 50% 50%)",
                      }}
                    ></div>
                    <div className="absolute inset-2 md:inset-4 rounded-full bg-[#EA4715] flex justify-center items-center">
                      <div className="flex flex-col">
                        <h2 className="text-5xl md:text-8xl text-white">
                          3
                          <span
                            className="absolute top-16 md:top-24 left-[50px] md:left-[85px] cursor-pointer"
                            onClick={() => handleSvgClick(3)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="15"
                              viewBox="0 0 48 15"
                              fill="none"
                            >
                              <path d="M41 1L47 7.5L41 14" stroke="black" />
                              <line
                                x1="47"
                                y1="7.5"
                                x2="-4.37114e-08"
                                y2="7.5"
                                stroke="black"
                              />
                            </svg>
                          </span>
                        </h2>
                        <p className="text-white text-center text-[10px] font-medium leading-[18px] tracking-[0.1px]">
                          /THREE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[30%] flex flex-col justify-end">
              <div>
                <h3 className="text-black text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[30px] tracking-[0.4px]">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </h3>
                <p className="text-black text-[14px] md:text-[15px] font-normal leading-[140%] md:leading-[150%] tracking-[0.3px] py-4 md:py-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <button className="inline-flex p-[12px_20px] md:p-[16px_24px] items-start gap-[8px] md:gap-[10px] rounded-[5px] border border-[#E7E7EB] bg-black text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
