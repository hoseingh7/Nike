import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./style.css";
import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="bg-gray-100 h-16 border-b border-gray-200">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
