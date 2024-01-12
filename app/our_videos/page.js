// import from next
import Image from "next/image";
// import from react
import { Suspense } from "react";
// import components
import DisplayCard from "../ui/displayCard";
// import VideoFrame from "../ui/videoFrame";
import ClientVideoFrame from "../ui/clientVideoFrame";

import VideoCategories from "../ui/videoCategories";
// import { DisplayCardSkeleton } from "../ui/skeletons";
// import data
import { videoData } from "../lib/data";


export const metadata = {
  title: "Videos",
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
            priority
            as="image"
          />
        </div>
        <h2 className="text-4xl font-bold ml-1">Videos</h2>
      </div>
      <div>
        <VideoCategories />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-6">
        {videoData.map((video) => (
          <div key={video.client} className="mb-6">
          
          <ClientVideoFrame
            src={video.src}
            client={video.client}
            category={video.category}
          />
          </div>
        ))}

      </div>
    </main>
  );
}
