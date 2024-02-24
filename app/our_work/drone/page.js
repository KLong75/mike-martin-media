// import from next
import Link from "next/link";
// import components
import BannerVideo from "../../ui/bannerVideo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoGallery from "@/app/ui/videoGallery";

export const metadata = {
  title: "Drone",
  description:
    "Aerial footage can add a unique perspective to your project. Our drone services provide stunning visuals. Contact us today to see how we can help you.",
};

export default function Page() {
  return (
    <main>
      <BannerVideo
          src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Livestreaming_Video"
        />
        <div className="mt-4 mb-4">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h2 className="text-center font-bold text-3xl md:text-4xl mt-2">
          DRONE
        </h2>
      </div>
    </main>
  )
}
