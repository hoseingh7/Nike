import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import one from "../../../../../images/nike-just-do-it (7).jpg";
import two from "../../../../../images/nike-just-do-it (8).jpg";
import three from "../../../../../images/nike-just-do-it (9).jpg";
import four from "../../../../../images/nike-just-do-it (10).jpg";
import five from "../../../../../images/nike-just-do-it (11).jpg";
import six from "../../../../../images/nike-just-do-it (12).jpg";

// import swiperStyles from "./slider.module.css";
import "./slider.css";
export const Slider = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const dataSlider = [
    {
      image: one,
      title: "Air Jordan 1",
    },
    {
      image: two,
      title: "Dunk",
    },
    {
      image: three,
      title: "Air Force 1",
    },
    {
      image: four,
      title: "Blazer",
    },
    {
      image: five,
      title: "Vomero",
    },
    {
      image: six,
      title: "Air Max",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full h-full"
        style={{ width: "100%" }}
      >
        {dataSlider.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slider-box">
              <img src={item.image} alt={item.title} className="slider-image" />
              {/* <h3 className="slider-title">{item.title}</h3> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
