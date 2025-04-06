//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
// import PhotographyGallery from "@/app/ui/photographyGallery";
// import page data
import {
  photographyPageHeadingBannerText,
  photographyCapabilities,
  importanceOfPhotography,
  photographyProcess,
  whoBenefitsFromPhotography,
  examplePhotographyImageSrc,
} from "../../lib/capabilities/photography.js";
// import images
// import { photographyCoverImages } from "../../lib/capabilities/photography.js";
import TriPicBanner from "@/app/ui/triPicBanner.js";

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
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Mike Martin Media | Photography"
      />
      <div>
        <PageHeadingBanner
          title={photographyPageHeadingBannerText.title}
          heading={photographyPageHeadingBannerText.heading}
          text={photographyPageHeadingBannerText.text}
        />
      </div>
      <div className="">
        <TriPicBanner />
      </div>
      <div className="pb-8 lg:py-28">
        <CapabilityHighLightsSection
          headline={importanceOfPhotography.heading}
          highlights={importanceOfPhotography.list_items}
          video_src={examplePhotographyImageSrc}
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
