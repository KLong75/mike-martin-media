//import components
import BannerVideoWithFadeEffect from "@/app/ui/bannerVideoWithFadeEffect";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
import VideoGallery from "@/app/ui/workGallery.js";
// import page data
import {
  productPhotographyPageHeadingBannerText,
  productPhotographyCapabilities,
  importanceOfProductPhotography,
  whoBenefitsFromProductPhotography,
  exampleProductPhotographyVideo,
} from "../../lib/capabilities/product-photography.js";
import {
  photographyProcess,
} from "../../lib/capabilities/photography.js";

// import images
// import { photographyCoverImages } from "../../lib/capabilities/photography.js";

const productPhotographyPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/product-photography-og.png";

export const metadata = {
  type: "website",
  locale: "en_US",
  url: "https://www.mikemartinmedia.com/capabilities/product-photography",
  siteName: "Mike Martin Media: St. Louis Video Production Company",
  title: "Product Photography Company | Mike Martin Media",
  description:
    "Award-winning photography company delivering stunning commercial, portrait, product and event photography. Transform your brand with professional images that tell your story. Book now.",
  alternates: {
    canonical: "/capabilities/product-photography",
  },
  openGraph: {
    title: "Product Photography Company | Mike Martin Media",
    description:
      "Award-winning photography company delivering stunning commercial, portrait, product and event photography. Transform your brand with professional images that tell your story. Book now.",
    images: [
      {
        url: productPhotographyPageOgImgUrl,
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
    title: "Product Photography Company | Mike Martin Media",
    description:
      "Award-winning photography company delivering stunning commercial, portrait, product and event photography. Transform your brand with professional images that tell your story. Book now.",
    images: [
      {
        url: productPhotographyPageOgImgUrl,
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
        // src="akjTIQF8yJS02VYgmpzxVpElq01q026jckyQcF028JnTGkU"
        src="fJmUGVR5xPMsWbZOwb9ZxBQxPSllczqmhPKw0001ZHxuM"
        title="Mike Martin Media | Product Photography"
        containerClassName="padding-top-42-19"
        // containerClassName="padding-top-56-25"
        autoPlay={true}
        loop={true}
        muted={true}
        poster=""
      />
      <div>
        <PageHeadingBanner
          title={productPhotographyPageHeadingBannerText.title}
          heading={productPhotographyPageHeadingBannerText.heading}
          text={productPhotographyPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Product Photography"]}
            excludedCategory={[]}
            numberOfVideos={3}
            featured={"featured-product-photography"}
          />
        </div>
      </div>
      <div className="pb-8 lg:py-28">
        <CapabilityHighLightsSection
          headline={importanceOfProductPhotography.heading}
          highlights={importanceOfProductPhotography.list_items}
          video_src={exampleProductPhotographyVideo.src}
          video_title={exampleProductPhotographyVideo.title}
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
                heading={productPhotographyCapabilities.heading}
                heading_level={"h5"}
                sub_heading={productPhotographyCapabilities.sub_heading}
                list_items={productPhotographyCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={whoBenefitsFromProductPhotography.heading}
                heading_level={"h5"}
                sub_heading={whoBenefitsFromProductPhotography.sub_heading}
                list_items={whoBenefitsFromProductPhotography.list_items}
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