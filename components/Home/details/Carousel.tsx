"use client"
import React, { useState } from "react";
import Card from "../Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
function Carousel() {
  const img = "/chair.png";
 
  const cardInfo = [
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
    {
      image: img,
      iconTitle: "CONFIGURATION",
      redTitle: "Setup Game",
      caracters: " AIRFLOW – INTEL CORE I5 11400F-RADEON RX 580 8GB",
      price: "4,849.00MAD",
    },
  ];
  const [index, setIndex] = useState<number>(0);
  const getDvision = () => {
    if (window.innerWidth <1024) return Math.floor(cardInfo.length/2)- 1;
     else  return Math.floor(cardInfo.length/3-1);
  };

  const previous = () => {
    setIndex(index === 0 ? getDvision() : index - 1);
  };

  const next= () => {
    setIndex(index === getDvision() ? 0 : index + 1);
  };
  return (
    <div className="overflow-hidden gap-2 w-[94vw]  sm:w-[91vw] lg:w-[99.5vw]">
      <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {cardInfo.map((item, i) => (
          <Card key={i} item={item} /> 
        ))}
      </div>
      <div>
        <button
          onClick={previous}
          className=" bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition"
        >
          <IoIosArrowBack className="text-4xl" />
        </button>
        <button
          onClick={next}
          className="  bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition"
        >
          <IoIosArrowForward className="text-4xl" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
