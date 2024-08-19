import React from "react";
import HeroPng from "../../../images/landing-page/shoes.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const slideUp = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});
const Hero = () => {
  return (
    <section className="bg-[#C11912] text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* Brand Info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
              variants={slideUp(0.2)}
              initial="hidden"
              animate="show"
              className="text-3xl uppercase font-semibold"
            >
              Jordan 1 red
            </motion.h1>
            <motion.p variants={slideUp(0.4)} initial="hidden" animate="show">
              release date
              <br />
              10/08/2024 <br />
              color way
              <br />
              red
            </motion.p>
            {/* select size section */}
            <motion.div
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show"
              className="max-w-[250px] space-y-3 mx-auto md:mx-0"
            >
              <p>select size (IN)</p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start relative z-10">
                <p className="size-box">sm</p>
                <p className="size-box">md</p>
                <p className="size-box">lg</p>
                <p className="size-box">xl</p>
                <p className="size-box">8</p>
                <p className="size-box">9</p>
                <p className="size-box">10</p>
                <p className="size-box">11</p>
                <p className="size-box">12</p>
                <p className="size-box">13</p>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Hero Image section */}
        <div className="flex flex-col justify-center items-center relative gap-16">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={HeroPng}
            alt=""
            className="max-w-[400px] xl:max-w-[500px] relative z-10 brightness-110"
          />

          {/* Play Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 items-center"
          >
            <button className="h-8 w-8 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-105 duration-200">
              <FaPlay />
            </button>
            <p>PLAY VIDEO</p>
          </motion.div>
        </div>

        {/* Right Side Section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16">
          <motion.p
            variants={slideUp(0.6)}
            initial="hidden"
            animate="show"
            className="text-sm"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis
            facilis totam? Accusamus maxime aperiam, ab quia sit ratione
            deserunt.
          </motion.p>
          {/* left right icons */}
          <motion.div
            variants={slideUp(0.8)}
            initial="hidden"
            animate="show"
            className="flex gap-8 pt-6 relative z-20"
          >
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowLeft />
            </div>
            <div className="text-2xl rounded-full border border-white p-2 hover:bg-white hover:text-primary duration-300">
              <FaArrowRight />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-center text-[240px] md:text-[220px] lg:text-[250px] xl:text-[350px] font-bold font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2]"
      >
        NIKE
      </motion.p>
      <div className="h-[500px] w-[500px] bg-white/45 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
