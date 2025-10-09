// import components
// import BannerVideo from "../ui/bannerVideo";
// import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
// import BannerVideoWithFadeEffect from "../ui/bannerVideoWithFadeEffect";
import PageHeadingBanner from "../ui/pageHeadingBanner";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
// import BannerImage from "../ui/bannerImage";
import JoinTheTeam from "../ui/joinTheTeam";
// import images
// import blackMmmLogo from "../../public/branding/black-mmm-logo-1642x560.png";
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
        src="https://player.vimeo.com/video/943724347?h=791f0d08b9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Mike Martin Media | We Travel"
        containerClassName={"banner-vid-with-fade-container"}
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
      <div className="w-full mt-auto">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
