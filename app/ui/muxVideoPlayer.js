"use client";
// import from next
import dynamic from "next/dynamic";
// import from react
// import { useState } from "react";

const MuxPlayerNoSSR = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

export default function MuxVideoPlayer({ playbackId, title, autoPlay, loop, muted }) {
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoDataLoaded = (e) => {
    console.log("Video data loaded");
  }

  return (
    <MuxPlayerNoSSR
      playbackId={playbackId}
      title={title}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      disableCookies={true}
      poster=""
      onError={handleError}
      onLoadedData={handleVideoDataLoaded}
      // style={{ width: "100%", height: "100%" }}
    />
  );
}
