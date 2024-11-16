import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import BlogSwiper from "./BlogSwiper";

const Blog = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-black font-[500] text-[32px] leading-[42px] tracking-[0.32px] uppercase mb-8">
          Blog
        </h1>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4  ">
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={1}
            className="mySwiper"
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
          >
            <SwiperSlide>
              <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper
                img={"/image2.jpg"}
                text="Consectetur adipiscing sed do"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper
                img={"/image2.jpg"}
                text="Minim veniam, quis nostrud"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper
                img={"/image2.jpg"}
                text="Minim veniam, quis nostrud"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
            </SwiperSlide>
            <SwiperSlide>
              <BlogSwiper
                img={"/image2.jpg"}
                text="Minim veniam, quis nostrud"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog;
