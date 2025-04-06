"use client";
import { useEffect, useState } from "react";
import { testimonials } from "../lib/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialDisplay() {
  const [shuffledTestimonials, setShuffledTestimonials] = useState([]);

  useEffect(() => {
    // Shuffle the entire array once
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    setShuffledTestimonials(shuffled);
  }, []);

  return (
    <div className="bg-black text-white lg:h-[22.5rem] flex justify-center items-center">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{ prevEl: ".testimonial-prev", nextEl: ".testimonial-next" }}
        loop
        slidesPerView={1}
        speed={2000}
        className="relative w-full max-w-4xl"
      >
        {shuffledTestimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row space-x-4 lg:space-x-8 py-12 px-4 max-w-800">
              <span className="text-6xl md:text-8xl lg:text-10xl xl:text-12xl italic lg:-mt-2">
                &quot;
              </span>
              <div className="p-2">
                <p className="lg:text-lg xl:text-xl 2xl:text-xl lg:px-12 font-bold pr-2">
                  {testimonial.text}
                </p>
                <p className="text-sm lg:text-lg lg:px-12 mt-6">{testimonial.name}</p>
                <p className="text-xs lg:text-sm italic lg:px-12">{testimonial.org}</p>
                <p className="text-xs lg:text-sm italic lg:px-12">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute bottom-[4rem] lg:bottom-20 right-0 lg:right-24 flex space-x-2 -mb-10 p-2 pr-6 lg:pr-0 z-10">
          <button aria-label="previous testimonial" className="testimonial-prev rounded-full border-2 p-1 cursor-pointer">
            <FaArrowLeft size={14} />
            <span className="sr-only">previous testimonial</span>
          </button>
          <button aria-label="next testimonial" className="testimonial-next rounded-full border-2 p-1 cursor-pointer">
            <FaArrowRight size={14} />
            <span className="sr-only">next testimonial</span>
          </button>
        </div>
      </Swiper>
    </div>
  );
}