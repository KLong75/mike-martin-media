// import from next
import Image from "next/image";
// import components
import VideoFrame from "./ui/videoFrame";
import ContactUsButton from "./ui/contactUsButton";

export default function Home() {
  return (
    <main className="bg-gray-200 grid grid-cols-1 gap-4">
      {/* <h1 className="text-center w-full mt-6">Next.JS Website Template</h1>
      <h2 className="text-center w-full">by Rhythm Code Studio</h2> */}
      <div className="flex justify-center mt-6">
        <VideoFrame
          src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Homepage Vid 2024 Version 2 010524"
        />
      </div>
      {/* <div className="flex justify-center -mt-6">
        <Image
          src="/images/company_logo.png"
          width={600}
          height={600}
          alt="company logo"
        />
      </div> */}
      <div className="flex justify-center mb-4">
        <ContactUsButton />
      </div>
    </main>
  );
}
