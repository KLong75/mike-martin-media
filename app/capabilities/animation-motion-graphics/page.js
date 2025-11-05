// import components
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import BannerVideoWithFadeEffect from "@/app/ui/bannerVideoWithFadeEffect";
import VideoGallery from "@/app/ui/workGallery.js";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
// import page data
import {
  animationPageHeadingBannerText,
  animationCapabilities,
  benefitsOfAnimation,
  animationProcess,
  whoBenefitsFromAnimation,
  // whyGoAnimated,
  exampleAnimationVideo,
} from "../../lib/capabilities/animation.js";

const animationPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/animation-og.png";

export const metadata = {
  title: "Video Animation Company | Mike Martin Media",
  description:
    "Expert video animation company specializing in motion graphics, 2D & 3D animation. Transform your ideas into engaging visual stories that drive results. Get a free consultation today.",
  alternates: {
    canonical: "/capabilities/animation-motion-graphics",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/capabilities/animation-motion-graphics",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Video Animation Company | Mike Martin Media",
    description:
      "Expert video animation company specializing in motion graphics, 2D & 3D animation. Transform your ideas into engaging visual stories that drive results. Get a free consultation today.",
    images: [
      {
        url: animationPageOgImgUrl,
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
    title: "Video Animation Company | Mike Martin Media",
    description:
      "Expert video animation company specializing in motion graphics, 2D & 3D animation. Transform your ideas into engaging visual stories that drive results. Get a free consultation today.",
    images: [
      {
        url: animationPageOgImgUrl,
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
        src="z56MD9KpKNo33ysimimzgmuMDLs4tl9awoh5TifQfF4"
        title="Video Animation & Motion Graphics | Mike Martin Media"
        containerClassName="padding-top-42-19"
        autoPlay={true}
        loop={true}
        muted={true}
        poster=""
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
            selectedCategories={["Animation"]}
            excludedCategory={[]}
            numberOfVideos={4}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={"Benefits of Animation for Your Business"}
          highlights={benefitsOfAnimation.list_items}
          video_src={exampleAnimationVideo.src}
          video_title={exampleAnimationVideo.title}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess
            title={animationProcess.heading}
            steps={animationProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:p-12 max-w-800">
          <div className="xl:ml-24">
            <div className="pt-6 pb-3">
              <FormattedList
                heading={animationCapabilities.heading}
                heading_level={"h5"}
                sub_heading={animationCapabilities.sub_heading}
                list_items={animationCapabilities.list_items}
              />
            </div>
            <div className="pt-3 pb-6">
              <FormattedList
                heading={whoBenefitsFromAnimation.heading}
                heading_level={"h6"}
                sub_heading={whoBenefitsFromAnimation.sub_heading}
                list_items={whoBenefitsFromAnimation.list_items}
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
