"use client";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import {motion} from "framer-motion";
import Carousel from "./Carousel";
function Head() {
  const chair1 = "/chair1.webp";
  const chair2 = "/chair2.webp";
  const chair3 = "/chair3.webp";
  const chair4 = "/chair4.webp";
  const chairs = [chair1, chair2, chair3, chair4];
  const listVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className="flex flex-col lg:flex-row  gap-3  box-border rounded-lg w-[90vw] md:w-[85vw] items-center p-3 lg: ">
        <div className="flex flex-col  items-center lg:w-[50vw]">
          <p className="text-3xl xl:text-4xl text-emerald-500 font-bold mb-6">
            Your Ultimate Technology Destination.
          </p>
          <p className="text-slate-200 font-bold md:text-2xl font-serif">
            Explore our extensive selection of high-performance gaming PCs,
            meticulously crafted to cater to every gamer is needs. Dive into
            personalized setups that are fine-tuned to perfection, ensuring
            seamless and immersive gameplay. Our team of experts is dedicated to
            providing you with tailored advice and support, helping you achieve
            the ultimate gaming experience. Whether you are a casual gamer or a
            competitive eSports enthusiast, our gaming PCs are designed to
            elevate your play to the next level. Discover the difference today
            and take your gaming to new heights with our top-of-the-line systems
          </p>
        </div>
        <div className="lg:w-[500px] ">
          <Carousel magazins={chairs} />
        </div>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2,duration:0.5 }}
      >
        {[
          "Bundle Chaise&Bureau",
          "Bureau Gaming",
          "CORSAIR",
          "GAMDIAS",
          "HYBROK",
          "Mars Gaming",
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={listVariants}
            className="w-full h-16 sm:h-20 lg:h-24 px-4 rounded-md flex items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm bg-black shadow-sm shadow-white text-slate-200"
          >
            <BsDot className="text-xl lg:text-2xl" />
            <p className="text-base sm:text-lg lg:text-xl">{item}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex flex-row items-center gap-6 p-4 mt-4">
        <motion.div
          className="flex items-center gap-5 bg-black shadow-sm shadow-white text-slate-200 hover:bg-slate-700/70 cursor-pointer rounded-sm px-6 py-3 backdrop-blur-sm transition duration-300 ease-in-out"
          variants={filterVariants}
          initial="hidden"
          animate="visible"
        >
          <IoFilterOutline className="text-lg lg:text-xl" />
          <p className="text-base sm:text-lg lg:text-xl">Filters</p>
        </motion.div>
        <motion.div
          className="flex items-center gap-2 bg-black shadow-sm shadow-white text-slate-200 hover:bg-slate-700/70 cursor-pointer rounded-sm px-6 py-3 backdrop-blur-sm transition duration-300 ease-in-out"
          variants={filterVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.select
            className="bg-transparent border-none text-slate-300 cursor-pointer focus:outline-none text-base sm:text-lg lg:text-xl"
            whileHover={{ scale: 1.05 }}
          >
            <option value="Relevance">Relevance</option>
            <option value="High to Low price">High to Low price</option>
            <option value="Low to High price">Low to High price</option>
            <option value="Best Rated">Best Rated</option>
            <option value="New Arrivals">New Arrivals</option>
          </motion.select>
        </motion.div>
      </div>
    </div>
  );
}

export default Head;
