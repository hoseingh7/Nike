import React from "react";
import Logo from "../../../images/landing-page/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingBag } from "react-icons/md";
import { motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "New Release",
    link: "/",
    delay: "0.2",
  },
  {
    id: 2,
    title: "Men",
    link: "#",
    delay: "0.4",
  },
  {
    id: 3,
    title: "Women",
    link: "#",
    delay: "0.6",
  },
  {
    id: 4,
    title: "Kids",
    link: "#",
    delay: "0.8",
  },
  {
    id: 5,
    title: "Customize",
    link: "#",
    delay: "1",
  },
];

const slideRight = (delay) => ({
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Navbar = () => {
  return (
    <nav className="bg-[#C11912] text-white px-24">
      <div className="container py-6 flex justify-between items-center">
        {/* Logo section */}
        <motion.div variants={slideRight(0.1)} initial="hidden" animate="show">
          <img src={Logo} alt="" className="w-[100px]" />
        </motion.div>
        {/* Menu section */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {NavbarMenu.map((item) => {
              return (
                <motion.li
                  variants={slideRight(item.delay)}
                  initial="hidden"
                  animate="show"
                  key={item.id}
                >
                  <a
                    href={item.link}
                    className="inline-block py-2 px-4 uppercase font-barlow font-semibold hover:scale-105 duration-300"
                  >
                    {item.title}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
        {/* Icons section */}
        <div className="flex items-center gap-4">
          <motion.div
            variants={slideRight(1.2)}
            initial="hidden"
            animate="show"
            className="text-2xl cursor-pointer"
          >
            <FaRegUserCircle />
          </motion.div>
          <motion.div
            variants={slideRight(1.4)}
            initial="hidden"
            animate="show"
            className="text-2xl cursor-pointer relative"
          >
            <MdOutlineShoppingBag />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs flex  justify-center items-center rounded-full">
              2
            </div>
          </motion.div>
        </div>

        {/* Mobile Hamburger section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
