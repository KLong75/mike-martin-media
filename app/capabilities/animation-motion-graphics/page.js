// import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
// import page data
import {
  animationHighlights,
  animationProcess ,
  animationPageHeadingBannerText,
  exampleAnimationVideoSrc,
} from "../../lib/animation.js";

export const metadata = {
  title: "Video Animation Company | Mike Martin Media",
  description:
    "Expert video animation company specializing in motion graphics, 2D & 3D animation. Transform your ideas into engaging visual stories that drive results. Get a free consultation today.",
  alternates: {
    canonical: "/capabilities/animation-motion-graphics/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/948449576?h=378cc31a7c&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
       <div className="">
        <PageHeadingBanner
          title={animationPageHeadingBannerText.title}
          heading={animationPageHeadingBannerText.heading}
          text={animationPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategory={"Animation"}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={"Benefits of Animation for Your Business"}
          highlights={animationHighlights}
          video_src={exampleAnimationVideoSrc}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess title={"Our Animation Process"} steps={animationProcess} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          <div className="lg:mx-12">
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl  lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
                Who Benefits from Animation?
              </h6>
              <ul className="list-disc sm:text-lg mt-4 ml-6">
                <li>
                  <strong>Technology:</strong> Simplify complex concepts for investors or customers.
                </li>
                <li>
                  <strong>Healthcare:</strong>  Educate your patients with friendly, understandable visuals.
                </li>
                <li>
                  <strong>Education:</strong> Make learning interactive and fun for students of all ages.
                </li>
                <li>
                  <strong>Finance:</strong> Simplify financial services and products.
                </li>
                <li>
                  <strong>Retail & E-commerce:</strong> Showcase products in a unique way.
                </li>
              </ul>
            </div>
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
              Animation vs. Live Video: Why Go Animated?
              </h6>
              <ul className="list-disc sm:text-lg mt-4 ml-6">
                <li>
                  <strong>Limitless Creativity:</strong> No need to worry about location scouting or weather conditions.
                </li>
                <li>
                  <strong>Cost-Effective:</strong> Animation can be a more cost-effective option for someone with a limited budget, or with more projects to complete.
                </li>
                <li>
                  <strong>Timeless Appeal:</strong> Animated content stays fresh longer.
                </li>
                <li>
                  <strong>Higher Engagement:</strong> Animated videos often see higher viewer retention rates.
                </li>
                <li>
                  <strong>Environmental & Industrial</strong> Conduct
                  inspections, surveys, and research with minimal disruption.
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-12 lg:mt-6 hidden md:block ">
            <div className=" flex justify-center invert">
              <OurCapabilitiesList />
            </div>
            <div className="mt-16 flex justify-center invert">
              <IndustriesList />
            </div>
          </div>
        </div>
      </div>
      </main>
  );
}