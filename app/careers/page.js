// import components
import BannerVideo from "../ui/bannerVideo";
import PageHeadingBanner from "../ui/pageHeadingBanner";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
import JoinTheTeam from "../ui/joinTheTeam";
// import images
import blackMmmLogo from "../../public/branding/black-mmm-logo-1642x560.png";

export const metadata = {
  title: "Careers",
  description: "Work at MMM! Apply on ZipRecruiter. We are hiring!",
  alternates: {
    canonical: "/careers",
  },
};

export default function Page() {
  return (
    // <main className="flex flex-col justify-center items-center">
    //   <div className="w-52 sm:w-72 md:w-128 lg:w-144 py-12">
    //     <BannerImage
    //       src={blackMmmLogo}
    //       alt="Work at MMM"
    //       priority
    //     />
    //   </div>
    //   <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
    //     <h1 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
    //       CAREERS
    //     </h1>
    //   </div>
    //   <div className="flex-grow flex flex-col justify-center max-w-600 mt-6">
    //     <JoinTheTeam />
    //   </div>
    //   <div className="w-full mt-auto">
    //     <MMMLineLogoBlack />
    //   </div>
    // </main>
    <main className="grid grid-cols-1 ">
      <BannerVideo
        src="https://player.vimeo.com/video/943724347?h=791f0d08b9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM Travel Video"
      />
      <div className="">
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
