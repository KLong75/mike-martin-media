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
    }, 1000);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
    };
  }, []);

  return (
    <section className="grid grid-cols-1 gap-4 ">
     <div className={`relative flex justify-center transition-colors duration-16000 ease-in-out ${showVideo ? 'bg-white' : 'bg-black'}`}>
        <div
          className={`banner-video-aspect-ratio-container w-full transition-opacity duration-8000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          style={{
            paddingTop: "56.25%",
          }}>
          <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
        {/* Logo */}
        <div
          className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-100 md:w-144 lg:w-200  justify-center items-center absolute transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <Image
            priority
            src="/branding/whiteMmmLogo-1200x488.png"
            width={1200}
            height={488}
            alt="Mike Martin Media logo"
          />
          <h1 className="text-center text-2xl hidden ">
            MIKE MARTIN MEDIA | VIDEO PRODUCTION AND CREATIVE SERVICES
          </h1>
        </div>
      </div>
    </section>
  );
}
