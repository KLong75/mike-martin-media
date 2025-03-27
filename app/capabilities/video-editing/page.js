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
  videoEditingPageHeadingBannerText,
  videoEditingHighlights,
  videoEditingProcess,
  videoEditingCapabilities,
  videoEditingAcrossIndustries,
  exampleVideoEditingVideoSrc,
} from "../../lib/capabilities/video-editing.js";

const videoEditingPageOgImgUrl = "https://www.mikemartinmedia.com/images/open-graph/video-editing-og.png";

export const metadata = {
  title: "Video Editing Company | Mike Martin Media",
  description:
    "Professional video editing company transforming raw footage into polished, engaging stories. Expert team handles color grading, sound design & motion graphics. Get your free quote today.",
  alternates: {
    canonical: "/capabilities/video-editing",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/capabilities/video-editing",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Video Editing Company | Mike Martin Media",
    description:
      "Professional video editing company transforming raw footage into polished, engaging stories. Expert team handles color grading, sound design & motion graphics. Get your free quote today.",
    images: [
      {
        url: videoEditingPageOgImgUrl,
        width: 1200,
        height: 630,
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
    title: "Video Editing Company | Mike Martin Media",
    description:
      "Professional video editing company transforming raw footage into polished, engaging stories. Expert team handles color grading, sound design & motion graphics. Get your free quote today.",
    images: [
      {
        url: videoEditingPageOgImgUrl,
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
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Video_Page_Banner_Video"
      />
      <div className="">
        <PageHeadingBanner
          title={videoEditingPageHeadingBannerText.title}
          heading={videoEditingPageHeadingBannerText.heading}
          text={videoEditingPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Video Editing"]}
            excludedCategory={[]}
            numberOfVideos={6}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={videoEditingHighlights.heading}
          highlights={videoEditingHighlights.highlights}
          video_src={exampleVideoEditingVideoSrc}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess
            title={videoEditingProcess.heading}
            steps={videoEditingProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt- lg:p-12 max-w-800">
          <div className="xl:ml-24">
            <div className="pt-6 pb-3">
              <FormattedList
                heading={videoEditingCapabilities.heading}
                heading_level={"h5"}
                sub_heading={videoEditingCapabilities.sub_heading}
                list_items={videoEditingCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={videoEditingAcrossIndustries.heading}
                heading_level={"h5"}
                sub_heading={videoEditingAcrossIndustries.sub_heading}
                list_items={videoEditingAcrossIndustries.list_items}
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