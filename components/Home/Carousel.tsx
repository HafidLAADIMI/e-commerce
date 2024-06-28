"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ItemProps {
  magazins: string[];
}

function Carousel({ magazins }: ItemProps) {
  const [index, setIndex] = useState<number>(0);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  const previous = () => {
    setIndex(index === 0 ? magazins.length - 1 : index - 1);
  };

  const next = useCallback(() => {
    setIndex(index === magazins.length - 1 ? 0 : index + 1);
  }, [magazins, index]);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      next();
    }, 2500);
    return () => {
      timeRef.current && clearTimeout(timeRef.current);
    };
  }, [next]);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {magazins.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-full">
            <Image
              src={item}
              height={500}
              width={500}
              alt={`image-${i}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 flex justify-center w-full space-x-2">
        {magazins.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      <button
        onClick={previous}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition"
      >
        <IoIosArrowBack className="text-2xl" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition"
      >
        <IoIosArrowForward className="text-2xl" />
      </button>
    </div>
  );
}

export default Carousel;
