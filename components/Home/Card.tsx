"use client";
import Image from "next/image";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { PiShoppingCartBold } from "react-icons/pi";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Item {
  image: string;
  iconTitle: string;
  redTitle: string;
  caracters: string;
  price: string;
}
interface PropsItem {
  item: Item;
}
function Card({ item }: PropsItem) {
  const router=useRouter();
  const [clicked, setClickd] = useState<boolean>(false);
  return (
    <div className=" flex flex-col gap-2 items-center rounded-lg w-[45vw] lg:w-[30vw] bg-slate-800/70 border border-slate-700 border-solid text-slate-300 ml-2 my-2 py-2 box-border ">
      <div className=" relative  bg-slate-50  w-[43vw] lg:w-[28vw] rounded-lg mx-2">
        <div className="absolute top-2 right-2">
          <FaHeart
            onClick={() => setClickd(clicked ? false : true)}
            className={` text-2xl ${clicked ? "text-red-600" : "text-black"}`}
          />
        </div>

        <Image
          src={item.image}
          height={500}
          width={500}
          alt="img"
          className="object-contain hover:scale-110 transition ease-out duration-300 cursor-pointer"
          onClick={()=>router.push('/product')}
        />
      </div>
      <div className="flex mx-1 flex-row h-8 rounded-lg items-center gap-3 border border-slate-500 px-2 py-4 bg-slate-800 cursor-pointer">
        <IoSettingsSharp />
        <p>{item.iconTitle}</p>
      </div>
      <div className="flex  flex-col gap-3 px-2">
        <p className="text-red-600  font-bold">{item.redTitle}</p>
        <h3 className="font-bold cursor-pointer">{item.caracters}</h3>
        <div className="flex mx-1 flex-row items-center gap-0">
          <RiStarSFill className="text-xl font-bold text-orange-600" />
          <RiStarSFill className="text-xl font-bold text-orange-600" />
          <RiStarSFill className="text-xl font-bold text-orange-600" />
          <RiStarSFill className="text-xl font-bold text-orange-600" />
        </div>
        <div className="h-10 flex flex-row items-center gap-8">
          <p className="font-bold ">{item.price}</p>
          <div className=" flex justify-center h-10 w-10 items-center rounded-full border border-slate-500 cursor-pointer">
            <PiShoppingCartBold className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
