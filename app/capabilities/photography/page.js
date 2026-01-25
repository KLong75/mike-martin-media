//import components
import BannerVideoWithFadeEffect from "@/app/ui/bannerVideoWithFadeEffect";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
import WorkGallery from "@/app/ui/workGallery.js";
// import page data
import {
  photographyPageHeadingBannerText,
  photographyCapabilities,
  importanceOfPhotography,
  photographyProcess,
  whoBenefitsFromPhotography,
  examplePhotographyVideo,
} from "../../lib/capabilities/photography.js";
// import images
// import { photographyCoverImages } from "../../lib/capabilities/photography.js";

const photographyPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/photography-og.png";

export const metadata = {
  type: "website",
  locale: "en_US",
  url: "https://www.mikemartinmedia.com/capabilities/photography",
  siteName: "Mike Martin Media: St. Louis Video Production Company",
  title: "Photography Company | Mike Martin Media",
  description:
    "Award-winning photography company delivering stunning commercial, portrait, and event photography. Transform your brand with professional images that tell your story. Book now.",
  alternates: {
    canonical: "/capabilities/photography",
  },
  openGraph: {
    title: "Photography Company | Mike Martin Media",
    description:
      "Award-winning photography company delivering stunning commercial, portrait, and event photography. Transform your brand with professional images that tell your story. Book now.",
    images: [
      {
        url: photographyPageOgImgUrl,
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
    title: "Photography Company | Mike Martin Media",
    description:
      "Award-winning photography company delivering stunning commercial, portrait, and event photography. Transform your brand with professional images that tell your story. Book now.",
    images: [
      {
        url: photographyPageOgImgUrl,
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
        src="4qT2Obf2HwbrRle6QkWRUL5ykXzqyqnR4ZjkuDSj15M"
        title="Mike Martin Media | Photography"
        containerClassName="padding-top-42-19"
        autoPlay={true}
        loop={true}
        muted={true}
        poster=""
      />
      <div>
        <PageHeadingBanner
          title={photographyPageHeadingBannerText.title}
          heading={photographyPageHeadingBannerText.heading}
          text={photographyPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <WorkGallery
            selectedCategories={["Photography"]}
            excludedCategory={[]}
            numberOfVideos={10}
            featured={"featured-photography"}
          />
        </div>
      </div>
      <div className="pb-8 lg:py-28">
        <CapabilityHighLightsSection
          headline={importanceOfPhotography.heading}
          highlights={importanceOfPhotography.list_items}
          video_src={examplePhotographyVideo.src}
          video_title={examplePhotographyVideo.title}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 py-20">
          <OurProcess
            title={photographyProcess.heading}
            steps={photographyProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 pt- lg:p-12 max-w-800">
          <div className="xl:ml-24">
            <div className="pt-6 pb-3">
              <FormattedList
                heading={photographyCapabilities.heading}
                heading_level={"h5"}
                sub_heading={photographyCapabilities.sub_heading}
                list_items={photographyCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={whoBenefitsFromPhotography.heading}
                heading_level={"h5"}
                sub_heading={whoBenefitsFromPhotography.sub_heading}
                list_items={whoBenefitsFromPhotography.list_items}
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
