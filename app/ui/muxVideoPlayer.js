"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState, useRef } from "react";
// import from next
// import Image from "next/image";
// import from mux
import MuxPlayer from "@mux/mux-player-react";
// import images
// import whiteMmmLogo from "../../public/branding/white-mmm-logo-1200x488.png";

export default function MuxVideoPlayer({
  playbackId,
  title,
  autoPlay,
  loop,
  muted,
}) {
  const playerRef = useRef(null);
  // const imageRef = useRef(null);
  const prevTimeRef = useRef(0);
  const maxPlays = 1;
  const [playCount, setPlayCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoDataLoaded = (e) => {
    console.log("Video data loaded", e);
  };

  const handleVideoEnded = () => {
    track("Full video play", { video: title });
    // setPlayCount((playCount) => playCount + 1);
    // console.log(`Video played ${playCount + 1} times`);
  };

  const handleCanPlayThrough = () => {
    track("Video can play through", { video: title });
    console.log("Video can play through");
    // setPlayCount((playCount) => playCount + 1);
    // console.log(`Video played ${playCount + 1} times`);
    // if (playCount + 1 >= maxPlays) {
    //   console.log("Max plays reached, pausing video");
    //   setIsPaused(true);
    //   setTimeout(() => {
    //     const video = playerRef.current?.querySelector("video");
    //     if (video) video.currentTime = 0;
    //   }, 100);
    // }
  };

  // Track loops using timeupdate
  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;

    // Detect loop: currentTime jumps from near end to near start
    if (
      prevTimeRef.current > duration - 0.5 &&
      currentTime < 0.5
    ) {
      setPlayCount((count) => {
        const newCount = count + 1;
        if (newCount >= maxPlays) {
          setIsPaused(true);
          // console.log("Max plays reached, pausing video", { video: title });
          setTimeout(() => {
            const video = playerRef.current?.querySelector("video");
            if (video) video.currentTime = 0;
          }, 100);
        }
        return newCount;
      });
      track("Video looped", { video: title, loopCount: playCount + 1 });
      // console.log(`Video looped ${playCount + 1} times`);
    }

    prevTimeRef.current = currentTime;
  };

  return (
    <>
      {/* {isPaused && (
        <div
          ref={imageRef}
          className="w-128 absolute top-4 left-4 z-10"
        >
          <Image priority src={whiteMmmLogo} alt="MMM logo" />
        </div>
      )} */}
      <div ref={playerRef}>
        <MuxPlayer
          paused={isPaused}
          playbackId={playbackId}
          title={title}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          disableCookies={true}
          poster=""
          onError={handleError}
          onLoadedData={handleVideoDataLoaded}
          onEnded={handleVideoEnded}
          onCanPlayThrough={handleCanPlayThrough}
          onTimeUpdate={handleTimeUpdate}
          // metadata={{
          //   video_title: title,
          //   title: title,
          // }}
        />
      </div>
    </>
  );
}
