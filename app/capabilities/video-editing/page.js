//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import CapabilitiesBanner from "@/app/ui/capabilitiesBanner";

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Video_Page_Banner_Video"
      />
      <div className="">
        <CapabilitiesBanner
          title={"Capabilities - Video Editing"}
          heading={"Elevate Your Vision with Drone Services"}
          text={"Drone footage offers perspectives you can't get anywhere else. MMM has FAA certification and is able to capture beautiful photography and videography, both indoors and outdoors. We are committed to creating visuals that make a difference in your storytelling."}
        />
      </div>

      <VideoGallery
        selectedCategory={"All Videos"}
        excludedCategory={[]}
        numberOfVideos={6}
      />
    </main>
  );
}
