import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

export const Accord = () => {
  const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-lg font-semibold">{title}</h2>
          <span>{isOpen ? <GoChevronUp /> : <GoChevronDown />}</span>
        </div>
        {isOpen && (
          <div className="pl-4 flex flex-col justify-start items-start pb-4">
            {children}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="">
      <AccordionItem title="Sale & Offers">
        <label>
          <input type="checkbox" /> Extra 25% Off
        </label>
        <label>
          <input type="checkbox" /> Sale
        </label>
      </AccordionItem>
      <AccordionItem title="Gender">
        <label>
          <input type="checkbox" /> Men
        </label>
        <label>
          <input type="checkbox" /> Women
        </label>
        <label>
          <input type="checkbox" /> Unisex
        </label>
      </AccordionItem>
      <AccordionItem title="Kids">
        <label>
          <input type="checkbox" /> Boys
        </label>
        <label>
          <input type="checkbox" /> Girls
        </label>
      </AccordionItem>
      <AccordionItem title="Colors">
        <label>
          <input type="checkbox" /> Option 1
        </label>
        <label>
          <input type="checkbox" /> Option 2
        </label>
      </AccordionItem>
      <AccordionItem title="Shop by Price">
        <label>
          <input type="checkbox" /> $0 - $25
        </label>
        <label>
          <input type="checkbox" /> $25 - $50
        </label>
        <label>
          <input type="checkbox" /> $50 - $100
        </label>
        <label>
          <input type="checkbox" /> $100 - $150
        </label>
      </AccordionItem>
      <AccordionItem title="Brand">
        <label>
          <input type="checkbox" /> Nike sportswear
        </label>
        <label>
          <input type="checkbox" />
          Jordan
        </label>
        <label>
          <input type="checkbox" />
          Nike for you
        </label>
        <label>
          <input type="checkbox" />
          Converse
        </label>
      </AccordionItem>
      <AccordionItem title="Sport & Activities">
        <label>
          <input type="checkbox" /> Life Style
        </label>
        <label>
          <input type="checkbox" /> Runinig
        </label>
        <label>
          <input type="checkbox" /> Training & Gym
        </label>
        <label>
          <input type="checkbox" /> Basketball
        </label>
      </AccordionItem>
      <AccordionItem title="Collections">
        <label>
          <input type="checkbox" /> Air Force 1
        </label>
        <label>
          <input type="checkbox" /> Nike Pegasus
        </label>
        <label>
          <input type="checkbox" /> Nike Motiva
        </label>
        <label>
          <input type="checkbox" /> foamposite
        </label>
      </AccordionItem>
      <AccordionItem title="Shoe Height">
        <label>
          <input type="checkbox" /> Low top
        </label>
        <label>
          <input type="checkbox" /> Mid Top
        </label>
        <label>
          <input type="checkbox" /> High Top
        </label>
      </AccordionItem>
      <AccordionItem title="Closure Type">
        <label>
          <input type="checkbox" /> Slip On
        </label>
        <label>
          <input type="checkbox" />
          Strap
        </label>
        <label>
          <input type="checkbox" />
          Zipper
        </label>
        <label>
          <input type="checkbox" />
          Toggle
        </label>
      </AccordionItem>
      <AccordionItem title="Width">
        <label>
          <input type="checkbox" /> Regular
        </label>
        <label>
          <input type="checkbox" /> Wide
        </label>
        <label>
          <input type="checkbox" />
          Extra Wide
        </label>
      </AccordionItem>
    </div>
  );
};
