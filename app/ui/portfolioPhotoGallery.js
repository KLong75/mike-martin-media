"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import Link from "next/link";
// import from react
import { useEffect, useRef, useState } from "react";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import data
import { photographyWorkSampleData } from "@/app/lib/photographyWorkSampleData";
// import icons
import { SlSizeFullscreen } from "react-icons/sl";

export default function PortfolioPhotoGallery({ client }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const swiperRef = useRef(null);
  const clientPhotoData = photographyWorkSampleData.filter(
    (data) => data.client === client,
  );
  
  const clientImages = clientPhotoData[0].images;

  // Disable scroll and pause autoplay when fullscreen
  useEffect(() => {
    if (fullScreenImage !== null) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }
    // Clean up on unmount
    return () => {
      document.body.style.overflow = "";
      if (swiperRef.current && swiperRef.current.autoplay) {
        swiperRef.current.autoplay.start();
      }
    };
  }, [fullScreenImage]);

  return (
    <section className="text-center mx-auto w-full p-6 pb-0 md:p-12 md:pb-0 flex flex-col justify-center items-center font-bold">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xlfont-semibold mb-6">
        {`${clientPhotoData[0].client}`}
      </h1>
      <Swiper
        autoHeight={true}
        className="photo-swiper"
        spaceBetween={30}
        loop={true}
        slidesPerView={"auto"}
        speed={1000}
        // effect={"fade"}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}>
        {/* {clientImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={
               isPortrait ? "w-full max-w-lg h-auto mx-auto" : "w-full max-w-3xl h-auto mx-auto"
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFullScreenImage(image);
                track("image_view", { client, image: image.title });
              }}>
              <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                width={imageWidth}
                height={imageHeight}
                priority
                className="p-2 sm:p-6 md:p-8 lg:p-12 mb-12 sm:mb-6 md:mb-0"
              />
            </div>
          </SwiperSlide>
        ))} */}
        {clientImages.map((image, index) => {
          const isPortrait = image.orientation === "portrait";
          const imageWidth = isPortrait ? 1280 : 1920;
          const imageHeight = isPortrait ? 1920 : 1280;
          return (
            <SwiperSlide key={index}>
              <div
                className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center bg-white mb-12 aspect-3/2"
                style={
                  {
                    // aspectRatio: "3/2", // Use the widest ratio you expect (e.g., 3/2 for landscape)
                    // minHeight: "500px", // Fallback for browsers that don't support aspect-ratio
                    // maxHeight: "80vh",
                    // cursor: "pointer",
                  }
                }
                // onClick={() => {
                //   setFullScreenImage(image);
                //   track("image_view", { client, image: image.title });
                // }}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `${client} photo gallery image by MMM`}
                  width={imageWidth}
                  height={imageHeight}
                  priority
                  className="object-contain w-full h-full"
                />
                {/* <caption className="text-sm neutral-600 my-6">
                Click or tap image to view fullscreen
              </caption> */}
                <button
                  aria-label="View Fullscreen"
                  title="Enlarge Image"
                  className="text-white bg-black rounded-full my-4 p-2 hover:bg-opacity-75 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFullScreenImage(image);
                    track("image_view", { client, image: image.title });
                  }}>
                  <SlSizeFullscreen size={16} />
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {fullScreenImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
          onClick={() => setFullScreenImage(null)}>
          <Image
            src={fullScreenImage.src}
            alt={fullScreenImage.alt || `${client} Gallery image`}
            width={clientPhotoData[0].width}
            height={clientPhotoData[0].height}
            priority
            // className="max-w-[90vw] max-h-[90vh] w-auto h-auto"
            className="w-full h-full"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </section>
  );
}