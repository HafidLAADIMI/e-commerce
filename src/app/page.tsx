"use client";
import Head from "../../components/Home/Head";
import Card from "../../components/Home/Card";
import Button from "../../components/Home/Button";
import Carousel from "../../components/Home/Carousel";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export default function Home() {
  const magazin1 = "/magazin1.jpg";
  const magazin2 = "/magazin2.jpg";
  const magazin3 = "/magazin3.jpg";
  const magazin4 = "/magazin4.jpg";
  const magazins = [magazin1, magazin2, magazin3, magazin4];
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
  ];
  // const ref = useRef(null);
  // const isView = useInView(ref, { once: true });
  // const mainControl = useAnimation();
  // useEffect(() => {
  //   if (isView) {
  //     mainControl.start("visible");
  //   }
  // }, [isView, mainControl]);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.65, delay: 0.4 }}
      className="flex flex-col items-center  mt-2 gap-3 z-0 overflow-hidden "
    >
      <Head />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grids gap-2">
        {cardInfo.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
      <Button />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.65, delay: 0.4 }}
        className="flex flex-col lg:flex-row gap-3 text-slate-300 rounded-lg w-[90vw] md:w-[85vw] items-center p-3 lg: "
      >
        <div className="flex flex-col items-center lg:w-[50vw] ">
          <p className="text-3xl xl:text-4xl text-emerald-500 font-bold mb-6">
            Your Premier Retail Experience
          </p>
          <p className=" text-slate-200 font-bold font-serif md:text-2xl">
            Welcome to our premier gaming store, your destination for
            top-of-the-line gaming chairs and accessories. Explore our curated
            selection of high-quality gaming chairs designed for comfort and
            performance. Enjoy personalized recommendations from our expert team
            to enhance your gaming setup. Whether you are setting up your first
            gaming station or upgrading for a competitive edge, we have
            everything you need for the ultimate gaming experience. Shop with us
            and elevate your gaming comfort and style to new heights.
          </p>
        </div>
        <div className="lg:w-[500px]">
          <Carousel magazins={magazins} />
        </div>
      </motion.div>
    </motion.div>
  );
}
