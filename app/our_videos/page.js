// import from next
import Image from "next/image";
// import from react
import { Suspense } from "react";
// import components
import DisplayCard from "../ui/displayCard";
import VideoFrame from "../ui/videoFrame";
// import { DisplayCardSkeleton } from "../ui/skeletons";

export const metadata = {
  title: "Page 2",
};

export default function Page() {
  return (
    <main className="">
      <div className="flex justify-center items-center mt-12">
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold ml-1">Videos</h2>
      </div>
      <div>
      <VideoFrame 
        src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&muted=1&byline=0&portrait=0"
        // title="MMM Homepage Vid 2024 Version 2 010524"
      />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-6">
        <div className="mb-6">
          <DisplayCard
            title="Display Card"
            text="This is display card. It's a good way to show off your content."
            image="/branding/mmm_black.png"
          />
        </div>
        <div className="mb-6">
          <DisplayCard
            title="Display Card"
            text="This is display card. It's a good way to show off your content."
            image="/branding/mmm_black.png"
          />
        </div>
        <div className="mb-6">
          <DisplayCard
            title="Display Card"
            text="This is display card. It's a good way to show off your content."
            image="/branding/mmm_black.png"
          />
        </div>
        <div className="mb-6">
          <DisplayCard
            title="Display Card"
            text="This is display card. It's a good way to show off your content."
            image="/branding/mmm_black.png"
          />
        </div>
      </div>
    </main>
  );
}
