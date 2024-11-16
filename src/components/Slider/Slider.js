import React from "react";
import Slider from "react-slick";
import BlogSwiper from "../Blog/BlogSwiper";

function Responsive() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container max-w-screen-2xl">
      <Slider {...settings}>
        <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
        <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
        <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
        <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
        <BlogSwiper img={"/blog1.png"} text="Lorem ipsom dolor" />
      </Slider>
    </div>
  );
}

export default Responsive;
