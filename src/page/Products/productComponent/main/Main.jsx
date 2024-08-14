import { Left } from "./Left/Left";
import { Right } from "./Right/Right";
import { useState } from "react";
export const Main = ({ showFilters }) => {
  return (
    <div className="w-full flex">
      <div className="w-full flex">
        {showFilters && <Left showFilters={showFilters} />}
        <Right className={showFilters ? "w-4/5" : "w-full"} />
      </div>
    </div>
  );
};
