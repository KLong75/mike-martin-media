"use client";
// import from react
import { useState, useEffect } from "react";
// import components
import MuxVideoPlayer from "./muxVideoPlayer";

export default function BannerVideoWithFadeNoLogo({
  src,
  title,
  containerClassName,
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
          {/* <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full">
          </iframe> */}
          <div className={`relative w-full ${containerClassName}`}>
            <div className="absolute top-0 left-0 w-full h-full">
              <MuxVideoPlayer
                // playbackId="HCzGV1FOwCPf6qOVtFyMzj6Cv83GxGZMH5M0193zd01EU"
                playbackId={src}
                title={title}
                autoPlay={true}
                loop={true}
                muted={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
