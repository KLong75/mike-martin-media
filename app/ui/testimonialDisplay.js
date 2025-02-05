"use client";
import { useState } from "react";
// import components
import Image from "@/app/ui/image";
// import icons
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// import data
import { testimonials } from "../lib/testimonials";

export default function TestimonialDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center items-center bg-black text-white lg:h-[28vh]">
      <div className="relative flex flex-col px-6 max-w-400">
        <div className="relative flex flex-col items-center py-12">
          <div className="flex flex-row space-x-12">
            <span className="text-6xl md:text-8xl lg:text-10xl xl:text-12xl italic lg:-mt-2">&quot;</span>
            <div className="relative p-2 ">
              <p className="lg:text-lg xl:text-xl 2xl:text-xl lg:px-12 font-bold pr-2">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-sm lg:text-lg lg:ml-20 lg:px-12 mt-12">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs lg:text-sm italic lg:ml-20 lg:px-12">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>
          <div className="absolute bottom-[4rem] lg:bottom-10 right-[2rem] lg:right-10 flex space-x-2 -mb-10 p-2">
            <button
              className="rounded-full border-2 p-1 cursor-pointer"
              onClick={handlePrevClick}>
              <FaArrowLeft size={14} />
            </button>
            <button
              className="rounded-full border-2 p-1 cursor-pointer"
              onClick={handleNextClick}>
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}