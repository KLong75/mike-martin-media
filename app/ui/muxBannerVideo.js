"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState, useRef, useEffect } from "react";
// import from next
import Image from "next/image";
// import from mux
import MuxPlayer from "@mux/mux-player-react";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-1200x488.png";
// import from react-icons
import { BsPlayBtnFill } from "react-icons/bs";

export default function MuxBannerVideo({
  playbackId,
  title,
  autoPlay = false,
  loop,
  muted,
  poster,
  className,
}) {
  // const now = Date.now();
  const maxPlays = 6;
  const playerRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const prevTimeRef = useRef(0);
  const [playCount, setPlayCount] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [inViewport, setInViewport] = useState(false);
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  // const handleVideoDataLoaded = (e) => {
  //   console.log(`Video data loaded: ${title}`);
  //   setIsPaused(false);
  // };

  // const handleVideoPlaying = () => {
  //   console.log(`Video playing: ${title}, ${now}`);
  // };

  // const handlePaused = () => {
  //   console.log(`Video paused: ${title}, ${now}`);
  // };

  const handleVideoEnded = () => {
    track("Full video play", { video: title });
  };

  // Track loops using timeupdate
  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    // Detect loop: currentTime jumps from near end to near start
    if (prevTimeRef.current > duration - 0.5 && currentTime < 0.5) {
      setPlayCount((count) => {
        const newCount = count + 1;
        if (newCount >= maxPlays) {
          setIsPaused(true);
          // console.log("Max plays reached, pausing video", { video: title });
          // setTimeout(() => {
          //   const video = playerRef.current?.querySelector("video");
          //   if (video) video.currentTime = 0;
          // }, 100);
        }
        // track("Video looped", { video: title, loopCount: newCount });
        // console.log(`${title} Video looped ${newCount} times`);
        return newCount;
      });
    }
    prevTimeRef.current = currentTime;
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.25 } // Adjust as needed
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Only unpause if in viewport and maxPlays not reached
    if (inViewport && playCount < maxPlays) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
      // console.log(
      //   `Video "${title}" paused (inViewport: ${inViewport}, playCount: ${playCount})`
      // );
    }
    // if (!inViewport) {
    //   console.log(`Video "${title}" paused because it left the viewport`);
    //   setIsPaused(true);
    //   // setPlayCount(0);
    // }
  }, [inViewport, playCount, maxPlays]);

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      {isPaused && playCount >= maxPlays && (
        <div
          ref={imageRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-40 w-full h-full"></div>
          <Image
            priority
            src={whiteMmmLogo}
            alt="MMM logo"
            className="w-40 md:w-48 lg:w-56 xl:w-64 2xl:w-72 h-auto opacity-100 z-20"
          />
          <button
            className="text-white z-20 hover:text-gray-300 hover:scale-105 active:scale-95"
            onClick={() => {
              setIsPaused(false);
              setPlayCount(0);
            }}
            title={`Play ${title}`}>
            <BsPlayBtnFill size={36} />
          </button>
        </div>
      )}
      <div ref={playerRef}>
        <MuxPlayer
          preload="auto"
          paused={isPaused}
          playbackId={playbackId}
          title={title}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          disableCookies={true}
          disableTracking={true}
          respectDoNotTrack={true}
          poster={poster}
          onError={handleError}
          // onLoadedData={handleVideoDataLoaded}
          // onPlay={handleVideoPlaying}
          onEnded={handleVideoEnded}
          // onCanPlayThrough={handleCanPlayThrough}
          onTimeUpdate={handleTimeUpdate}
          className={className}
          playsInline
        />
      </div>
    </div>
  );
}