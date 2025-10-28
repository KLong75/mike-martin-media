// import components
import ClientVideoContainer from "./clientVideoContainer";
// import from mux
import { createBlurUp } from "@mux/blurup";

export default async function PortfolioVideo({ video }) {
  const options = {};
  const muxPlaybackId = video?.playback_id || "";
  const { aspectRatio } = await createBlurUp(
    muxPlaybackId,
    options
  );

  return (
    <section className="text-center mx-auto w-full p-6 md:p-12 flex flex-col justify-center items-center">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-8">
        {video.client}
      </h1>
      <div
        className="mx-auto w-full h-full"
        style={{ aspectRatio: aspectRatio }} 
      >
        <ClientVideoContainer video={video} />
      </div>
    </section>
  );
}
