import React, { useState } from "react";
import img from "../../../../../images/show-shop/air-vapormax-moc-roam-electric-mens-shoes-0djDxd.jpeg";
import le from "../../../../../images/show-shop/dragoy-2-electric-track-field-distance-spikes-03rvtN.jpeg";
import lef from "../../../../../images/show-shop/gp-challenge-1-electric-mens-hard-court-tennis-shoes-cFdcc5.jpeg";
import left from "../../../../../images/show-shop/gt-cut-3-electric-basketball-shoes-GLHCGc.jpeg";
import "../../../../../App.css";
export const Lein = () => {
  const [largeImage, setLargeImage] = useState(img); // تصویر پیش‌فرض

  const handleMouseEnter = (image) => {
    setLargeImage(image);
  };

  return (
    <div className="flex h-[500px] w-1/2">
      <div className="w-1/4 flex flex-col justify-start items-start pr-4">
        <img
          src={left}
          alt="Small 1"
          className="w-full h-auto m-2 rounded-lg cursor-pointer"
          onMouseEnter={() => handleMouseEnter(left)}
        />
        <img
          src={lef}
          alt="Small 2"
          className="w-full h-auto m-2 rounded-lg cursor-pointer"
          onMouseEnter={() => handleMouseEnter(lef)}
        />
        <img
          src={le}
          alt="Small 3"
          className="w-full h-auto m-2 rounded-lg cursor-pointer"
          onMouseEnter={() => handleMouseEnter(le)}
        />
      </div>

      <div className="w-[400px] h-[400px] overflow-hidden">
        <img src={largeImage} alt="Large" className=" boxImg rounded-lg " />
      </div>
    </div>
  );
};
