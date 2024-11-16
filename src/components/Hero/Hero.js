import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Hero = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      modules={[Navigation, Pagination, Autoplay]}
      className="md:h-[90vh] sm:h-[60vh] h-[90vh]"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className="w-full h-full bg-[url(/Image1.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="w-[90%] md:w-[50%] mt-[200px] md:mt-[250px]">
            <h1 className="text-white font-red-hat-display text-4xl md:text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>

            <div className="flex items-center gap-3  mt-14 pl-1">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`rounded-full ${
                    activeIndex === index
                      ? "w-[10px] h-[10px] border-[1px] border-white bg-transparent"
                      : "w-[10px] h-[10px] bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="bg-green-500 w-[400px] h-80 bg-[url(/image2.jpg)] bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="w-[90%] md:w-[50%] mt-[200px] md:mt-[250px]">
            <h1 className="text-white font-red-hat-display text-4xl md:text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>

            <div className="flex items-center gap-3  mt-14 pl-1">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`rounded-full ${
                    activeIndex === index
                      ? "w-[10px] h-[10px] border-[1px] border-white bg-transparent"
                      : "w-[10px] h-[10px] bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-orange-500 w-[400px] h-80 bg-[url(/Image1.png)] bg-no-repeat bg-cover">
        <div className="container mx-auto px-4">
          <div className="w-[90%] md:w-[50%] mt-[200px] md:mt-[250px]">
            <h1 className="text-white font-red-hat-display text-4xl md:text-[46px] font-medium leading-[60px] tracking-[0.46px] uppercase">
              Modern elegance
            </h1>
            <p className="text-white font-red-hat-display text-[15px] font-medium leading-[25px] tracking-[0.3px] pt-3">
              Our most popular bifold. Perfect for thermal efficiency.
            </p>
            <button className="bg-[#EA4715] mt-[38px] py-4 px-8 rounded-[5px] text-white">
              Our Service
            </button>

            <div className="flex items-center gap-3  mt-14 pl-1">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => handleSlideChange(index)}
                  className={`rounded-full ${
                    activeIndex === index
                      ? "w-[10px] h-[10px] border-[1px] border-white bg-transparent"
                      : "w-[10px] h-[10px] bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
