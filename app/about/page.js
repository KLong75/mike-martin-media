// import from next
import Link from "next/link";
// import data
import { weTextBlockData } from "../lib/data";
// import components
import Image from "../ui/image";
import WeTextBlock from "../ui/weTextBlock";
import TeamGallery from "../ui/teamGallery";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import InstagramWidget from "../ui/instagramWidget";
import BannerImage from "../ui/bannerImage";
import ContactUsButton from "../ui/contactUsButton";
import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
import MMMLineLogoHeading from "../ui/mmmLineLogoHeading";
// iport images
import mikeInVanWithCamera from "../../public/images/about-page/mike-in-van-with-camera.jpg";
// import text
import { aboutPageText } from "../lib/siteText";
import PageHeadingBanner from "../ui/pageHeadingBanner";

export const metadata = {
  title: "About",
  description:
    "For over 15 years, Mike Martin Media has combined the latest technology with the best in-house talent to create impactful videos for organizations all over the United States and the world. We partner with corporations, medical institutions, education institutions, and nonprofit organizations to bring their vision to life. Our expertise provides a seamless production experience that you probably didn't know could exist. We produce the quality work and client experience that you need along with a valuable partnership that will bring growth and success.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main>
      <div className="">
        <BannerVideoWithFadeNoLogo
          src="https://player.vimeo.com/video/953317163?h=21c26f1413&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="About_Page_Banner_Video"
        />
      </div>
      <div>
        <PageHeadingBanner
          title={"About Us"}
          heading={"Turning Your Ideas Into Impactful Stories"}
          text={
            <>
            At MMM, we create video content{" "}
            <Link 
              href="/capabilities/video-production"
              className="underline"
            >
              video content
            </Link>{" "}
            that not only looks great but also makes a positive impact. We believe in the power of telling stories to inspire, connect and make real change. Every project we complete is an opportunity to help our clients succeed while contributing something good to the world.
          </>
          }
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 mt-2 md:mt-6">
        <div className="flex justify-center items-center">
          <div className="p-2 md:p-6 ">
            <BannerImage
              src={mikeInVanWithCamera}
              alt="Mike Martin in a white van with a video camera"
              priority
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-center items-center mt-6 mb-6 sm:mb-12 3xl:-mb-6">
            <p
              className="md:text-2xl xl:text-2xl 3xl:text-4xl text-center lg:text-left text-balance w-10/12"
              id="about-text">
              {aboutPageText.about_text_a}
            </p>
          </div>
          <div className="flex justify-center items-center sm:mb-12 mt-12">
            <p
              className="md:text-2xl xl:text-2xl 3xl:text-4xl text-center lg:text-left text-balance w-10/12"
              id="about-text">
              {aboutPageText.about_text_b}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <ContactUsButton />
      </div>
      <section className="md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-6">
          {weTextBlockData.map((block) => (
            <WeTextBlock
              key={block.headline}
              headline={block.headline}
              text={block.text}
            />
          ))}
        </div>
      </section>
      <section className="mt-8 md:mt-12">
      <div className="">
          <MMMLineLogoHeading headline="Meet The Team" heading_level={"h2"} />
        </div>
        {/* <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <div className="w-8 md:w-10 h-auto mx-2 meet-the-team-m-logo-container">
            <Image
              src="/branding/singleMWhiteResizeSmall.png"
              width={349}
              height={271}
              alt="M"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold -ml-2" id="mmm-team">
            eet The Team
          </h2>
        </div> */}
        <div className="flex justify-center items-center mb-4 mt-2 md:mt-4 md:mb-8 ">
          <p className="md:text-lg xl:text-xl 3xl:text-2xl p-6 text-center text-balance xl:mt-6 xl:mb-6">
            {aboutPageText.meet_the_team_text}
          </p>
        </div>
        <div className="-mt-14">
          <TeamGallery />
        </div>
      </section>
      <section className="-mt-6 md:mt-0 md:-mb-20">
        <InstagramWidget />
      </section>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
