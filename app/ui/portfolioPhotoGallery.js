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
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import data
import { photographyWorkSampleData } from "@/app/lib/data";

export default function PortfolioPhotoGallery({ client }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const swiperRef = useRef(null);
  const clientPhotoData = photographyWorkSampleData.filter(
    (data) => data.client === client
  );
  const clientImages = clientPhotoData[0].images;
  const isPrasino = client === "Prasino";

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
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl md:-mb-6 ">
        {`${clientPhotoData[0].client}`}
      </h1>
      <Swiper
        className="photo-swiper"
        spaceBetween={30}
        loop={true}
        slidesPerView={"auto"}
        effect={"fade"}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {clientImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={
                isPrasino ? "w-full md:p-4" : "w-full max-w-144 h-auto mx-auto"
              }
              style={{ cursor: "pointer" }}
              onClick={() => {
                setFullScreenImage(image);
                track("image_view", { client, image: image.title });
              }}>
              <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                width={clientPhotoData[0].width}
                height={clientPhotoData[0].height}
                priority
                className="p-2 sm:p-6 md:p-8 lg:p-12 mb-12 sm:mb-6 md:mb-0"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {fullScreenImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setFullScreenImage(null)}>
          <Image
            src={fullScreenImage.src}
            alt={fullScreenImage.alt || "Gallery image"}
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

// "use client";
// import { useState } from "react";
// import { track } from "@vercel/analytics/react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { photographyWorkSampleData } from "@/app/lib/data";

// export default function PortfolioPhotoGallery({ client }) {
//   const [fullscreenIndex, setFullscreenIndex] = useState(null);
//   const clientPhotoData = photographyWorkSampleData.filter(
//     (data) => data.client === client
//   );
//   const clientImages = clientPhotoData[0].images;
//   const isPrasino = client === "Prasino";

//   return (
//     <section className="text-center mx-auto w-full p-6 pb-0 md:p-12 md:pb-0 flex flex-col justify-center items-center">
//       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
//         {`${clientPhotoData[0].client} Photo Gallery`}
//       </h1>
//       <Swiper
//         className="photo-swiper"
//         spaceBetween={30}
//         loop={true}
//         effect={"fade"}
//         navigation={{ clickable: true }}
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         modules={[Autoplay, EffectFade, Navigation, Pagination]}
//       >
//         {clientImages.map((image, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className={isPrasino ? "w-full p-4" : "w-144 h-auto mx-auto"}
//               style={{ cursor: "pointer" }}
//               onClick={() => setFullscreenIndex(index)}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt || "Gallery image"}
//                 width={clientPhotoData[0].width}
//                 height={clientPhotoData[0].height}
//                 priority
//                 className="p-12"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {fullscreenIndex !== null && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
//           onClick={() => setFullscreenIndex(null)}
//         >
//           <Image
//             src={clientImages[fullscreenIndex].src}
//             alt={clientImages[fullscreenIndex].alt || "Gallery image"}
//             width={clientPhotoData[0].width}
//             height={clientPhotoData[0].height}
//             priority
//             className="max-w-full max-h-full"
//           />
//         </div>
//       )}
//     </section>
//   );
// }
