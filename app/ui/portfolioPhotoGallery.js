"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import Link from "next/link";
// import from react
// import React, { useRef, useState } from 'react';
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import data
import { photographyWorkSampleData } from "@/app/lib/data";

export default function PortfolioPhotoGallery({ client }) {
  console.log("PortfolioPhotoGallery client prop:", client);
  const clientPhotoData = photographyWorkSampleData.filter(
    (data) => data.client === client
  );
  // console.log("clientPhotoData for client", client, ":", clientPhotoData);
  const clientImages = clientPhotoData[0].images;
  // console.log("clientImages:", clientImages);
  return (
    <Swiper
      speed={1200}
      className="photo-swiper"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      navigation={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Navigation]}>
      {clientImages.map(
        (image, index) => (
          console.log("Rendering image:", image),
          (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <Image
                  src={image.src}
                  alt={image.alt || "Gallery image"}
                  width={clientPhotoData[0].width}
                  height={clientPhotoData[0].height}
                  priority
                />
              </div>
            </SwiperSlide>
          )
        )
      )}
    </Swiper>
  );
}
