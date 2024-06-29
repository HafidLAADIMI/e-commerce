"use client"
import React, { useEffect, useRef } from 'react';
import { FaTruck } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

function Service() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-2 bg-black shadow-md shadow-white text-slate-100 rounded-lg cursor-pointer hover:bg-slate-700 items-center justify-center transition ease-in duration-300 py-6 px-8 m-2"
    >
      <FaTruck className="text-4xl" />
      <h2 className="text-2xl font-bold text-slate-200">24/48 Hour Delivery</h2>
      <p className="text-lg font-semibold text-slate-300 text-center">
        Home delivery everywhere in Morocco
      </p>
    </motion.div>
  );
}

export default Service;
