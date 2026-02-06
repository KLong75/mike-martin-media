// import components
import PageHeadingBanner from "../ui/pageHeadingBanner";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import JoinTheTeam from "../ui/joinTheTeam";
import BannerVideoWithFadeEffect from "../ui/bannerVideoWithFadeEffect";

const careersPageOgImgUrl = "https://www.mikemartinmedia.com/images/open-graph/careers-og.png";

export const metadata = {
  title: "Video Production Jobs | Mike Martin Media",
  description: "At MMM, we believe in creating more than just great video content. We're committed to making a positive impact through everything we do. If you're someone who shares our values of honesty, accountability, and community, we'd love to hear from you.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/careers",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Video Production Jobs | Mike Martin Media",
    description: "At MMM, we believe in creating more than just great video content. We're committed to making a positive impact through everything we do. If you're someone who shares our values of honesty, accountability, and community, we'd love to hear from you.",
    images: [
      {
        url: careersPageOgImgUrl,
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
    title: "Video Production Jobs | Mike Martin Media",
    description: "At MMM, we believe in creating more than just great video content. We're committed to making a positive impact through everything we do. If you're someone who shares our values of honesty, accountability, and community, we'd love to hear from you.",
    images: [
      {
        url: careersPageOgImgUrl,
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
    <main className="grid grid-cols-1 ">
      <BannerVideoWithFadeEffect
        src="R0000d7JrkYTLaFA6ulhx001SZLeNtO88JdHeCNWIHNmlA"
        title="Mike Martin Media | We Travel"
        containerClassName="padding-top-56-25"
        autoPlay={true}
        loop={true}
        muted={true}
        poster=""
      />
      <div>
        <PageHeadingBanner
          title={"Careers at MMM "}
          heading={"Join Our Team and Make an Impact"}
          text={
            "At MMM, we believe in creating more than just great video content—we’re committed to making a positive impact through everything we do.  If you're someone who shares our values of honesty, accountability, and community, we'd love to hear from you."
          }
        />
      </div>
      <div className=" flex flex-col justify-center mt-6">
        <JoinTheTeam />
      </div>
      <div className="w-full mt-auto mb-6">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
