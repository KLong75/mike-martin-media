//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
// import page data
import {
  videoEditingPageHeadingBannerText,
  videoEditingHighlights,
  videoEditingProcess,
  exampleVideoEditingVideoSrc,
} from "../../lib/video-editing.js";

export const metadata = {
  title: "Video Editing Company | Mike Martin Media",
  description:
    "Professional video editing company transforming raw footage into polished, engaging stories. Expert team handles color grading, sound design & motion graphics. Get your free quote today.",
  alternates: {
    canonical: "/capabilities/video-editing/",
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
            selectedCategory={"Corporate"}
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
          <OurProcess title={videoEditingProcess.heading} steps={videoEditingProcess.steps} />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          <div className="lg:mx-12">
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">
              Our Editing Capabilities
              </h6>
              <ul className="list-disc sm:text-lg ml-6">
                <lh className="font-semibold text-lg lg:text-xl">From initial sequencing to final polish, we ensure every detail enhances your video's message:</lh>
                <li className="mt-4">
                  <strong>Color Correction & Grading:</strong>{" "}We apply color techniques to make sure every scene is visually striking and brand-aligned.
                </li>
                <li>
                  <strong>Sound Design:</strong>{" "}Clear audio elevates your video, and our sound design ensures the highest quality for your viewers.
                </li>
                <li>
                  <strong>Motion Graphics Integration:</strong>{" "}Adding titles, logos, and graphics to your video makes sure your brand stands out.
                </li>
                <li>
                  <strong>Multi-Camera Editing:</strong>{" "}Combining multiple video perspectives creates a dynamic, engaging viewing experience.
                </li>
                <li>
                  <strong>Storyboarding & Sequencing:</strong>{" "}We organize footage with care to build a story that flows naturally and keeps your audience engaged.
                </li>
              </ul>
            </div>
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">
              Video  Editing Across Industries
              </h6>
              <ul className="list-disc sm:text-lg ml-6">
              <lh className="font-semibold text-lg lg:text-xl">From initial sequencing to final polish, we ensure every detail enhances your video's message:</lh>
                <li className="mt-4">
                  <strong>Corporate:</strong>{" "}Communicate your message with impact and clarity.
                </li>
                <li>
                  <strong>Nonprofit:</strong>{" "}Showcase the meaningful work you do and build an emotional connection with your audience.
                </li>
                <li>
                  <strong>Healthcare:</strong>{" "}Highlight patient stories and different initiatives to build empathy and trust.
                </li>
                <li>
                  <strong>Education:</strong>{" "}Make complex topics engaging and easy to understand with clear, compelling visuals.
                </li>
        
              </ul>
            </div>
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
};
