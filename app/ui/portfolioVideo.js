// "use client";
// import from next
import Image from "next/image";
// import components
import ClientVideoContainer from "./clientVideoContainer";
// import BackLink from "@/app/ui/backLink";
// import from mux
// import MuxPlayer from "@mux/mux-player-react";
import { createBlurUp } from "@mux/blurup";
// import data
// import { workSampleData } from "@/app/lib/work-samples";
// import { siteUrl } from "@/app/lib/site-url";
// import { track } from "@vercel/analytics/react";

export default async function PortfolioVideo({ video }) {
  const categories = video?.category || [];
  console.log("categories:", categories);
  const options = {};
  const muxPlaybackId = video?.playback_id || "";
  console.log("muxPlaybackId:", muxPlaybackId);
  const { blurDataURL, aspectRatio } = await createBlurUp(
    muxPlaybackId,
    options
  );
  console.log("blurDataURL:", blurDataURL, "aspectRatio:", aspectRatio);

  // const handleError = (e) => {
  //   console.error("Mux Player Error:", e);
  // };

  // const handleVideoPlaying = () => {
  //   track("Video started", { video: title });
  //   console.log(`Video started: ${title}, ${now}`);
  // };

  // const handleVideoEnded = () => {
  //   track("Full video play", { video: title });
  //   console.log(`Full video play tracked for: ${sample.title}`);
  // };

  // const handleTimeUpdate = (event) => {
  //   const currentTime = event.target.currentTime;
  //   const duration = event.target.duration;
  //   const halfwayPoint = duration / 2;
  //   if (!event.target.halfwayTracked && currentTime >= halfwayPoint) {
  //     event.target.halfwayTracked = true;
  //     track("Halfway video play", { video: sample.title });
  //     console.log(`Halfway video play tracked for: ${sample.title}`);
  //   }
  // };
  return (
    <section className="text-center  mx-auto w-full p-6 md:p-12 flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-8">
        {video.client}
      </h1>
      {/* <h2>{sample.title}</h2> */}
      {/* <MuxPlayer
                accentColor="#000"
                playbackId={sample.playback_id}
                // placeholder={blurDataURL}
                title={sample.title}
                autoPlay={false}
                loop={false}
                muted={true}
                // poster="https://image.mux.com/R0000d7JrkYTLaFA6ulhx001SZLeNtO88JdHeCNWIHNmlA/thumbnail.png?width=1200&height=678&time=1.75"
                poster={sample.image_src}
                disableCookies={true}
                metadata={{
                  video_id: sample.playback_id,
                  video_title: sample.title,
                  // viewer_user_id: "user-id-bc-789",
                }}
              /> */}
      <div
        className="mx-auto w-full h-full"
        style={{ aspectRatio: aspectRatio }} // or aspect-[1200/678] with Tailwind 3.2+
      >
        {/* <MuxPlayer
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
          // onError={handleError}
          // onPlaying={handleVideoPlaying}
          // onEnded={handleVideoEnded}
          // onTimeUpdate={handleTimeUpdate}
          style={{ width: "100%", height: "100%" }}
        /> */}
        <ClientVideoContainer video={video} />
        {/* <div className="flex justify-center">
          <Image
            src="/branding/line-logo-black.png"
            alt=""
            width={1440}
            height={65}
            className="mt-2 lg:mt-6 lg:mb-6"
          />
        </div> */}
      </div>
    </section>
  );
}
