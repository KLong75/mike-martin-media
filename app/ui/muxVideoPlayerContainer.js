"use client";
// import from next
import dynamic from "next/dynamic";

const MuxPlayerNoSSR = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

export default function MuxVideoPlayerContainer() {
  return (
    <MuxPlayerNoSSR
      poster=""
      playbackId="6uEZH2PfSpHBB11nHpqCflsCIu802byhTIHdNEZ8oQ5Y"
      autoPlay
      muted
      loop
      onEnded={() => {
        console.log("Video Ended");
      }}
      onError={(error) => {
        console.error("Mux Player Error:", error);
      }}
      metadata={{
        video_title: "Mike Martin Media - Ideas In Motion",
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
