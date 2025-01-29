//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import CapabilitiesBanner from "@/app/ui/capabilitiesBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="">
        <CapabilitiesBanner
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
      {/* <div className="grid grid-cols-1 lg:mt-12 xl:mt-24 mb-12 xl:mb-20">
        <CapabilityHighLightsSection
          headline={"Advantages of Aerial Videography and Photography"}
          highlights={highlights}
          video_src={
            "https://player.vimeo.com/video/799944146?h=7ce1e106da&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&loop=1&muted=0&byline=0&portrait=0"
          }
        />
      </div> */}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 lg:p-12 lg:m-6 max-w-800">
          {/* <div className="lg:mx-12">
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl  lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
                FAA Certified and Ready for Any Environment
              </h6>
              <p className="sm:text-lg">
                Safety and compliance are number onf =e for our team. Our drone.
                pilots are fully FAA-certified, which allows us to operate
                drones legally on your behalf. Whether we&apos;re getting
                footage of open landscapes or maneuvering through tight indoor
                spaces, we can do it safely and effectively.
              </p>
            </div>
            <div className="lg:m-6 mb-12 lg:mb-20">
              <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
                Who Benefits From Drone Photography and Videography?
              </h6>
              <p className="sm:text-lg">
                From showcasing your real estate and construction properties to
                highlighting resort amenities, attractions, and local landscapes
                for the tourism and hospitality industry, MMM can handle your
                drone photography needs.
              </p>
              <p className="sm:text-lg mt-4">
                Let us help you capture the excitement of festivals, concerts,
                and sports events, monitor crops and land with aerial surveys
                and conduct inspections, surveys, and research with minimal
                disruption.
              </p>
            </div>
          </div> */}

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
