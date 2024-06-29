"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hover: { scale: 1.05 },
};

function Header() {
  const img = "/chair1.webp";
  const [isClicked, setClicked] = useState<boolean>(false);

  return (
    <motion.div
      className="flex flex-col lg:flex-row w-[95vw] gap-5 font-bold text-white bg-black shadow-sm shadow-white items-center mt-4 lg:mt-6 py-3 lg:px-5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Image
        src={img}
        height={500}
        width={500}
        alt="image"
        className=" object-contain w-[500px] rounded-md"
      />

      <motion.div
        className="flex flex-col lg:h-[50vh] lg:justify-between items-center"
        variants={containerVariants}
      >
        <motion.div
          className="items-start w-[90vw] lg:w-full"
          variants={itemVariants}
        >
          <small className="text-red-600 text-xl">Setup Game</small>
        </motion.div>
        <motion.div
          className="flex flex-row items-center justify-between w-[90vw] lg:w-full"
          variants={itemVariants}
        >
          <p>Hybrok Demon Red/Black</p>
          <p className="text-yellow-500">1,999.00 MAD</p>
        </motion.div>
        <motion.p
          className="w-[90vw] lg:w-full font-bold text-white"
          variants={itemVariants}
        >
          Sit comfortably in front of your computer in the Hybrok Demon chair
          with its pleasant seat, its faux leather covering, and its 2D
          armrests. Elegant with its black and red color and bucket design, it
          offers an ideal position for long gaming sessions.
        </motion.p>
        <motion.div className="w-[90vw] lg:w-full" variants={itemVariants}>
          <Link
            href="/auth"
            className="flex flex-row h-10 items-center justify-center gap-6 bg-red-600 text-xl rounded-lg"
          >
            <p>Buy Now</p>
            <GiShoppingCart className="text-3xl" />
          </Link>
        </motion.div>
        <motion.button
          onClick={() => setClicked(!isClicked)}
          className={`flex mt-4 flex-row h-10 items-center justify-center gap-6 w-[90vw] lg:w-full bg-emerald-500 border-1 border-slate-600 text-xl rounded-lg ${
            isClicked ? "text-red-600" : "text-white"
          }`}
          variants={buttonVariants}
          whileHover="hover"
        >
          <FaHeart className="text-3xl" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Header;
