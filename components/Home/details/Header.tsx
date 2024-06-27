"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

function Header() {
  const img = "/chair1.webp";
  const [isClicked, setClickd] = useState<boolean>(false);
  return (
    <div className="flex flex-col lg:flex-row w-[95vw] gap-5 font-bold text-white bg-slate-800/70 border border-slate-700 border-solid items-center mt-4 py-3 lg:px-5 ">
      <Image
        src={img}
        height={500}
        width={500}
        alt="image"
        className=" object-contain w-[500px] rounded-md"
      />

      <div className="flex flex-col lg:h-[50vh] lg:justify-between items-center ">
        <div className="items-start w-[90vw] lg:w-full ">
          <small className="text-red-600 text-xl">Setup Game</small>
        </div>
        <div className="flex flex-row items-center justify-between w-[90vw] lg:w-full ">
          <p>Hybrok Demon Red/Black</p>
          <p className="text-yellow-500">1,999.00 MAD</p>
        </div>
        <p className="w-[90vw] lg:w-full  font-bold text-white">
          Sit comfortably in front of your computer in the Hybrok Demon chair
          with its pleasant seat, its faux leather covering, and its 2D
          armrests. Elegant with its black and red color and bucket design, it
          offers an ideal position for long gaming sessions.
        </p>
        <button className="flex flex-row h-10 items-center justify-center gap-6 bg-red-600 w-[90vw] lg:w-full  text-xl rounded-lg">
          <p>Buy Now</p>
          <GiShoppingCart className="text-3xl" />
        </button>
        <button
          onClick={() => setClickd(isClicked ? false : true)}
          className={`flex mt-4 flex-row h-10 items-center justify-center gap-6 w-[90vw] lg:w-full  bg-emerald-500  border-1 border-slate-600 text-xl rounded-lg ${
            isClicked ? "text-red-600" : "text-white"
          }`}
        >
          <FaHeart className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default Header;
