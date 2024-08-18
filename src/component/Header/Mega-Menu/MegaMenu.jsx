import React, { useState } from "react";
import { menus } from "./data";
const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  console.log("menu", menus);
  return (
    <div className="flex">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="inline-block "
          onMouseEnter={() => setActiveMenu(index)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <button className="px-4 py-2">{menu.title}</button>
          {activeMenu === index && (
            <div className="absolute left-1/2 transform -translate-x-1/2  w-screen bg-white border flex flex-wrap justify-between gap-20 items-center text-start ">
              <div className="p-4 flex mx-auto flex-wrap gap-10">
                {menu.subMenus.map((subMenu, subIndex) => (
                  <div key={subIndex} className="mb-2">
                    <h4 className="font-bold">{subMenu.title}</h4>
                    <ul>
                      {subMenu.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-400 text-[15px]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
