"use client";
// import components
import MMMLineLogoHeading from "@/app/ui/mmmLineLogoHeading";
import MuxBannerVideo from "./muxBannerVideo";

export default function CapabilityHighLightsSection({
  headline,
  highlights,
  video_src,
  video_title,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="lg:px-6 2xl:px-0">
        <MMMLineLogoHeading headline={headline} heading_level={"h3"} />
      </div>
      <div className="lg:m-10 grid grid-cols-1 lg:grid-cols-2 w-full max-w-screen-2xl flex justify-center items-center">
        <div className="hidden lg:flex pl-12 pr-6">
          <MuxBannerVideo
            playbackId={video_src}
            title={video_title}
            autoPlay={false}
            loop={true}
            muted={true}
            className="auto-play-banner-video"
            poster=""
          />
        </div>
        <div className="flex justify-center pr-12 pl-6">
          <ul className="space-y-6 w-full">
            {highlights.map((highlight, index) => (
              <li key={index} className="relative lg:pb-6">
                <span className="lg:text-xl font-bold">{highlight.label}</span>
                <br />
                <span className="text-sm lg:text-lg inline-block">
                  {highlight.description}
                </span>
                <span
                  className="absolute bottom-0 left-0 border-b border-black"
                  style={{ width: "100%" }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
