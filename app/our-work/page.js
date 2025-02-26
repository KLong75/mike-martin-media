// import from next
import Link from "next/link";
// import components
import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
import PageHeadingBanner from "../ui/pageHeadingBanner";
import VideoFilter from "../ui/video-filter";

export const metadata = {
  title: "Our Work | Mike Martin Media",
  description:
    "We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process.",
  alternates: {
    canonical: "/our-work",
  },
};

export default function Page() {
  return (
      <main>
        <div className="pb-20 ">
          <BannerVideoWithFadeNoLogo
            src="https://player.vimeo.com/video/938224537?h=7b77483940&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
            title="Our_Work_Page_Banner_Video"
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
