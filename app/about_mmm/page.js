// import from next
import Image from "next/image";
// import data
import { weTextBlockData } from "../lib/data";
// import components
import ContactUsButton from "../ui/contactUsButton";
import WeTextBlock from "../ui/weTextBlock";
import MeetTheTeamButton from "../ui/meetTheTeamButton";
import TeamGallery from "../ui/teamGallery";
import BackToHomeLink from "../ui/backToHome";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import TextSegment from "../ui/textSegment";
import InstagramWidget from "../ui/instagramWidget";
import BannerImage from "../ui/bannerImg";
import BannerVideo from "../ui/bannerVideo";

export const metadata = {
  title: "About MMM",
};

export default function Page() {
  return (
    <main>
      <BannerVideo
        src="https://player.vimeo.com/video/906520722?h=fe8eda318f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM Promotional Video"
      />
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h2 className="text-2xl md:text-4xl font-bold mr-2">ABOUT </h2>
        <div className="flex justify-center items-center w-20 md:w-24 h-auto mb-1 md:mb-.5">
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
      
      <div className="mt-2 mb-1 ">
        <BackToHomeLink />
      </div>
      {/* <div
        className="flex justify-center items-center max-w-4xl mx-auto pt-6 pb-2"
        id="blog-section-image-container"
        style={{ maxWidth: "275px" }} 
      >
        <BannerImage
          id="blog-section-image"
          src="/images/aboutPage/mike-standing-camera.jpg"
          alt="Mike in van with camera"
          width={1100}
          height={1600}
        />
      </div> */}
      <div>
        <TextSegment
          text="For over 15 years, MMM has combined the latest technology with the
              best in-house talent to create impactful videos for organizations
              all over the United States and the world. We partner with
              corporations, medical and educational institutions, and nonprofit
              organizations to bring their vision to life. Our expertise
              provides a seamless production experience that you probably didn’t
              know could exist. We produce the quality work and client
              experience that you need along with a valuable partnership that
              will bring growth and success."
        />
      </div>
      <div
        className="flex justify-center items-center max-w-4xl mx-auto"
        id="blog-section-image-container"
        style={{ maxWidth: "1024px" }} // Set the max-width to match desired value
      >
        <BannerImage
          id="blog-section-image"
          src="/images/aboutPage/mike-van.jpg"
          alt="Mike in van with camera"
          width={2048}
          height={1363}
        />
      </div>

      {/* <div className="flex justify-center items-center mt-10 -mb-6 p-2">
        <h2 className="text-4xl font-bold mr-2">About </h2>
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:p-16"> */}
      {/* <div className="flex flex-col justify-center items-center h-full p-6">
          <div className="lg:h-3/4">
            <p className="text-left lg:text-2xl w-full shadow-2xl p-6">
              For over 15 years, MMM has combined the latest technology with the
              best in-house talent to create impactful videos for organizations
              all over the United States and the world. We partner with
              corporations, medical and educational institutions, and nonprofit
              organizations to bring their vision to life. Our expertise
              provides a seamless production experience that you probably didn’t
              know could exist. We produce the quality work and client
              experience that you need along with a valuable partnership that
              will bring growth and success.
            </p>
          </div>
        </div> */}
      {/* <div className="flex flex-col justify-center items-center p-6"> */}
      {/* <div className="shadow-2xl mb-6 w-full flex justify-center lg:w-3/4">
            <Image
              src="/images/aboutPage/mike-van.jpg"
              width={2048}
              height={1363}
              alt="Mike in van with camera"
              className="shadow-xl"
            />
          </div> */}
      {/* <div className="shadow-2xl w-full flex justify-center lg:w-1/2 ">
            <Image
              src="/images/aboutPage/mike-standing-camera.jpg"
              width={1100}
              height={1600}
              alt="Mike standing with camera"
              className="shadow-xl"
            />
          </div> */}
      {/* </div> */}
      {/* </div> */}
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

      {/* <section className="my-12">
        <InstagramWidget />
      </section> */}

      <section className="mt-8 md:mt-12">
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
      <div className="w-8 md:w-10 h-auto mx-2 mb-1 md:mb-0 ">
            <Image
              src="/branding/singleMWhite.png"
              width={3492}
              height={2716}
              alt="company logo"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold -ml-2" id='mmm-team'>eet The Team</h2>
      </div>
        {/* <div className="flex justify-center items-center ">
          <div className="w-12 h-8 mx-2 mb-4">
            <Image
              src="/branding/singleMBlack.png"
              width={3492}
              height={2716}
              alt="company logo"
            />
          </div>
          <h2 className="text-4xl font-bold -ml-2">eet The Team</h2>
        </div> */}
        <div className="flex justify-center items-center mb-4">
          <TextSegment text="Our team brings decades of combined experience from the broadcast and production industries.  We are a tight-knit team, and we keep our work in-house. We work hard, play hard, and spend a lot of time laughing." />
        </div>
        <div className="-mt-14">
          <TeamGallery />
        </div>
      </section>
      <section>
        <InstagramWidget />
      </section>
      <div className="mb-4">
        <BackToHomeLink />
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
