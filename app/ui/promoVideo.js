// import from next
import Image from "next/image";
// import from react
import { useState, useEffect } from "react";
import MMMLineLogoBlack from "./mmmLineLogoBlack";


export default function PromoVideo({src, title}) {

  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 4000);
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
    <div className=" relative flex justify-center mt-3 ">
      <div
        className={`p-2 w-full max-w-4xl  transition-all duration-8000 ease-in-out ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}>
        <iframe
          title={title}
          src={src}
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-52 sm:w-full sm:h-80 md:w-full md:h-128 lg:w-full lg:h-144">
        </iframe>
      </div>
      {/* Logo */}
      <div
        className={`absolute -mt-14 p-6 transition-opacity duration-8000 ease-in-out ${
          hideLogo ? "opacity-0" : "opacity-100"
        }`}>
        <Image
          priority
          src="/branding/mmm_logo_with_text_resize.png"
          width={816}
          height={612}
          alt="Mike Martin Media logo"
        />
      </div>
    </div>
    <div className="-mt-4 lg:-mt-12">
    <MMMLineLogoBlack />
    </div>
  </section>
  );
}
