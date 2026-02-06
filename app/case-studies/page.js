// import from next
import Image from "next/image";
//import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import MMMLineLogoHeading from "../ui/mmmLineLogoHeading";
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
// import VideoGallery from "@/app/ui/workGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
import BlogPostGallery from "../ui/blogPostGallery";
//import data
import {
  caseStudiesPageBannerText,
  howWeSupportOurClients,
} from "../lib/case-studies/case-studies";
import BannerImage from "@/app/ui/bannerImage";

const caseStudiesPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/case-studies-og.png";

export const metadata = {
  title: "Mike Martin Media | Case Studies",
  description:
    "Full-service corporate video production company delivering training, executive communications & promotional content. Professional team elevates your brand with compelling visuals. Contact us.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/case-studies",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Mike Martin Media | Case Studies",
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
    title: "Mike Martin Media | Case Studies",
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
        width={1536}
        height={1024}
      />
      {/* <BannerImage
        src="/images/case-studies/option-1-resize.png"
        alt="Mike Martin Media | Case Studies"
        title="Case Studies"
        width={1092}
        height={728}
      /> */}
      <div className="">
        <PageHeadingBanner
          title={caseStudiesPageBannerText.title}
          heading={caseStudiesPageBannerText.heading}
          text={caseStudiesPageBannerText.text}
          // text2={caseStudiesPageBannerText.text2}
        />
      </div>

      <div className="px-2 pb-12 md:pb-6 lg:pb-0 pt-6">
        <BlogPostGallery number_of_posts={3} priorityFirstImage={false} />
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
      {/* <div className="flex justify-center lg:my-6 2xl:my-12"> */}

      <div className="w-full relative flex flex-col items-center justify-center">
        <p className="flex justify-center items-center text-center italic font-semibold  text-lg absolute bottom-2 left-24">
          These stories highlight how thoughtful video production can build
          trust, drive engagement, and support real business and mission-driven
          goals.
        </p>
        
          <Image
            src="/branding/line-logo-black.png"
            alt=""
            width={1440}
            height={65}
            className=""
          />
        
      </div>

      <div className="flex justify-center">
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
