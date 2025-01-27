//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import CapabilitiesBanner from "@/app/ui/capabilitiesBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";

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

const steps = [
  {
    name: "Consultation",
    description:
      " We discuss your vision, objectives, and any specific requirements.",
  },
  {
    name: "Site Assessment",
    description:
      "We evaluate the shoot location to plan for necessary safety measures and the best flight paths.",
  },
  {
    name: "Flight Planning",
    description:
      "Our team secures necessary permissions in compliance with FAA regulations",
  },
  {
    name: "The Shoot",
    description:
      "We capture the footage and photos, ensuring quality and safety throughout the operation.",
  },
  {
    name: "Post-Production",
    description:
      "We edit and enhance your photos and videos to meet your specifications.",
  },
  {
    name: "Review & Delivery",
    description:
      "You'll receive the final assets in your preferred formats, ready to use.",
  },
];

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="">
        <CapabilitiesBanner
          title={"Capabilities - Drone"}
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
      <div className="grid grid-cols-1 ">
        <OurProcess title={"Our Process"} steps={steps} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-12 m-12">
        <div>
          <div>
            <div>
              <h6 className="font-bold text-4xl">FAA Certified and Ready for Any Environment</h6>
            </div>
            <div>
              <p className="text-lg">
                Safety and compliance are number onf =e for our team. Our drone.
                pilots are fully FAA-certified. lorem ipsum blah blah lorem
                ipsum
              </p>
            </div>
          </div>
          <div>
            <div>
            <h6 className="font-bold text-4xl">Who Benefits From Drone Photography and Videography?</h6>
            </div>
            <div>
            <p className="text-lg">
                Safety and compliance are number onf =e for our team. Our drone.
                pilots are fully FAA-certified. lorem ipsum blah blah lorem
                ipsum
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex justify-center mb-12 invert">
            <OurCapabilitiesList />
          </div>
          <div className="flex justify-center invert">
            <IndustriesList />
          </div>
        </div>
      </div>
    </main>
  );
}
