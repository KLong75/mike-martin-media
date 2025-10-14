"use client";
import Video from "next-video";
import homePageBannerVideo from "/videos/homepage-banner-video.mp4";

export default function NextVideoPlayer({ title }) {
  return (
    <Video
      src={homePageBannerVideo}
      title={title}
      autoPlay
      loop
      muted
      poster=""
      controls={false}
    />
  );
}
