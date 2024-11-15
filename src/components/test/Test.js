import { useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 4;

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const borderProgress = ((activeIndex + 1) / totalSlides) * 100;
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative w-40 h-40">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(black ${borderProgress}%, #91919126  ${borderProgress}%)`,
            borderRadius: "50%",
            clipPath: "circle(43% at 50% 50%)",
          }}
        ></div>

        <div className="absolute inset-4 rounded-full bg-white"></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        onSlideChange={handleSlideChange}
        className="w-full"
      >
        <SwiperSlide>
          <div className="flex">
            <img
              src="/RectangleMen.png"
              alt="Slide 1"
              className="w-2/3 object-cover"
            />
            <div className="w-1/3 bg-orange-500 flex items-center justify-center relative">
              <div className="absolute w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">1</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex">
            <img
              src="/RectangleWmen.png"
              alt="Slide 2"
              className="w-2/3 object-cover"
            />
            <div className="w-1/3 bg-orange-500 flex items-center justify-center relative">
              <div className="absolute w-24 h-24 border-4 border-white rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold">2</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
