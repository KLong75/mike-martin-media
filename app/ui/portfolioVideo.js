// import components
import ClientVideoContainer from "./clientVideoContainer";
// import from mux
import { createBlurUp } from "@mux/blurup";
// import clsx
import clsx from "clsx";

export default async function PortfolioVideo({ video }) {
  console.log("Video data:", video);
  const options = {};
  const muxPlaybackId = video?.playback_id || "";
  const { aspectRatio } = await createBlurUp(
    muxPlaybackId,
    options
  );
  const isCaseStudyVideo = video.category && video.category.includes("Case Study");
  const isVertical = video.orientation === "vertical";

  return (
    <section className="text-center mx-auto w-full p-6 md:p-12 flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-8">
        {video.client}
      </h1>
      <div
        className={clsx("mx-auto h-full", isCaseStudyVideo && isVertical ? "w-full md:w-[33.33%]" : "w-full")}
        style={{ aspectRatio: aspectRatio }} 
      >
        <ClientVideoContainer video={video} />
      </div>
    </section>
  );
}
