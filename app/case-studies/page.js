//import components
import BannerVideoWithFadeEffect from "@/app/ui/bannerVideoWithFadeEffect";
import PageHeadingBanner from "@/app/ui/pageHeadingBanner";
import OurCapabilitiesList from "@/app/ui/ourCapabilitiesList";
import IndustriesList from "@/app/ui/industriesList";
import IndustrySupport from "@/app/ui/industrySupport";
import CaseStudyPreview from "@/app/ui/caseStudyPreview";
//import data
import {
  caseStudiesPageBannerText,
  howWeSupportOurClients,
  caseStudies,
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
      <BannerVideoWithFadeEffect
        // src="4qT2Obf2HwbrRle6QkWRUL5ykXzqyqnR4ZjkuDSj15M"
        src="ifZrW02klS2hW64gqdWpSr7FjcN7hYU3EmHu00ld8InXU"
        title="Mike Martin Media | Case Studies"
        containerClassName="padding-top-42-19"
        autoPlay={true}
        loop={true}
        muted={true}
        poster=""
      />
      <div>
        <PageHeadingBanner
          title={caseStudiesPageBannerText.title}
          heading={caseStudiesPageBannerText.heading}
          text={caseStudiesPageBannerText.text}
          text2={caseStudiesPageBannerText.text2}
        />
      </div>

      {/* <div>
        <p className="text-center text-xl font-semibold max-w-3xl mx-auto my-12 px-4 italic">
          {caseStudiesPageBannerText.text2}
        </p>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-0 p-6 md:p-12 max-w-800 mx-auto">
        {caseStudies.map((caseStudy) => (
          <CaseStudyPreview key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 p-8 lg:p-12  max-w-1200">
          <div className="lg:ml-28 lg:mr-36 col-span-2">
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
