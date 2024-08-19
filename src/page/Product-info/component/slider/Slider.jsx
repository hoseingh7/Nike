import React, { useState } from "react";
import { items } from "../../../../data/data";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (items.length - itemsPerPage + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (items.length - itemsPerPage + 1)) %
        (items.length - itemsPerPage + 1)
    );
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center py-32 gap-4 overflow-hidden">
      <div className="w-full flex justify-end  gap-4 ">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border flex justify-center items-center"
        >
          <GrPrevious />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border flex justify-center items-center"
        >
          <GrNext />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex gap-5 duration-300">
          {items.slice(currentIndex, currentIndex + itemsPerPage).map((i) => (
            <div
              className="flex flex-col w-[400px]  flex-wrap text-start"
              key={i.id}
            >
              <img src={i.image} alt="" className="object-cover" />
              <h3 className="text-lg ">{i.name}</h3>
              <p className="text-lg text-gray-400">{i.feture}</p>
              <p>{i.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
