//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";

const highlights = [
  {
    label: "Enhanced Storytelling",
    description: "Add depth and scale to your stories.",
  },
  {
    label: "Showcase Properties",
    description: "Ideal for real estate and construction projects.",
  },
  {
    label: "Elevate Events",
    description:
      "Capture outdoor festivals, weddings, and corporate gatherings.",
  },
];

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Video_Page_Banner_Video"
      />
      <div className="">
        <PageHeadingBanner
          title={"Capabilities - Video Editing"}
          heading={"Elevate Your Vision with Drone Services"}
          text={
            "Drone footage offers perspectives you can't get anywhere else. MMM has FAA certification and is able to capture beautiful photography and videography, both indoors and outdoors. We are committed to creating visuals that make a difference in your storytelling."
          }
        />
      </div>

      <VideoGallery
        selectedCategory={"Drone"}
        excludedCategory={[]}
        numberOfVideos={6}
      />

      <div className="grid grid-cols-1 mt-24 mb-20">
        <CapabilityHighLightsSection
          headline={"Advantages of Aerial Videography and Photography"}
          highlights={highlights}
          video_src={
            "https://player.vimeo.com/video/799944146?h=7ce1e106da&badge=0&autopause=0&player_id=0&app_id=58479&controls=1&loop=1&muted=0&byline=0&portrait=0"
          }
        />
      </div>
      <div className="grid grid-cols-1">{/* <OurProcess /> */}</div>
    </main>
  );
}
