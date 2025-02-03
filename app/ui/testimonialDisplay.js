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
    <div className="bg-black flex justify-center items-center py-12">
      <div className="bg-black text-white flex justify-center max-w-800">
        <div className="grid grid-cols-5 flex">
          <div className="justify-end">
            <Image
              src="/images/apos.png"
              height={20}
              width={30}
              alt=""
              className=""
            />
          </div>
          <div className="col-span-3">
            <p className="lg:text-lg xl:text-xl 2xl:text-xl text-left text-balance font-bold">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-sm lg:text-lg text-left lg:mt-6 lg:ml-16">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-xs lg:text-sm text-left italic lg:ml-16">
              {testimonials[currentIndex].role}
            </p>
          </div>
          <div className="space-x-2 mt-72">
            <button
              className="rounded-full border-2 p-1 cursor-pointer"
              onClick={handlePrevClick}
              aria-label="Previous testimonial"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              className="rounded-full border-2 p-1 cursor-pointer"
              onClick={handleNextClick}
              aria-label="Next testimonial"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>
        {/* <div className="relative flex flex-col items-center bg-black text-white pt-6 pb-16 max-w-400">
      <div className="relative flex flex-col items-center ">
        <div className="flex flex-row ">
        <div className=" absolute top-0 left-0">
          <Image
            src="/images/apos.png"
            height={20}
            width={30}
            alt=""
          />
          </div>
          <div className="relative p-12">
            <p className="lg:text-lg xl:text-xl 2xl:text-xl text-left text-balance font-bold">
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
    </div> */}
      </div>
    </div>
  );
}
