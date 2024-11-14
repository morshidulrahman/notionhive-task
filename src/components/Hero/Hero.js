// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      className="h-screen"
    >
      <SwiperSlide className="w-full h-full bg-[url(/Image1.png)]">
        <div className="container mx-auto px-4">
          <div className="w-[50%] mt-[250px]">
            <h1 className="text-white font-red-hat-display text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-green-500 w-[400px] h-80  bg-[url(/image2.jpg)]">
        <div className="container mx-auto px-4">
          <div className="w-[50%] mt-[250px]">
            <h1 className="text-white font-red-hat-display text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-orange-500 w-[400px] h-80  bg-[url(/Image1.png)]">
        <div className="container mx-auto px-4">
          <div className="w-[50%] mt-[250px]">
            <h1 className="text-white font-red-hat-display text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
