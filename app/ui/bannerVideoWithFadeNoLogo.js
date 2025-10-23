"use client";
// import from react
import { useState, useEffect } from "react";
// import components
import MuxBannerVideo from "./muxBannerVideo";

export default function BannerVideoWithFadeNoLogo({
  src,
  title,
  containerClassName,
  autoPlay,
  loop,
  muted,
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 0);
    return () => {
      clearTimeout(videoFadeTimer);
    };
  }, []);

  return (
    <section className="grid grid-cols-1">
      <div
        className={`relative flex justify-center transition-colors duration-18000 ease-in-out ${
          showVideo ? "bg-black" : "bg-black"
        }`}>
        <div
          className={`banner-video-aspect-ratio-container w-full transition-opacity duration-2000 ease-in-out ${
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
                className="auto-play-banner-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
