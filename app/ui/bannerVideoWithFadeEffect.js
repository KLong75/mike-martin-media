"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import { usePathname } from "next/navigation";
// import components
import Image from "next/image";
import MuxBannerVideo from "./muxBannerVideo";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-1200x488.png";

export default function BannerVideoWithFadeEffect({
  src,
  title,
  containerClassName,
  autoPlay,
  loop,
  muted,
  poster
}) {
  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [letters, setLetters] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 600);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 0);
    const showHeadingTimer = setTimeout(() => {
      setShowHeading(true);
    }, 0);

    // Split the text into individual letters and set the state
    const text = "IDEAS IN MOTION";
    const lettersArray = text.split("").map((letter, index) => ({
      letter,
      delay: index * 200, // Adjust the delay as needed
    }));
    setLetters(lettersArray);

    const hideHeadingTimer = setTimeout(() => {
      setShowHeading(false);
    }, 8000);

    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
      clearTimeout(showHeadingTimer);
      clearTimeout(hideHeadingTimer);
    };
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 gap-4">
        <div
          className={`relative flex justify-center transition-colors duration-24000 ease-in-out ${
            showVideo ? "bg-black" : "bg-black"
          }`}>
          <div
            className={`banner-video-aspect-ratio-container w-full transition-opacity duration-6000 ease-in-out ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}>
            <div className={`relative w-full ${containerClassName}`}>
              <div className="absolute top-0 left-0 w-full h-full">
                <MuxBannerVideo
                  playbackId={src}
                  title={title}
                  autoPlay={autoPlay}
                  loop={loop}
                  muted={muted}
                  poster={poster}
                  className="auto-play-banner-video"
                />
              </div>
            </div>
          </div>
          {/* heading */}
          {pathname === "/" && (
            <div>
              <div
                className={`absolute -bottom-4 xs:-bottom-5 sm:bottom-[-2.1rem] md:-bottom-10 lg:-bottom-12 xl:-bottom-16 2xl:-bottom-18 3xl:-bottom-23 4xl:-bottom-28 5xl:-bottom-32 right-0 text-center text-[12.5vw] text-white tracking-tight font-bold w-full whitespace-nowrap transition-opacity duration-4000 ease-in-out ${
                  showHeading ? "opacity-100" : "opacity-0"
                }`}>
                {letters.map((item, index) => (
                  <span
                    key={index}
                    className="fade-heading opacity-0 animate-fade-in"
                    style={{ animationDelay: `${item.delay}ms` }}>
                    {item.letter}
                  </span>
                ))}
              </div>
            </div>
          )}
          {/* Logo */}
          <div
            className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 sm:w-72 md:w-96 lg:w-128 xl:w-144 justify-center items-center absolute transition-opacity duration-8000 ease-in-out ${
              hideLogo ? "opacity-0" : "opacity-100"
            }`}>
            <Image
              priority
              fetchPriority="high"
              src={whiteMmmLogo}
              alt="MMM logo"
              sizes="(max-width: 768px) 200px, (max-width: 1024px) 288px, (max-width: 1280px) 384px, 576px"
            />
          </div>
        </div>
      </section>
    </>
  );
}
