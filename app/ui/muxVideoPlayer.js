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

export default function MuxVideoPlayer({
  playbackId,
  title,
  autoPlay,
  loop,
  muted,
}) {
  const maxPlays = 1;
  const playerRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const prevTimeRef = useRef(0);
  const [playCount, setPlayCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inViewport, setInViewport] = useState(true);
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoDataLoaded = (e) => {
    console.log(`Video data loaded: ${title}`);
  };

  const handleVideoPlaying = () => {
    console.log(`Video playing: ${title}`);
  };

  // const handlePaused = () => {
  //   console.log(`Video paused: ${title}`);
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
          console.log("Max plays reached, pausing video", { video: title });
          // setTimeout(() => {
          //   const video = playerRef.current?.querySelector("video");
          //   if (video) video.currentTime = 0;
          // }, 100);
        }
        // track("Video looped", { video: title, loopCount: newCount });
        console.log(`${title} Video looped ${newCount} times`);
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

  return (
    <div className="relative w-full" ref={containerRef}>
      {isPaused && (
        <div
          ref={imageRef}
          className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <Image
            priority
            src={whiteMmmLogo}
            alt="MMM logo"
            className="w-80 h-auto opacity-100 z-20"
            // style={{ opacity: 1 }}
          />
          <button
            className="text-white z-20 hover:text-gray-300 hover:scale-105 active:scale-95"
            onClick={() => {
              setIsPaused(false);
              setPlayCount(0);
              // setTimeout(() => {
              //   const video = playerRef.current?.querySelector("video");
              //   if (video) video.currentTime = 0;
              // }, 100);
            }}
            title={`Play ${title}`}>
            <BsPlayBtnFill size={40} />
          </button>
        </div>
      )}
      <div ref={playerRef}>
        <MuxPlayer
          paused={isPaused || !inViewport}
          playbackId={playbackId}
          title={title}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          disableCookies={true}
          poster=""
          onError={handleError}
          onLoadedData={handleVideoDataLoaded}
          onPlay={handleVideoPlaying}
          onEnded={handleVideoEnded}
          // onCanPlayThrough={handleCanPlayThrough}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </div>
  );
}

// "use client";
// // import from vercel
// import { track } from "@vercel/analytics";
// // import from react
// import { useState, useRef } from "react";
// // import from mux
// import MuxPlayer from "@mux/mux-player-react";

// export default function MuxVideoPlayer({
//   playbackId,
//   title,
//   autoPlay,
//   loop,
//   muted,
// }) {
//   const playerRef = useRef(null);
//   const maxPlays = 1;
//   const [playCount, setPlayCount] = useState(-1);
//   const [isPaused, setIsPaused] = useState(false);

//   const handleError = (e) => {
//     console.error("Mux Player Error:", e);
//   };

//   const handleVideoDataLoaded = (e) => {
//     console.log("Video data loaded", e);
//   };

//   const handleVideoEnded = () => {
//     track("Full video play", { video: title });
//     // setPlayCount((playCount) => playCount + 1);
//     // console.log(`Video played ${playCount + 1} times`);
//   };

//   const handleCanPlayThrough = () => {
//     track("Video can play through", { video: title });
//     console.log("Video can play through");
//     setPlayCount((playCount) => playCount + 1);
//     console.log(`Video played ${playCount + 1} times`);
//     if (playCount + 1 >= maxPlays) {
//       console.log("Max plays reached, pausing video");
//       setIsPaused(true);
//       setTimeout(() => {
//         const video = playerRef.current?.querySelector("video");
//         if (video) video.currentTime = 0;
//       }, 100);
//     }
//   };

//   return (
//     <div ref={playerRef}>
//     <MuxPlayer
//       paused={isPaused}
//       playbackId={playbackId}
//       title={title}
//       autoPlay={autoPlay}
//       loop={loop}
//       muted={muted}
//       disableCookies={true}
//       poster=""
//       onError={handleError}
//       onLoadedData={handleVideoDataLoaded}
//       onEnded={handleVideoEnded}
//       onCanPlayThrough={handleCanPlayThrough}
//       // onTimeUpdate={handleTimeUpdate}
//       // metadata={{
//       //   video_title: title,
//       //   title: title,
//       // }}
//     />
//     </div>
//   );
// }

// const handleCanPlayThrough = () => {
//   // track("Video can play through", { video: title });
//   console.log("Video can play through");
//   setPlayCount((playCount) => playCount + 1);
//   console.log(`Video played ${playCount + 1} times`);
//   if (playCount + 1 >= maxPlays) {
//     console.log("Max plays reached, pausing video");
//     setIsPaused(true);
//     setTimeout(() => {
//       const video = playerRef.current?.querySelector("video");
//       if (video) video.currentTime = 0;
//     }, 100);
//   }
// };
