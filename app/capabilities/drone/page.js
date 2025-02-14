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
  droneProcess ,
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
            selectedCategory={"Drone"}
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
          <div className="lg:mx-12">
          <div className="lg:m-6 mb-12 lg:mb-20">
            <FormattedTextBlock
              heading={faaCertified.heading}
              text={faaCertified.text}
            />
          </div>
            
            {/* <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
                FAA Certified and Ready for Any Environment
              </h6>
              <p className="sm:text-lg">
                Safety and compliance are number one for our team. Our drone.
                pilots are fully FAA-certified, which allows us to operate
                drones legally on your behalf. Whether we&apos;re getting
                footage of open landscapes or maneuvering through tight indoor
                spaces, we can do it safely and effectively.
              </p>
            </div> */}
            <div className="pt-6 pb-3">
              <FormattedList
                heading={whoBenefitsFromDrone.heading}
                sub_heading={whoBenefitsFromDrone.sub_heading}
                list_items={whoBenefitsFromDrone.list_items}
              />
            </div>
            {/* <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
                Who Benefits From Drone Photography and Videography?
              </h6>
              <ul className="list-disc sm:text-lg mt-4 ml-6">
                <li>
                  <strong>Real Estate & Construction:</strong> Showcase properties and monitor project progress.
                </li>
                <li>
                  <strong>Tourism & Hospitality:</strong> Highlight resort amenities, attractions, and local landscapes.
                </li>
                <li>
                  <strong>Events & Entertainment:</strong> Capture the excitement of festivals, concerts, and sports events.
                </li>
                <li>
                  <strong>Agriculture:</strong> Monitor crops and land with
                  aerial surveys.
                </li>
                <li>
                  <strong>Environmental & Industrial</strong> Conduct
                  inspections, surveys, and research with minimal disruption.
                </li>
              </ul>
            </div> */}
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
