"use client"
import React from "react";
import { VscListSelection } from "react-icons/vsc";
import { IoLogoReact } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Sidebar from "./Sidebar";
import Link from "next/link";
import SideMobile from "./SideMobile";
import { useState } from "react";
function Navbar() {
    const  [clicked,setClicked]=useState<boolean>(false);
    console.log(clicked);
  return (
    <>
      {/* Desktop version */}
      <div className="bg-black text-slate-200 shadow-sm shadow-slate-700 hidden lg:flex flex-col z-50">
        <div className=" hidden md:flex  flex-row items-center justify-between w-screen h-16   py-3 px-8 ">
          <div className="flex  flex-row gap-8 items-center ">
            <Link onClick={()=>{clicked?setClicked(false):setClicked(true)}} href="#" className="text-3xl xl:hidden">
              <VscListSelection />
            </Link>
            <Link href="/" className="text-3xl">
              <IoLogoReact />
            </Link>
            <Link
              href="#"
              className="text-xl  flex-row items-center gap-1 hidden xl:flex"
            >
              <MdLocationPin />
              <p>find a store</p>
              <IoIosArrowDown />
            </Link>
            <Link
              href="#"
              className="text-xl hidden xl:flex flex-row items-center gap-1"
            >
              <IoIosSettings />
              <p>Configure Your PC</p>
            </Link>
          </div>
          <div className="flex  flex-row gap-8 items-center ">
            <Link href="#" className="text-xl">
              <p>Novelty</p>
            </Link>
            <Link href="#" className="text-xl">
              <p>Promotions</p>
            </Link>
            <div className="flex flex-row gap-0 text-black bg-slate-100 rounded-lg py-1 px-3  items-center my-2">
              <input
                type="text"
                placeholder="Search"
                className="flex outline-none rounded-lg bg-slate-100 "
              />
              <IoSearch className="text-3xl text-slate-300" />
            </div>
            <Link href="#" className="text-2xl">
              <MdLightMode />
            </Link>
            <Link href="/admin" className="text-2xl">
              <FaUser />
            </Link>
            <Link href="#" className="text-2xl">
              <FaCartShopping />
            </Link>
          </div>
        </div>
        <Sidebar />
      </div>
      {/* Mobile version  */}
      <div className="flex flex-col shadow-sm items-center bg-black text-slate-200  shadow-slate-700 lg:hidden">
        <div className="flex flex-row items-center justify-between w-screen h-16   py-3 px-8 ">
          <div className="flex  flex-row gap-8 items-center ">
            <Link onClick={()=>{clicked?setClicked(false):setClicked(true)}} href="#" className="text-3xl">
              <VscListSelection />
            </Link>
            <Link href="/" className="text-3xl">
              <IoLogoReact />
            </Link>
          </div>
          <div className="flex flex-row gap-6 items-center ">
            <Link href="#" className="text-3xl">
              <MdLightMode />
            </Link>
            <Link href="/admin" className="text-3xl">
              <FaUser />
            </Link>
            <Link href="#" className="text-3xl">
              <FaCartShopping />
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-0 bg-slate-100 rounded-lg py-1 px-3  items-center my-2">
          <input
            type="text"
            placeholder="Search"
            className="flex outline-none text-black rounded-lg bg-slate-100 "
          />
          <IoSearch className="text-3xl text-black" />
        </div>
      </div>
      <SideMobile clicked={clicked}/>
    </>
  );
}

export default Navbar;
