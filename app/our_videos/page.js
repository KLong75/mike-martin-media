// import from next
import Image from "next/image";
// import from react
import { Suspense } from "react";
// import components
// import components
import VideoGallery from "../ui/videoGallery";
import VideoCategories from "../ui/videoCategories";


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
      <VideoCategories />
      <VideoGallery />
    </main>
  );
}
