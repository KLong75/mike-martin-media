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
    <div className="relative flex flex-col items-center bg-black text-white p-20 px-42">
      <div className="flex flex-row items-start mx-64">
        <Image
          src="/images/apos.png"
          height={39}
          width={60}
          alt=""
          className="mr-16 w-40"
        />
        <div className="flex flex-col">
          <p className="text-lg xl:text-xl 2xl:text-3xl text-left mb-4">
            {testimonials[currentIndex].text}
          </p>
          <p className="text-lg text-left mt-6">
            {testimonials[currentIndex].name}
          </p>
          <p className="text-sm text-left">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>
      <div className="absolute bottom-20 right-80 mt-4 mr-4 flex space-x-2">
        <button
          className="rounded-full border-2 p-1"
          onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button
          className="rounded-full border-2 p-1"
          onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}