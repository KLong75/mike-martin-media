"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
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
        className="relative w-full h-full overflow-hidden group"
        onClick={handleCoverImageClick}>
        {/* <Link href={href}> */}
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-1000 ease-in-out"></div>
        <h2 className="photo-gallery-client-name text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
          {client}
        </h2>
        {/* </Link> */}
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