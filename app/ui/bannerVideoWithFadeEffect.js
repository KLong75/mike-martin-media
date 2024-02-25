// import from next
import Image from "next/image";
// import from react
import { useState, useEffect } from "react";
import MMMLineLogoBlack from "./mmmLineLogoBlack";

export default function BannerVideoWithFadeEffect({ src, title }) {
  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 4000);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 500);
    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
    };
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 ">
      <div className="relative flex justify-center">
        <div
          className="w-full banner-video-aspect-ratio-container"
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
          className={`absolute -mt-14 transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <Image
            priority
            src="/branding/black_mmm_large.png"
            width={816}
            height={612}
            alt="Mike Martin Media logo"
          />
        </div>
      </div>
      {/* <div className="-mt-4 lg:-mt-12">
    <MMMLineLogoBlack />
    </div> */}
    </section>
  );
}
