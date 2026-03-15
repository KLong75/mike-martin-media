"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from next
import Image from "next/image";
// import from swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade} from "swiper/modules";
// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function AutoFadeImageGallery({ images }) {

  return (
    <div className="relative w-full mx-auto h-full overflow-hidden group shadow-xl">
      <Swiper
        className="photo-swiper"
        spaceBetween={30}
        loop={true}
        speed={2000}
        effect={"fade"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              alt={image.alt}
              src={image.url}
              width={image.width}
              height={image.height}
              priority={image.priority}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}