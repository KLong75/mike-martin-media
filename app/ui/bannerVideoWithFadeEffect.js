// import from next
import Image from "next/image";
// import from react
import { useState, useEffect } from "react";


export default function BannerVideoWithFadeEffect({ src, title }) {
  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 800);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 0);
    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
    };
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 ">
      <div className="relative flex justify-center">
        <div
          className={`banner-video-aspect-ratio-container w-full transition-all duration-8000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          style={{
            paddingTop:
              title === "MMM_Livestreaming_Video" ||
              title === "MMM_Our_Work_Video"
                ? "42.2%"
                : title === "MMM_Photography_Slide_Show"
                ? "42.2%"
                : "56.25%",
          }}>
          <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
        {/* Logo */}
        <div
          className={`mt-12 sm:mt-24 w-16  w-72 sm:w-100 md:w-144 lg:w-200 xl:w-400 2xl:w-600 justify-center items-center absolute transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <Image
            priority
            src="/branding/black_mmm_large_crop_resize.png"
            width={1642}
            height={560}
            alt="Mike Martin Media logo"
          />
          <h1 className="text-center text-2xl hidden ">
              MIKE MARTIN MEDIA | VIDEO PRODUCTION AND CREATIVE SERVICES
            </h1>
        </div>
      </div>
      {/* <div className="-mt-4 lg:-mt-12">
    <MMMLineLogoBlack />
    </div> */}
    </section>
  );
}
