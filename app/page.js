// import from next
import Image from "next/image";
// import components
import VideoFrame from "./ui/videoFrame";
import ContactUsButton from "./ui/contactUsButton";
import TeamGallery from "./ui/teamGallery";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4">
      {/* <h1 className="text-center w-full mt-6">Next.JS Website Template</h1>
      <h2 className="text-center w-full">by Rhythm Code Studio</h2> */}
      <div className="flex justify-center mt-6">
        <VideoFrame
          src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Homepage Vid 2024 Version 2 010524"
        />
      </div>
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold mr-4">About</h1>
        <div className="flex justify-center items-center w-24 h-8">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <p className=" w-3/4">
          Mike Martin Media specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center w-24 h-8">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Our Team</h1>
      </div>
      <div className="flex justify-center">
        <TeamGallery />
      </div>

      <div className="flex justify-center mb-4">
        <ContactUsButton />
      </div>
    </main>
  );
}
