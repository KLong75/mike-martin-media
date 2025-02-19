//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
import FormattedTextBlock from "@/app/ui/formattedTextBlock.js";
// import page data
import {
  dronePageHeadingBannerText,
  droneCapabilities,
  droneAdvantage,
  droneProcess,
  faaCertified,
  exampleDroneVideoSrc,
  whoBenefitsFromDrone,
} from "../../lib/drone.js";

export const metadata = {
  title: "Drone Video Services | Mike Martin Media",
  description:
    "FAA-certified drone video company delivering stunning aerial photography & videography. Expert pilots capture breathtaking perspectives for real estate, events & more. Contact us today.",
  alternates: {
    canonical: "/capabilities/drone/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="">
        <PageHeadingBanner
          title={dronePageHeadingBannerText.title}
          heading={dronePageHeadingBannerText.heading}
          text={dronePageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Drone"]}
            excludedCategory={[]}
            numberOfVideos={6}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={"Advantages of Aerial Videography and Photography"}
          highlights={droneAdvantage}
          video_src={exampleDroneVideoSrc}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess title={"Our Process"} steps={droneProcess} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          <div className="lg:ml-12">
            <div className="lg:m-6 mb-12 lg:mb-12">
              <FormattedTextBlock
                heading={faaCertified.heading}
                text={faaCertified.text}
              />
            </div>
            <div className="lg:pt-6 ">
              <FormattedList
                heading={whoBenefitsFromDrone.heading}
                sub_heading={whoBenefitsFromDrone.sub_heading}
                list_items={whoBenefitsFromDrone.list_items}
              />
            </div>
          </div>
          <div className="mx-12 lg:mt-6 hidden md:block ">
            <div className=" flex justify-center invert">
              <OurCapabilitiesList />
            </div>
            <div className="mt-20 flex justify-center invert">
              <IndustriesList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
