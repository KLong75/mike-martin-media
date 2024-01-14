// import from next
import Image from "next/image";
// import components
import VideoGallery from "../ui/videoGallery";
import VideoCategories from "../ui/videoCategories";
import TextSegment from "../ui/textSegment";

export const metadata = {
  title: "Videos",
};

export default function Page() {
  return (
    <main className="">
      <div className="flex justify-center items-center mt-12 mb-6">
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
      <div className="mb-4">
      <TextSegment
        title="Video Gallery"
        text="We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process."
      />
      </div>
      <VideoCategories />
      <VideoGallery />
    </main>
  );
}
