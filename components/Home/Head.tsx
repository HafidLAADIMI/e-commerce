import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import Carousel from "./Carousel";
function Head() {
  const chair1 = "/chair1.webp";
  const chair2 = "/chair2.webp";
  const chair3 = "/chair3.webp";
  const chair4 = "/chair4.webp";
  const chairs = [chair1, chair2, chair3, chair4];
  return (
    <div className=" flex flex-col gap-4 items-center">
      <div className="flex flex-col backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 rounded-lg w-[90vw] md:w-[85vw] items-center p-3 lg: ">
        <div className="flex flex-col items-center ">
          <p className="text-3xl xl:text-4xl text-emerald-500 font-bold mb-6">
            Your Ultimate Technology Destination.
          </p>
          <p className="text-slate-400 md:text-2xl">
          Explore our extensive selection of high-performance gaming PCs, meticulously crafted to cater to every gamer is needs. Dive into personalized setups that are fine-tuned to perfection, ensuring seamless and immersive gameplay. Our team of experts is dedicated to providing you with tailored advice and support, helping you achieve the ultimate gaming experience. Whether you are a casual gamer or a competitive eSports enthusiast, our gaming PCs are designed to elevate your play to the next level. Discover the difference today and take your gaming to new heights with our top-of-the-line systems
          </p>
        </div>
        <div className="lg:w-[500px]">
          <Carousel magazins={chairs} />
        </div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-4  ">
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>Bundle Chaise&Bureau</p>
        </div>
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>Bureau Gaming</p>
        </div>
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>CORSAIR</p>
        </div>
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>GAMDIAS</p>
        </div>
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>HYBROK</p>
        </div>
        <div className="w-[40vw] lg:w-[30vw] xl:w-[22vw] h-12 px-2 rounded-md flex flex-row items-center gap-5 cursor-pointer hover:bg-slate-700/70 transition ease-in duration-200 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ">
          <BsDot />
          <p>Mars Gaming</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 px-4">
        <div className="flex flex-row items-center gap-5 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300  hover:bg-slate-700/70 cursor-pointer rounded-sm px-4 py-2">
          <IoFilterOutline />
          <p>Filters</p>
        </div>
        <div className="flex flex-row items-center gap-2 backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300  shadow-md shadow-slate-800 hover:bg-slate-700/70 cursor-pointer rounded-sm px-4 py-2">
          <select className="backdrop-blur-sm box-border  bg-slate-800/70 border border-slate-700 border-solid text-slate-300  hover:bg-slate-700/70 cursor-pointer ">
            <option value="Relevance">Relevance</option>
            <option value="High to Low price">High to Low price</option>
            <option value="Low to High price">Low to High price</option>
            <option value="Best Rated">Best Rated</option>
            <option value="New Arrivals">New Arrivals</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Head;
