import React from "react";
import { FaPlus } from "react-icons/fa";
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
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper"
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },

            0: {
              slidesPerView: 1,
              spaceBetween: 20,
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
            <BlogSwiper img={"/image2.jpg"} text="Minim veniam, quis nostrud" />
          </SwiperSlide>
          <SwiperSlide>
            <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <BlogSwiper img={"/image2.jpg"} text="Minim veniam, quis nostrud" />
          </SwiperSlide>
          <SwiperSlide>
            <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
          </SwiperSlide>
          <SwiperSlide>
            <BlogSwiper img={"/image2.jpg"} text="Minim veniam, quis nostrud" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Blog;
