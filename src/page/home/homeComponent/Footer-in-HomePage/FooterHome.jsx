import { useState } from "react";
import "./styles.css";
export const FooterHome = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = [
    {
      title: "Featured",
      item1: "Air Force 1",
      item2: "Jordan 1",
      item3: "Metcon",
      item4: "Air Max 270",
      item5: "Air Max 97",
      item6: "Air Max 90",
      item7: "Blazer",
      item8: "Pegasus",
    },
    {
      title: "Shoes",
      item1: "Jordan Shoes",
      item2: "Jordan 1",
      item3: "Running Shoes",
      item4: "Basketball Shoes",
      item5: "Tennis Shoes",
      item6: "Training Shoes",
      item7: "Sale Shoes",
      item8: "Pegasus",
      item9: "Soccer Cleats",
    },
    {
      title: "All Clothing",
      item1: "Tops & T-Shirts",
      item2: "Shorts",
      item3: "Hoodies & Pullovers",
      item4: "Joggers & Sweatpants",
      item5: "Sports Bras",
      item6: "Pants & Tights",
      item7: "Socks",
      item8: "Yoga",
      item9: "NikeLab",
      item10: "Plus Size",
      item11: "Big & Tall",
      item12: "Sale Clothing",
    },
    {
      title: "Kids",
      item1: "Infant & Toddler Shoes",
      item2: "Kids Basketball Shoes",
      item3: "Kids Running Shoes",
      item4: "Kids Jordan Shoes",
      item5: "Kids Clothing",
      item6: "Kids Backpacks",
      item7: "Kids Socks",
      item8: "Kids Sale",
    },
  ];
  return (
    <div
      className="flex w-4/5 mx-auto justify-around pb-9 text-left"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {items.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setExpandedIndex(index)}
          onMouseLeave={() => setExpandedIndex(null)}
        >
          <h2 className="text-[15px] font-bold mb-4">{item.title}</h2>
          <ul className={isExpanded ? "visible" : ""}>
            {Object.keys(item)
              .filter(
                (key, idx) => key.startsWith("item") && (isExpanded || idx < 5)
              )
              .map((key, index) => (
                <li className="py-1 text-gray-400 " key={index}>
                  {item[key]}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
