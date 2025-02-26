//import components
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
import BannerImage from "@/app/ui/bannerImage";
//import data
import { healthcarePageBannerText, healthcareSupport } from "@/app/lib/industries/healthcare";

export const metadata = {
  title: "Healthcare & Medical Videography | Mike Martin Media",
  description:
    "Trusted healthcare & medical videography specialists creating patient education, staff training & facility showcase videos. HIPAA-compliant team serving leading hospitals. Schedule a consultation.",
  alternates: {
    canonical: "/industries/medical/",
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerImage
        src="/images/industries/healthcare.png"
        alt="Healthcare Video Production"
        title="Healthcare Video Production"
        width={1920}
        height={1080}
      />
      <div>
        <PageHeadingBanner
          title={healthcarePageBannerText.title}
          heading={healthcarePageBannerText.heading}
          text={healthcarePageBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Medical"]}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>
      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12 lg:m-6 max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2 ">
            <IndustrySupport
              heading={healthcareSupport.heading}
              helperText={healthcareSupport.sub_heading}
              supportList={healthcareSupport.list_items}
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