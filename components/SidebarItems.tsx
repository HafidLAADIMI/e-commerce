"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiStarSFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface TableBodyItem {
  col1: string;
  col2: string;
  col3: string;
}

interface Item {
  title: string;
  table: {
    tableHeader: {
      col1: string;
      col2: string;
      col3: string;
    };
    tableBody: TableBodyItem[];
  };
  card: {
    title: string;
    promotion: string;
    image: string;
    redTitle: string;
    caracters: string;
    oldPrice: string;
    price: string;
  };
}

interface PropsItem {
  item: Item;
}

function SidebarItems({ item }: PropsItem) {
  const img = "/chair.png";
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col gap-1 font-sans pl-3 pr-5 z-50"
      >
        <Link href="#" className="flex flex-row items-center gap-2">
          <p>{item.title}</p>
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isHovered ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </motion.div>
        </Link>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute z-50 left-0 top-full flex flex-row items-center justify-between w-screen px-3 py-2 h-[50vh] shadow-md shadow-slate-600 bg-black"
            >
              <div className="flex w-[50%] h-[90%]">
                <table className="w-[100%]">
                  <thead>
                    <tr className="text-white font-bold">
                      <td>{item.table.tableHeader.col1}</td>
                      <td>{item.table.tableHeader.col2}</td>
                      <td>{item.table.tableHeader.col3}</td>
                    </tr>
                  </thead>
                  <tbody className="gap-8 text-slate-400">
                    {item.table.tableBody.map((e, i) => (
                      <tr key={i}>
                        <td>{e.col1}</td>
                        <td>{e.col2}</td>
                        <td>{e.col3}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex flex-row items-center h-[90%] px-3 py-2">
                <div className="flex flex-col items-start gap-4">
                  <p className="text-slate-600">{item.card.title}</p>
                  <div className="h-[33vh] w-[30vh] border-2 border-red-600 rounded-lg flex flex-col items-start">
                    <div className="h-10 w-10 mt-2 ml-2 items-center justify-center rounded px-1 bg-red-500">
                      {item.card.promotion}
                    </div>
                    <Image
                      height={500}
                      width={500}
                      alt="image"
                      src={item.card.image}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 px-4">
                  <p className="text-red-600">{item.card.redTitle}</p>
                  <h3 className="font-bold">{item.card.caracters}</h3>
                  <div className="flex flex-row items-center gap-0">
                    <RiStarSFill className="text-xl font-bold text-orange-600" />
                    <RiStarSFill className="text-xl font-bold text-orange-600" />
                    <RiStarSFill className="text-xl font-bold text-orange-600" />
                    <RiStarSFill className="text-xl font-bold text-orange-600" />
                  </div>
                  <p className="line-through text-slate-600">
                    {item.card.oldPrice}
                  </p>
                  <p className="font-bold">{item.card.price}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default SidebarItems;
