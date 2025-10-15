// "use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from mux
import MuxPlayer from "@mux/mux-player-react";

export default function MuxVideoPlayer({ playbackId, title, autoPlay, loop, muted }) {
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoDataLoaded = (e) => {
    console.log("Video data loaded");
  }

  const handleVideoEnded = () => {
    track("Full video play", { video: title });
  };

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
      onEnded={handleVideoEnded}
      // metadata={{
      //   video_title: title,
      //   title: title,
      // }}
    />
  );
}
