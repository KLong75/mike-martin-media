// import components
import BannerVideoWithFadeEffect from "@/app/ui/bannerVideoWithFadeEffect";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
// import page data
import {
  livestreamingPageHeadingBannerText,
  livestreamingCapabilities,
  benefitsOfLivestreaming,
  livestreamingProcess,
  whoBenefitsFromLivestreaming,
  exampleLivestreamingVideo,
} from "../../lib/capabilities/livestreaming.js";

const livestreamingPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/livestreaming-og.png";

export const metadata = {
  title: "Live Stream Video Company | Mike Martin Media",
  description:
    "Professional livestream video company specializing in corporate events, webinars & virtual conferences. Expert production team ensures flawless streaming worldwide. Get started today.",
  alternates: {
    canonical: "/capabilities/live-streaming",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/capabilities/live-streaming",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Live Stream Video Company | Mike Martin Media",
    description:
      "Professional livestream video company specializing in corporate events, webinars & virtual conferences. Expert production team ensures flawless streaming worldwide. Get started today.",
    images: [
      {
        url: livestreamingPageOgImgUrl,
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
    title: "Live Stream Video Company | Mike Martin Media",
    description:
      "Professional livestream video company specializing in corporate events, webinars & virtual conferences. Expert production team ensures flawless streaming worldwide. Get started today.",
    images: [
      {
        url: livestreamingPageOgImgUrl,
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
      <BannerVideoWithFadeEffect
        src="Mo3Fbv8T006pkds9eOmUjzY01r6iq9WLhb02JBWvBwafpI"
        title="Live Stream Video Company | Mike Martin Media"
        containerClassName="padding-top-42-19"
        autoPlay={true}
        loop={true}
        muted={true}
      />
      <div className="">
        <PageHeadingBanner
          title={livestreamingPageHeadingBannerText.title}
          heading={livestreamingPageHeadingBannerText.heading}
          text={livestreamingPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Livestream"]}
            excludedCategory={[]}
            numberOfVideos={6}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={benefitsOfLivestreaming.heading}
          highlights={benefitsOfLivestreaming.list_items}
          video_src={exampleLivestreamingVideo.src}
          video_title={exampleLivestreamingVideo.title}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess
            title={livestreamingProcess.heading}
            steps={livestreamingProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt- lg:p-12 max-w-800">
          <div className="xl:ml-24">
            <div className="pt-6 pb-3">
              <FormattedList
                heading={livestreamingCapabilities.heading}
                heading_level={"h5"}
                sub_heading={livestreamingCapabilities.sub_heading}
                list_items={livestreamingCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={whoBenefitsFromLivestreaming.heading}
                heading_level={"h5"}
                sub_heading={whoBenefitsFromLivestreaming.sub_heading}
                list_items={whoBenefitsFromLivestreaming.list_items}
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
