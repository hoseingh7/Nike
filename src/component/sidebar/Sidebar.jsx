import { useState } from "react";
import { Accord } from "./Accordion-in-sidebar/Accord";
import BtnNav from "./Button-in-Navbar/BtnNav";
export const Sidebar = ({ showFilters }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts" },
    { title: "Schedule " },
    { title: "Search" },
    { title: "Analytics" },
    { title: "Files ", gap: true },
    { title: "Setting" },
  ];

  return (
    <>
      {showFilters && (
        <div className="flex flex-col bg-white shadow-md rounded-lg p-4">
          <div className="form-control w-4/5 mx-auto pb-4">
            <label className="label cursor-pointer">
              <span className="label-text text-[17px] font-bold">
                Pick Up Today
              </span>
              <input type="checkbox" className="toggle" defaultChecked />{" "}
            </label>
          </div>
          <BtnNav />
          <Accord />
        </div>
      )}
    </>
  );
};
