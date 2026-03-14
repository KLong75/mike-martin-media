//import components
// import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import VideoGallery from "@/app/ui/workGallery";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
import BannerImage from "@/app/ui/bannerImage";
//import data
import {
  nonprofitPageBannerText,
  nonprofitSupport,
} from "@/app/lib/industries/nonprofit";

const nonprofitPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/nonprofit-og.png";

export const metadata = {
  title: "Nonprofit Video Production | Mike Martin Media",
  description:
    "Expert nonprofit video production creating powerful mission stories and fundraising campaigns. From donor outreach to event coverage, amplify your impact with compelling videos. Start now.",
  alternates: {
    canonical: "/industries/nonprofit",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/industries/nonprofit",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Nonprofit Video Production | Mike Martin Media",
    description:
      "Expert nonprofit video production creating powerful mission stories and fundraising campaigns. From donor outreach to event coverage, amplify your impact with compelling videos. Start now.",
    images: [
      {
        url: nonprofitPageOgImgUrl,
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
    title: "Nonprofit Video Production | Mike Martin Media",
    description:
      "Expert nonprofit video production creating powerful mission stories and fundraising campaigns. From donor outreach to event coverage, amplify your impact with compelling videos. Start now.",
    images: [
      {
        url: nonprofitPageOgImgUrl,
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
    <main className="grid grid-cols-1">
      <BannerImage
        src="/images/industries/nonprofit.png"
        alt="Nonprofit Video Production"
        title="Nonprofit Video Production"
        width={1728}
        height={728}
      />
      <div>
        <PageHeadingBanner
          title={nonprofitPageBannerText.title}
          heading={nonprofitPageBannerText.heading}
          text={nonprofitPageBannerText.text}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-full h-full">
          <VideoGallery
            selectedCategories={[
              "Nonprofit",
              "Video Production",
              "Video Editing",
            ]}
            excludedCategory={[]}
            numberOfVideos={3}
          />
        </div>
      </div>
      <div className="flex justify-center lg:my-6 2xl:my-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12 lg:m-6 max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2 ">
            <IndustrySupport
              heading={nonprofitSupport.heading}
              helperText={nonprofitSupport.sub_heading}
              supportList={nonprofitSupport.list_items}
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
