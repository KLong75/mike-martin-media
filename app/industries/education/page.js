//import components
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/videoGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
import BannerImage from "@/app/ui/bannerImage";
//import data
import {
  educationPageBannerText,
  educationSupport,
} from "@/app/lib/industries/education";

const educationPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/education-og.png";

export const metadata = {
  title: "Education Video Production | Mike Martin Media",
  description:
    "Professional education video production creating engaging content for schools and universities. From virtual tours to instructional videos, inspire learning through compelling storytelling. Start now.",
  alternates: {
    canonical: "/industries/education",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/industries/education",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Education Video Production | Mike Martin Media",
    description:
      "Professional education video production creating engaging content for schools and universities. From virtual tours to instructional videos, inspire learning through compelling storytelling. Start now.",
    images: [
      {
        url: educationPageOgImgUrl,
        width: 1200,
        height: 630,
      },
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
    title: "Education Video Production | Mike Martin Media",
    description:
      "Professional education video production creating engaging content for schools and universities. From virtual tours to instructional videos, inspire learning through compelling storytelling. Start now.",
    images: [
      {
        url: educationPageOgImgUrl,
        width: 1200,
        height: 630,
      },
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
    <div className="grid grid-cols-1">
      <BannerImage
        src="/images/industries/education.png"
        alt="Corporate Video Production"
        title="Corporate Video Production"
        width={1920}
        height={1080}
      />
      <div>
        <PageHeadingBanner
          title={educationPageBannerText.title}
          heading={educationPageBannerText.heading}
          text={educationPageBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={["Education"]}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>
      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12 lg:m-6 max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2 ">
            <IndustrySupport
              heading={educationSupport.heading}
              helperText={educationSupport.sub_heading}
              supportList={educationSupport.list_items}
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
    </div>
  );
}
