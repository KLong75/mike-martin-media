"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import Link from "next/link";
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
  console.log("PortfolioPhotoGallery client prop:", client);
  const clientPhotoData = photographyWorkSampleData.filter(
    (data) => data.client === client
  );
  // console.log("clientPhotoData for client", client, ":", clientPhotoData);
  const clientImages = clientPhotoData[0].images;
  console.log("clientImages:", clientImages);
  const isPrasino = client === "Prasino";
  console.log("isPrasino:", isPrasino);
  return (
    <section className="text-center mx-auto w-full p-6 pb-0 md:p-12 md:pb-0 flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold">
        {`${clientPhotoData[0].client} Photo Gallery`}
      </h1>
      <Swiper
        className="photo-swiper"
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}>
        {clientImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className={isPrasino ? "w-full md:p-4" : "w-full max-w-144 h-auto mx-auto"}>
              <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                width={clientPhotoData[0].width}
                height={clientPhotoData[0].height}
                priority
                className="p-12"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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