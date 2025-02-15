//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import CapabilityHighLightsSection from "@/app/ui/capabilityHighlightsSection";
import OurProcess from "@/app/ui/ourProcess";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import FormattedList from "@/app/ui/formattedList.js";
import PhotographyGallery from "@/app/ui/photographyGallery";
// import page data
import {
  photographyPageHeadingBannerText,
  photographyCapabilities,
  importanceOfPhotography,
  photographyProcess,
  whoBenefitsFromPhotography,
  examplePhotographyImageSrc,
} from "../../lib/photography.js";
// import images
import { photographyCoverImages } from "../../lib/photography.js"
import TriPicBanner from "@/app/ui/triPicBanner.js";

export const metadata = {
  title: "Photography Company | Mike Martin Media",
  description:
    "Award-winning photography company delivering stunning commercial, portrait, and event photography. Transform your brand with professional images that tell your story. Book now.",
  alternates: {
    canonical: "/capabilities/photography/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Photography_Video"
      />
      <div>
        <PageHeadingBanner
          title={photographyPageHeadingBannerText.title}
          heading={photographyPageHeadingBannerText.heading}
          text={photographyPageHeadingBannerText.text}
        />
      </div>
      <div className="flex justify-center items-center w-full h-auto">
      <TriPicBanner />
        {/* <div className=" grid grid-cols-1 md:grid-cols-3 ">
          <div className="w-full h-full">
            <PhotographyGallery
              client={"Catholic Charities of St. Louis"}
              cover_img_src={
                "/images/photography-cover-images/catholic-charities-437x655.png"
              }
              width={437}
              height={655}
            />
          </div>
          <div className="w-full h-full">
            <PhotographyGallery
              client={"Prasino"}
              cover_img_src={
                "/images/photography-cover-images/prasino-cover-img-437x655.png"
              }
              width={437}
              height={655}
            />
          </div>
          <div className="w-full h-full">
            <PhotographyGallery
              client={"Club Fitness"}
              cover_img_src={
                "/images/photography-cover-images/club-fitness-cover-img-437x655.png"
              }
              width={437}
              height={655}
            />
          </div>
        </div> */}
      </div>
    </main>
  );
}
