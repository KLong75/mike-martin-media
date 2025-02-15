//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
// import page data
import {
  videoProductionPageHeadingBannerText,
  videoProductionHighlights,
  videoProductionProcess,
  videoProductionCapabilities,
  videoProductionForEveryIndustry,
  exampleVideoProductionVideoSrc,
} from "../../lib/video-production.js";
import Link from "next/link.js";

export const metadata = {
  title: "Business Video Production | Mike Martin Media",
  description:
    "Professional business video production creating engaging content that drives results. Full-service team handles creative, filming, and post-production for your brand story. Book your project.",
  alternates: {
    canonical: "/capabilities/video-production/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Video_Page_Banner_Video"
      />

      <div className="">
        <PageHeadingBanner
          title={videoProductionPageHeadingBannerText.title}
          heading={videoProductionPageHeadingBannerText.heading}
          text={videoProductionPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategory={"Corporate"}
            excludedCategory={[]}
            numberOfVideos={6}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={videoProductionHighlights.heading}
          highlights={videoProductionHighlights.highlights}
          video_src={exampleVideoProductionVideoSrc}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess
            title={videoProductionProcess.heading}
            steps={videoProductionProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt- lg:p-12 max-w-800">
          <div className="xl:ml-24">
            <div className="pt-6 pb-3">
              <FormattedList
                heading={videoProductionCapabilities.heading}
                sub_heading={videoProductionCapabilities.sub_heading}
                list_items={videoProductionCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={videoProductionForEveryIndustry.heading}
                sub_heading={videoProductionForEveryIndustry.sub_heading}
                list_items={videoProductionForEveryIndustry.list_items}
              />
            </div>
          </div>
          <div className="mx-12 lg:mt-6 hidden md:block pt-6">
            <div className="flex justify-center invert">
              <OurCapabilitiesList />
            </div>
            <div className="mt-16 lg:mt-24 flex justify-center invert ">
              <IndustriesList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}