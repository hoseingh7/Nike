import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

export const Accordion = () => {
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
      <AccordionItem title="Shipping & Returns">
        <p>
          Free standard shipping on orders $50+ and free 60-day returns for Nike
          Members. Learn more. Return policy exclusions apply. Pick-up available
          at select Nike Stores.
        </p>
      </AccordionItem>
      <AccordionItem title="Reviews (0)">
        <p>
          No Stars Have your say. Be the first to review the Air Jordan Legacy
          312 Low. Write a Review
        </p>
      </AccordionItem>
    </div>
  );
};
