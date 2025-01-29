"use client";
import { useState } from "react";
import { testimonials } from "@/app/lib/testimonials";
// import components
import Image from "@/app/ui/image";
// import icons
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

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
    <div className="relative flex flex-col items-center bg-black text-white p-4">
      <div className="relative flex flex-col items-center max-w-500">
        <div className="flex flex-row items-start lg:mx-32">
          <Image
            src="/images/apos.png"
            height={20}
            width={30}
            alt=""
            className="mr-8 lg:mr-16 lg:w-32 xl:w-40"
          />
          <div className="flex flex-col">
            <p className="lg:text-lg xl:text-xl 2xl:text-xl text-left mb-4 text-pretty font-bold">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-sm lg:text-lg text-left lg:mt-6 lg:ml-16">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-xs lg:text-sm text-left italic lg:ml-16">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 lg:bottom-10 right-0 lg:right-10 flex space-x-2 -mb-10 px-2">
          <button
            className="rounded-full border-2 p-1 cursor-pointer"
            onClick={handlePrevClick}>
            <FaArrowLeft size={14}/>
          </button>
          <button
            className="rounded-full border-2 p-1 cursor-pointer"
            onClick={handleNextClick}>
            <FaArrowRight size={14}/>
          </button>
        </div>
      </div>
    </div>
  );
}