import { getProducts } from "../../../../data/getProducts";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slide.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function Slide({ dataSwiper }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const fetchedTasks = await getProducts();
        setProducts(fetchedTasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);
  console.log({ products });
  const score = 3;
  const countStudent = 300;
  console.log(dataSwiper);
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const inImageLoaded = () => setIsLoaderShow(true);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {products.map((i) => (
          <SwiperSlide>
            <img src={i.images?.[0]} onLoad={inImageLoaded} />
            {/* {!isLoaderShow && <CircleSpinner />} */}
            <div className="flex flex-col bg-grey gap-2 w-full h-full rtl p-3">
              <h1 className="self-start text-md font-bold">{i.name}</h1>
              <div className="flex justify-between w-[90%] mx-auto mt-2">
                <div className="flex gap-2">
                  <p className="text-sm">{i.name}</p>
                </div>
                {/* <StarRating rate={score} /> */}
              </div>
              <div className="flex justify-between w-[90%] mx-auto mt-3">
                <div className="flex gap-2">
                  <PiUsersFourFill className="text-2xl text-customOne" />
                  <p className="text-sm">
                    {countStudent.toLocaleString("fa-IR")}
                  </p>
                </div>
                <p>{i.price.toLocaleString("fa-IR")}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
