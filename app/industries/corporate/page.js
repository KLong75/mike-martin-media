//import components
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
//import data
import { corporatePageBannerText, corporateSupport } from "@/app/lib/industries/corporate";
import BannerImage from "@/app/ui/bannerImage";

export const metadata = {
  title: "Corporate Video Production | Mike Martin Media",
  description:
    "Full-service corporate video production company delivering training, executive communications & promotional content. Professional team elevates your brand with compelling visuals. Contact us.",
  alternates: {
    canonical: "/industries/corporate/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      {/* <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Corporate Video Production"
      /> */}
      <BannerImage
        src="/images/industries/corporate.png"
        alt="Corporate Video Production"
        title="Corporate Video Production"
        width={1920}
        height={1080}
      />
      <div className="">
        <PageHeadingBanner
          title={corporatePageBannerText.title}
          heading={corporatePageBannerText.heading}
          text={corporatePageBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Corporate"]}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>
      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12 lg:m-6 max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2 ">
            <IndustrySupport
              heading={corporateSupport.heading}
              helperText={corporateSupport.sub_heading}
              supportList={corporateSupport.list_items}
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