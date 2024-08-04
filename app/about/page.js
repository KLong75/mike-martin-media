// import from next
import Image from "next/image";
// import data
import { weTextBlockData } from "../lib/data";
// import components
import WeTextBlock from "../ui/weTextBlock";
import TeamGallery from "../ui/teamGallery";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import InstagramWidget from "../ui/instagramWidget";
import BannerImage from "../ui/bannerImage";
import ContactUsButton from "../ui/contactUsButton";
import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
// import text
import { aboutPageText } from "../lib/siteText";

export const metadata = {
  title: "About",
  description:
    "For over 15 years, Mike Martin Media has combined the latest technology with the best in-house talent to create impactful videos for organizations all over the United States and the world. We partner with corporations, medical institutions, education institutions, and nonprofit organizations to bring their vision to life. Our expertise provides a seamless production experience that you probably didn't know could exist. We produce the quality work and client experience that you need along with a valuable partnership that will bring growth and success.",
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
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mr-2">
          ABOUT
        </h1>
        <div className="flex justify-center items-center w-24 md:w-36 lg:w-40 h-auto mb-1.5 md:p-1">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
            priority
            as="image"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-6 mt-2 md:mt-6">
        <div
          className="flex justify-center items-center"
          id="blog-section-image-container"
          style={{ maxWidth: "" }} // Set the max-width to match desired value
        >
          <div className="p-2 md:p-6 ">
            <BannerImage
              id="blog-section-image"
              src="/images/aboutPage/mike-van-big-min.jpg"
              alt="Mike in van with camera"
              width={2048}
              height={1363}
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
          <div className="flex justify-center items-center sm:mb-12 ">
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
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <div
            className="w-8 md:w-10 h-auto mx-2  "
            style={{ marginBottom: ".2rem" }}>
            <Image
              src="/branding/singleMWhiteResizeSmall.png"
              width={349}
              height={271}
              alt="company logo"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold -ml-2" id="mmm-team">
            eet The Team
          </h2>
        </div>
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
