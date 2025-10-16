// import components
import BannerVideoWithFadeEffect from "../ui/bannerVideoWithFadeEffect";
import PageHeadingBanner from "../ui/pageHeadingBanner";
import VideoFilter from "../ui/video-filter";

const ourWorkPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/our-work-og.png";

export const metadata = {
  title: "Our Work | Mike Martin Media",
  description:
    "Award winning, professional video production. Content creation, live recording, post-production editing, colorgrading, audio engineering, on screen graphics, green screen, visual effets, commercials, promotions, and so much more.",
  alternates: {
    canonical: "/our-work",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/our-work",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Our Work | Mike Martin Media",
    description:
      "Award winning, professional video production. Content creation, live recording, post-production editing, colorgrading, audio engineering, on screen graphics, green screen, visual effets, commercials, promotions, and so much more.",
    images: [
      {
        url: ourWorkPageOgImgUrl,
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
    title: "Our Work | Mike Martin Media",
    description:
      "Award winning, professional video production. Content creation, live recording, post-production editing, colorgrading, audio engineering, on screen graphics, green screen, visual effets, commercials, promotions, and so much more.",
    images: [
      {
        url: ourWorkPageOgImgUrl,
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
    <main>
      <div className="pb-20 ">
        <BannerVideoWithFadeEffect
          src="PtWJLW7g8zmVIlrDUQrHas45MGty0102w4tH9tiGwZIyQ"
          title="Mike Martin Media | Our Work"
          containerClassName="padding-top-42-19"
          autoPlay={true}
          loop={true}
          muted={true}
        />
      </div>
      <div className="flex justify-center items-center bg-black -mt-20">
        <PageHeadingBanner
          title={"Our Work"}
          heading={"Your Partner Every Step of the Process"}
          text={
            "Award winning, professional video production. Content creation, live recording, post-production editing, colorgrading, audio engineering, on screen graphics, green screen, visual effets, commercials, promotions, and so much more."
          }
        />
      </div>
      <div>
        <VideoFilter />
      </div>
    </main>
  );
}
