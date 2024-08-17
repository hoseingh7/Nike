import React from "react";

const BtnNav = () => {
  const buttons = [
    "LifeStyle",
    "Jordan",
    "Running",
    "Basketball",
    "Training & Gym",
    "Soccer",
    "SkateBoarding",
    "Football",
    "Baseball",
    "Golf",
    "Nike by you",
    "Boots",
    "Tennis",
    "Track & Field",
    "Sandals & Slides",
  ];
  return (
    <div className="flex flex-col gap-3 justify-start text-left border-b py-6 border-t">
      {buttons.map((buttonLabel) => (
        <button
          key={buttonLabel}
          className="text-black text-[16px] font-bold text-left pl-4 cursor-pointer"
        >
          {buttonLabel}
        </button>
      ))}
    </div>
  );
};

export default BtnNav;
