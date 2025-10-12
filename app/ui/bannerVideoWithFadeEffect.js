"use client";
// import from react
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// import from next
import { usePathname } from "next/navigation";
// import from next video
// import Video from "next-video";
// import from mux
// import MuxPlayer from "@mux/mux-player-react";
// import components
import Image from "./image";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-1200x488.png";

// const MuxPlayerNoSSR = dynamic(() => import("@mux/mux-player-react"), {
//   ssr: false,
// });

export default function BannerVideoWithFadeEffect({
  // src,
  // title,
  containerClassName,
}) {
  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [letters, setLetters] = useState([]);

  const pathname = usePathname();

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 1000);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 100);
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
    <section className="grid grid-cols-1">
      <div
        id="grandparent-of-player"
        className={`w-full h-auto relative transition-colors duration-24000 ease-in-out ${
          showVideo ? "bg-white" : "bg-black"
        }`}>
        <div
          className={`${containerClassName} banner-video-aspect-ratio-container w-full h-auto transition-opacity duration-6000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}>
          {/* <MuxVideoPlayerContainer /> */}
          {/* <MuxPlayerNoSSR
            autoPlay
            muted
            loop
            controls={false}
            playbackId={src}
            metadata={{
              video_title: title,
            }}
            style={{ width: "100%", height: "100%" }}
          /> */}
        </div>
        {/* heading */}
        {pathname === "/" && (
          <div
            className={`absolute bottom-[-1rem] xs:bottom-[-1.25rem] sm:bottom-[-2.1rem] md:bottom-[-2.5rem] lg:bottom-[-3rem] xl:bottom-[-4rem] 2xl:bottom-[-4.5rem] 3xl:bottom-[-5.75rem] 4xl:bottom-[-7rem] 5xl:bottom-[-8rem] text-center text-[12.5vw] text-white tracking-tight font-bold w-full whitespace-nowrap transition-opacity duration-4000 ease-in-out ${
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
        )}
        {/* Logo */}
        <div
          className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-100 md:w-144 justify-center items-center absolute transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <Image priority src={whiteMmmLogo} alt="MMM logo" />
        </div>
      </div>
    </section>
  );
}
