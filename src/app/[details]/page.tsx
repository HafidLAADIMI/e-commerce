"use client";
import React from "react";
import Carousel from "../../../components/Home/details/Carousel";
import Header from "../../../components/Home/details/Header";
function Page() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="mt-3">
        <Carousel />
      </div>
    </div>
  );
}

export default Page;
