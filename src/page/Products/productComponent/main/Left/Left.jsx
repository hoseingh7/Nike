import { Sidebar } from "../../../../../component/sidebar/Sidebar";
import { useState } from "react";
export const Left = ({ showFilters }) => {
  return (
    <div className="w-1/5 ">
      <Sidebar showFilters={showFilters} />
    </div>
  );
};
