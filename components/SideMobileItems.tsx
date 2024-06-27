"use client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
interface LinkItem{
    title: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
}
interface Item {
  title: string;
  button: string;
  links: LinkItem[]
}
interface PropsItem {
  item:Item;
}
function SideMobileItems({item}:PropsItem) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <Link
        onClick={() => {
          isClicked ? setIsClicked(false) : setIsClicked(true);
        }}
        className="flex flex-row items-center justify-between px-2"
        href="#"
      >
        {" "}
        <p className="mt-2">{item.title}</p>
        {isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Link>
      <div
        style={{
          transform: isClicked ? "translateX(0%)" : "translateX(-100%)",
        }}
        className={`${
          isClicked ? "flex" : "hidden"
        }   flex-col w-full items-start px-1 py-2 bg-black transition ease-in duration-300`}
      >
        <button className=" bg-red-600 rounded-xl w-full h-8 text-white items-center justify-center">
          {" "}
          <Link href="#"> {item.button} </Link>
        </button>
        {item.links.map((link, i) => (
          <div key={i} className="flex flex-col items-start gap-2 pt-3">
            <p className="font-bold">{link.title}</p>
            <p className="text-slate-500">{link.link1}</p>
            <p className="text-slate-500">{link.link2}</p>
            <p className="text-slate-500">{link.link3}</p>
            <p className="text-slate-500">{link.link4}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideMobileItems;
