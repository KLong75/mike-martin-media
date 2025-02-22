"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
// import Link from "next/link";
// import components
import Image from "./image";
// import from headlessui
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  DialogTitle,
} from "@headlessui/react";
// import icons
import { HiX } from "react-icons/hi";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import data
import { photographyWorkSampleData } from "@/app/lib/data";

export default function PhotoGallery({
  client,
  alt,
  src,
  width,
  height,
  priority,
  category,
}) {
  const [photoGalleryOpen, setPhotoGalleryOpen] = useState(false);

  const handleCoverImageClick = () => {
    setPhotoGalleryOpen(true);
    track(`photo gallery view - ${client}`);
  };

  const handleCloseButtonClicked = () => {
    setPhotoGalleryOpen(false);
  };

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden group cursor-pointer"
        onClick={handleCoverImageClick}>
        {/* <Link href={href}> */}
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-125 ease-in-out"
        />
        {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-2000 ease-in-out"></div> */}
        <div className="absolute inset-0 bg-[#484848] opacity-45 group-hover:opacity-75 group-hover:bg-black  transition-bg duration-2000 ease-in-out"></div>
        <div className="lg:opacity-0 group-hover:opacity-100 duration-2000 ease-in-out" id="client-and-category-div">
        <span className="photo-gallery-client-name text-left absolute text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-4xl 5xl:text-4xl font-bold">
          {client}
        </span>
        <span className="photo-gallery-category text-left absolute text-xs lg:text-sm font-bold">
          {category.join(", ")}
        </span>
        </div>
      </div>
      <Dialog
        open={photoGalleryOpen}
        onClose={() => setPhotoGalleryOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black z-50" />
        <DialogPanel className="fixed inset-0 z-50 overflow-auto flex justify-center items-center">
          <div className="w-full max-w-4xl p-4">
            <div className="flex justify-end items-start w-full">
              <button
                onClick={handleCloseButtonClicked}
                className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <DialogTitle className="fixed top-12 md:top-18 text-xl md:text-2xl font-bold text-white">
                {client}
              </DialogTitle>
            </div>
            {/* Ensure a single Swiper for the selected gallery */}
            {photographyWorkSampleData
              .filter((gallery) => gallery.client === client)
              .map((gallery) => (
                <Swiper
                  className="photo-swiper"
                  speed={1200}
                  key={gallery.client} // Unique key for each Swiper based on the gallery client
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView="auto"
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={{ clickable: true }}
                  navigation={{ clickable: true }}>
                  {gallery.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="ml-4 mr-4">
                        <div className="flex justify-center items-center">
                          <div
                            className={
                              client === "Prasino"
                                ? "grid grid-cols-1 w-full"
                                : "grid grid-cols-1 max-w-2xl"
                            }>
                            <Image
                              className={
                                client === "Prasino"
                                  ? "md:p-10 mb-12 md:mb-4"
                                  : "p-4 mb-12"
                              }
                              src={image.src}
                              alt={image.alt || "Gallery image"}
                              width={gallery.width }
                              height={gallery.height }
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ))}
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}