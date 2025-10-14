// "use client";
// import from next
// import dynamic from "next/dynamic";
// import from react
// import { useState } from "react";
import MuxPlayer from "@mux/mux-player-react";

// const MuxPlayerNoSSR = dynamic(() => import("@mux/mux-player-react"), {
//   ssr: false,
// });

export default function MuxVideoPlayer({ playbackId, title, autoPlay, loop, muted }) {
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoDataLoaded = (e) => {
    console.log("Video data loaded");
  }

  return (
    <MuxPlayer
      playbackId={playbackId}
      title={title}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      disableCookies={true}
      poster=""
      onError={handleError}
      onLoadedData={handleVideoDataLoaded}
      // metadata={{
      //   video_title: title,
      //   title: title,
      // }}
    />
  );
}
