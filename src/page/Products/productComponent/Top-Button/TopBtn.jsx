import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const TopBtn = ({ onToggleFilters, isFiltersVisible }) => {
  return (
    <div className="w-full flex justify-between p-3 items-center">
      {/* left section in top btn */}
      <h3 className="text-[35px] font-bold">Nike Shoes & Sneakers(1629)</h3>
      {/* right section in top btn */}
      <div className="w-[220px] flex justify-between items-center">
        <div
          className="flex gap-2 justify-center items-center cursor-pointer"
          onClick={onToggleFilters}
        >
          {isFiltersVisible ? "Hide Filters" : "Show Filters"}
          <HiOutlineMenuAlt4 />
        </div>
        <div>
          {/* <label htmlFor=""></label> */}
          <select>
            <option value="">Sort By</option>
            <option value="">air jordan</option>
            <option value="">air jordan</option>
          </select>
        </div>
      </div>
    </div>
  );
};
