"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
import { usePathname } from "next/navigation";
// import components
import Image from "./image";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-1200x488.png";

export default function BannerVideoWithFadeEffect({ src, title }) {
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
    const hideHeadingTimer = setTimeout(() => {
      setShowHeading(false);
    }, 12000);

    // Split the text into individual letters and set the state
    const text = "IDEAS IN MOTION";
    const lettersArray = text.split("").map((letter, index) => ({
      letter,
      delay: index * 200, // Adjust the delay as needed
    }));
    setLetters(lettersArray);

    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
      clearTimeout(showHeadingTimer);
      clearTimeout(hideHeadingTimer);
    };
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 gap-4 ">
        <div
          className={`relative flex justify-center transition-colors duration-24000 ease-in-out ${
            showVideo ? "bg-white" : "bg-black"
          }`}>
          <div
            className={`banner-vid-with-fade-container banner-video-aspect-ratio-container w-full transition-opacity duration-6000 ease-in-out ${
              showVideo ? "opacity-100" : "opacity-0"
            }`}>
            <iframe
              loading="lazy"
              title={title}
              src={src}
              allow="autoplay"
              className="absolute top-0 left-0 w-full h-full"></iframe>
          </div>
          {/* heading */}
          {pathname === "/" && (
          <div>
            <div
              className={`absolute bottom-[-1rem] xs:bottom-[-1.5rem] sm:bottom-[-2.25rem] md:bottom-[-2.75rem] lg:bottom-[-3rem] xl:bottom-[-4rem] 2xl:bottom-[-4.75rem] 3xl:bottom-[-6rem] 4xl:bottom-[-8rem] left-0 xl:left-[-.25rem] right-0 text-center text-[12.5vw] text-white tracking-tight font-bold w-full whitespace-nowrap  transition-opacity duration-4000 ease-in-out ${
                showHeading ? "opacity-100" : "opacity-0"
              }`}>
              {/* <span className="inline-block w-full">IDEAS IN MOTION</span> */}
              {letters.map((item, index) => (
                  <span
                    key={index}
                    className="fade-heading opacity-0 animate-fade-in"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    {item.letter}
                  </span>
                ))}
            </div>
          </div>
          )}


          {/* Logo */}
          <div
            className={`left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-100 md:w-144 lg:w-200  justify-center items-center absolute transition-opacity duration-8000 ease-in-out ${
              hideLogo ? "opacity-0" : "opacity-100"
            }`}>
            <Image priority src={whiteMmmLogo} alt="MMM logo" />
            {/* <h1 className="text-center text-2xl hidden ">
            MIKE MARTIN MEDIA | VIDEO PRODUCTION AND CREATIVE SERVICES
          </h1> */}
          </div>
          {/* <div
          className={`left-1/2 bottom-0 transform -translate-x-1/2  absolute transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <h1 className="-mb-2 text-center text-8xl text-white tracking-tight">
            IDEAS IN MOTION
          </h1>
        </div> */}
        </div>
      </section>
    </>
  );
}