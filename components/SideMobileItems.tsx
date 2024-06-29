"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";

interface LinkItem {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

interface Item {
  title: string;
  button: string;
  links: LinkItem[];
}

interface PropsItem {
  item: Item;
}

const containerVariants = {
  hidden: { opacity: 0, y:1.5},
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function SideMobileItems({ item }: PropsItem) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-4">
      <Link
        onClick={() => setIsClicked(!isClicked)}
        className="flex flex-row items-center justify-between px-2"
        href="#"
      >
        <p className="mt-2">{item.title}</p>
        {isClicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </Link>
      <motion.div
        initial="hidden"
        animate={isClicked ? "visible" : "hidden"}
        variants={containerVariants}
        className={`${
          isClicked ? "flex" : "hidden"
        } flex-col w-full items-start px-1 py-2 bg-black transition ease-in duration-300`}
      >
        <button className="bg-red-600 rounded-xl w-full h-8 text-white items-center justify-center">
          <Link href="#">{item.button}</Link>
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
      </motion.div>
    </div>
  );
}

export default SideMobileItems;
