import { TopBtn } from "./productComponent/Top-Button/TopBtn";
import { Main } from "./productComponent/main/Main";
import Slider from "./productComponent/slider/Slider";
import { useState } from "react";
export const Products = () => {
  const [showFilters, setShowFilters] = useState(true);

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className="flex flex-col pb-36 mx-auto">
      <Slider />

      <TopBtn
        onToggleFilters={handleToggleFilters}
        isFiltersVisible={showFilters}
      />
      <Main showFilters={showFilters} />
    </div>
  );
};
