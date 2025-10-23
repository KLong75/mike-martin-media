"use client";
// import from vercel
import { track } from "@vercel/analytics/react";
// import from mux
import MuxPlayer from "@mux/mux-player-react";

export default function ClientVideoContainer({ video }) {
  console.log("video in ClientVideoContainer:", video);
  let videoIndustry;
  const industries = ["Corporate", "Nonprofit", "Education", "Medical"];
  const videoCategories = video.category;
  for (const industry of industries) {
    if (videoCategories.includes(industry)) {
      videoIndustry = industry;
      break;
    }
  }
  console.log("videoIndustry:", videoIndustry);
  const handleError = (e) => {
    console.error("Mux Player Error:", e);
  };

  const handleVideoPlaying = () => {
    track("Video started", { video: video.title, client: video.client, industry: videoIndustry });
    console.log(`Video started: ${video.client} - ${video.title}`);
  };

  const handleVideoEnded = () => {
    track("Full video play", { video: video.title, client: video.client, industry: videoIndustry });
    console.log(`Full video play tracked for: ${video.client} - ${video.title}`);
  };

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const halfwayPoint = duration / 2;
    if (!event.target.halfwayTracked && currentTime >= halfwayPoint) {
      event.target.halfwayTracked = true;
      track("Halfway video play", { video: video.title, client: video.client, industry: videoIndustry });
      console.log(`Halfway video play tracked for: ${video.client} - ${video.title}`);
    }
  };
  return (
    <MuxPlayer
      accentColor="#000"
      playbackId={video.playback_id}
      // placeholder={blurDataURL}
      title={video.title}
      autoPlay={false}
      loop={false}
      muted={true}
      poster={video.image_src}
      disableCookies={true}
      metadata={{
        video_id: video.playback_id,
        video_title: video.title,
      }}
      onError={handleError}
      onPlaying={handleVideoPlaying}
      onEnded={handleVideoEnded}
      onTimeUpdate={handleTimeUpdate}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
