//import components
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
// import VideoGallery from "@/app/ui/workGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
//import data
import {
  corporatePageBannerText,
  corporateSupport,
} from "@/app/lib/industries/corporate";
import { caseStudiesPageBannerText, howWeSupportOurClients } from "../lib/case-studies/case-studies";
import BannerImage from "@/app/ui/bannerImage";

const caseStudiesPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/case-studies-og.png";

export const metadata = {
  title: "Mike Martin Media | Case Studies",
  description:
    "Full-service corporate video production company delivering training, executive communications & promotional content. Professional team elevates your brand with compelling visuals. Contact us.",
  alternates: {
    canonical: "/industries/corporate",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/industries/corporate",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Corporate Video Production | Mike Martin Media",
    description:
      "Full-service corporate video production company delivering training, executive communications & promotional content. Professional team elevates your brand with compelling visuals. Contact us.",
    images: [
      // {
      //   url: corporatePageOgImgUrl,
      //   width: 1200,
      //   height: 630,
      // },
      // {
      //   url: ,
      //   width: 1920,
      //   height: 1080,
      //   alt: "About Mike Martin Media",
      // },
      // {
      //   url: ,
      //   width: 1080,
      //   height: 1080,
      // },
      // {
      //   url: ,
      //   width: 600,
      //   height: 314,
      // }
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Corporate Video Production | Mike Martin Media",
    description:
      "Full-service corporate video production company delivering training, executive communications & promotional content. Professional team elevates your brand with compelling visuals. Contact us.",
    images: [
      // {
      //   url: corporatePageOgImgUrl,
      //   width: 1200,
      //   height: 630,
      // },
      // {
      //   url: ,
      //   width: 800,
      //   height: 418,
      // },
    ],
  },
};

export default function Page() {
  return (
    <main className="grid grid-cols-1">
      <BannerImage
        src="/images/case-studies/option-1.png"
        alt="Mike Martin Media | Case Studies"
        title="Case Studies"
        width={1920}
        height={1080}
      />
      <div className="">
        <PageHeadingBanner
          title={caseStudiesPageBannerText.title}
          heading={caseStudiesPageBannerText.heading}
          text={caseStudiesPageBannerText.text}
          text2={caseStudiesPageBannerText.text2}
        />
      </div>
      {/* <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={[
              "Corporate",
              "Video Production",
              "Video Editing",
            ]}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div> */}
      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12 lg:m-6 max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2 ">
            <IndustrySupport
              heading={howWeSupportOurClients.heading}
              helperText={howWeSupportOurClients.sub_heading}
              supportList={howWeSupportOurClients.list_items}
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