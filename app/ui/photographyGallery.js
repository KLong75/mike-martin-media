"use client";
// import from vercel
import { track } from '@vercel/analytics';
// import from react
import { useState } from "react";
// import from next
import Image from "next/image";
// import from headlessui
import { Dialog } from "@headlessui/react";
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

export default function PhotographyGallery({
  client,
  cover_img_src,
  width,
  height,
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
        <div className="flex justify-center items-center w-full h-auto">
        <div className="grid grid-cols-1">
          <div
            className="w-full h-auto text-white relative justify-center items-center md:hover:cursor-pointer md:hover:transform md:hover:scale-105 hover:z-40 md:transition-transform "
            onClick={handleCoverImageClick}>
            <Image
              id="gallery-cover-image"
              client={client}
              src={cover_img_src}
              alt={`${client} photo gallery`}
              width={width}
              height={height}
              priority
            />
            <h2 className=" text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-bold">
              {client}
            </h2>
          </div>
        </div>
      </div>

      <Dialog
        open={photoGalleryOpen}
        onClose={() => setPhotoGalleryOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black z-50" />
        <Dialog.Panel className="fixed inset-0 z-50 overflow-auto flex justify-center items-center">
          <div className="w-full max-w-4xl p-4">
            <div className="flex justify-end items-start w-full">
              <button
                onClick={handleCloseButtonClicked}
                className="fixed top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <HiX className="h-6 w-6" />
              </button>
            </div>
            <div className="flex justify-center items-center ">
              <Dialog.Title className="fixed top-12 md:top-18 text-2xl font-bold text-white">
                {client}
              </Dialog.Title>
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
                                : "grid grid-cols-1 w-80"
                            }>
                            <Image
                              className={
                                client === "Prasino"
                                  ? "md:p-10 mb-12 md:mb-4"
                                  : "p-4 mb-12"
                              }
                              src={image.src}
                              alt={image.alt || "Gallery image"}
                              width={width}
                              height={height}
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
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
