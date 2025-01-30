//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
//import data
import { corporateSupport } from "@/app/lib/industries";

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="">
        <PageHeadingBanner
          title={"Industries - Corporate Video Production"}
          heading={"Elevate Your Business Through Compelling Visuals"}
          text={
            "Communication is key to your success, and at MMM, we understand the need to get your message across clearly and concisely. We are passionate about creating high quality video content that engages stakeholders, inspires, employees, and drives growth."
          }
        />
      </div>
      <div className="flex justify-center">
        <div className="max-w-2000">
          <VideoGallery
            selectedCategory={"Corporate"}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>

      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          <div className="lg:ml-28">
            <IndustrySupport
              heading={"How We Support Corporate Clients"}
              helperText={
                "We specialize in creating a variety of video content tailored for corporations of all sizes:"
              }
              supportList={corporateSupport}
            />
          </div>

          <div className=" hidden lg:block ">
            <div className="flex justify-end md:mr-28 lg:mr-40 invert">
              <OurCapabilitiesList />
            </div>
            <div className="mt-16 flex justify-end md:mr-28 lg:mr-40 invert">
              <IndustriesList />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
