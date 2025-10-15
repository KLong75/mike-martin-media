"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from react
import { useState, useRef } from "react";
// import from mux
import MuxPlayer from "@mux/mux-player-react";

export default function MuxVideoPlayer({
  playbackId,
  title,
  autoPlay,
  loop,
  muted,
}) {
  const playerRef = useRef(null);
  const maxPlays = 6;
  const [playCount, setPlayCount] = useState(-1);
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
    setPlayCount((playCount) => playCount + 1);
    console.log(`Video played ${playCount + 1} times`);
    if (playCount + 1 >= maxPlays) {
      console.log("Max plays reached, pausing video");
      setIsPaused(true);
      setTimeout(() => {
        const video = playerRef.current?.querySelector("video");
        if (video) video.currentTime = 0;
      }, 100);
    }
  };

  return (
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
      // onTimeUpdate={handleTimeUpdate}
      // metadata={{
      //   video_title: title,
      //   title: title,
      // }}
    />
    </div>
  );
}
