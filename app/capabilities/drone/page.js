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
  // droneCapabilities,
  droneAdvantage,
  droneProcess,
  faaCertified,
  exampleDroneVideoSrc,
  whoBenefitsFromDrone,
} from "../../lib/capabilities/drone.js";

const dronePageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/drone-og.png";

export const metadata = {
  title: "Drone Video Services | Mike Martin Media",
  description:
    "FAA-certified drone video company delivering stunning aerial photography & videography. Expert pilots capture breathtaking perspectives for real estate, events & more. Contact us today.",
  alternates: {
    canonical: "/capabilities/drone",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/capabilities/drone",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Drone Video Services | Mike Martin Media",
    description:
      "FAA-certified drone video company delivering stunning aerial photography & videography. Expert pilots capture breathtaking perspectives for real estate, events & more. Contact us today.",
    images: [
      {
        url: dronePageOgImgUrl,
        width: 1200,
        height: 630,
        alt: "Drone Video Services | Mike Martin Media",
      },
        // {
      //   url: ,
      //   width: 1920,
      //   height: 1080,
      //   alt: "About Mike Martin Media",
      // },
      // {
      //   url: ,
      //   width: 1080,
      //   height: 1080,
      // },
      // {
      //   url: ,
      //   width: 600,
      //   height: 314,
      // }
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Drone Video Services | Mike Martin Media",
    description:
      "FAA-certified drone video company delivering stunning aerial photography & videography. Expert pilots capture breathtaking perspectives for real estate, events & more. Contact us today.",
    images: [
      {
        url: dronePageOgImgUrl,
        width: 1200,
        height: 630,
      },
        // {
        //   url: ,
        //   width: 800,
        //   height: 418,
        // },
    ],
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
                heading_level={"h5"}
                text={faaCertified.text}
              />
            </div>
            <div className="lg:pt-6 ">
              <FormattedList
                heading={whoBenefitsFromDrone.heading}
                heading_level={"h5"}
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
