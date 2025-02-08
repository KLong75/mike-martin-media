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
  videoProductionPageHeadingBannerText,
  videoProductionHighlights,
  videoProductionProcess,
  exampleVideoProductionVideoSrc,
} from "../../lib/video-production.js";
import Link from "next/link.js";

export const metadata = {
  title: "Business Video Production | Mike Martin Media",
  description:
    "Professional business video production creating engaging content that drives results. Full-service team handles creative, filming, and post-production for your brand story. Book your project.",
  alternates: {
    canonical: "/capabilities/video-production/",
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
          title={videoProductionPageHeadingBannerText.title}
          heading={videoProductionPageHeadingBannerText.heading}
          text={videoProductionPageHeadingBannerText.text}
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
          headline={videoProductionHighlights.heading}
          highlights={videoProductionHighlights.highlights}
          video_src={exampleVideoProductionVideoSrc}
        />
      </div>
      <div className="flex justify-center bg-[#F0F0F0]">
        <div className="grid grid-cols-1 max-w-800 my-12">
          <OurProcess
            title={videoProductionProcess.heading}
            steps={videoProductionProcess.steps}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          <div className="lg:mx-12">
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">
                Our Video Production Capabilities
              </h6>
              <ul className="list-disc sm:text-lg ml-6">
                <lh className="font-semibold text-lg lg:text-xl">
                  Our full video production services can be tailored to meet
                  your specific needs:
                </lh>
                <li className="mt-4">
                  <strong>Creative Development:</strong> From brainstorming to
                  storyboarding, we collaborate with you to create ideas that
                  align with your vision.
                </li>
                <li>
                  <strong>Filming and Directing:</strong> Our experienced crew
                  captures high-quality footage using high quality cameras,
                  lighting, and audio equipment.
                </li>
                <li>
                  <strong>Sound Design:</strong> We make sure your video’s audio
                  quality elevates the viewer experience.
                </li>
                <li>
                  <strong>Post-Production Editing:</strong> Our team crafts your
                  story so that it captures attention and keeps your audience
                  engaged.
                </li>
                <li>
                  <strong>Motion Graphics and Visual Effects:</strong> Using
                  motion graphics and other visual effects enhances your video
                  and elevates your story.
                </li>
              </ul>
            </div>
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl">
                Video Production for Every Industry
              </h6>
              <ul className="list-disc sm:text-lg ml-6">
                <lh className="font-semibold text-lg lg:text-xl">
                  We have produced relevant, engaging content for a wide range
                  of industries:
                </lh>
                <li className="mt-4">
                  <Link href="/industries/corporate/">
                    <strong>Corporate:</strong>
                  </Link>{" "}
                  Highlight your brand’s story and connect with your audience.
                </li>
                <li>
                  <strong>Nonprofit:</strong> Highlight your mission through
                  real stories to engage supporters and build awareness.
                </li>
                <li>
                  <strong>Healthcare:</strong> Feature patient stories and
                  explain procedures and technology in a way that builds trust
                  and humanizes your brand.
                </li>
                <li>
                  <strong>Education:</strong> Create educational and training
                  videos that connect with students, faculty, and stakeholders.
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
}
