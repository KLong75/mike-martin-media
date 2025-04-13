// "use client";
// import from next
import Link from "next/link";
// import components
// import Image from "./ui/image";
// import BannerVideo from "./ui/bannerVideo";
// import MmmSiteButton from "./ui/mmmSiteButton";
// import MmmSiteButtonTextOnly from "./ui/mmmSiteButtonTextOnly";
// import MMMLineLogoBlack from "./ui/mmmLineLogoBlack";
// import MmmSiteButtonLogoFirst from "./ui/mmmSiteButtonLogoFirst";
import BannerVideoWithFadeEffect from "./ui/bannerVideoWithFadeEffect";
import BannerVideoWithFadeNoLogo from "./ui/bannerVideoWithFadeNoLogo";
// import BannerImage from "./ui/bannerImage";
import MMMLineLogoHeading from "./ui/mmmLineLogoHeading";
import TestimonialDisplay from "./ui/testimonialDisplay";
import MMMTeamPhotoWithLogo from "./ui/mmmTeamPhotoWithLogo";
// import Images
// import outdoorCorporateVideoShoot from "../public/images/home-page/outdoor-corporate-video-shoot.png";
//import data
// import { testimonials } from "./lib/testimonials";
// import text
// import { homePageText } from "./lib/siteText";
// import CapabilityBlock from "./ui/capabilityBlock";
import CapabilityBlockContainer from "./ui/capabilityBlockContainer";
import FourPicGrid from "./ui/fourPicGrid";
import BlogPostGallery from "./ui/blogPostGallery";

export default function Home() {
  return (
    <main className="grid grid-cols-1 ">
      <BannerVideoWithFadeEffect
        src="https://player.vimeo.com/video/938224346?h=85055436bd&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        //  src="https://player.vimeo.com/video/1059137126?h=580e267bea&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Mike Martin Media - Ideas in Motion"
        text="IDEAS IN MOTION"
        ratio_container={"banner-vid-wide"}
      />
      <section className="flex justify-center items-center p-6 md:p-12 lg:p-28 xl:p-42">
        <div
          id="home-page-about-section"
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-12 xl:gap-16 max-w-800 flex justify-center items-center">
          <div className="order-2 xl:order-1 relative flex justify-center items-center">
            <MMMTeamPhotoWithLogo />
            {/* <div className="relative w-full">
              <Image
                priority
                src="/images/home-page/mmm-team.png"
                width={708}
                height={36}
                alt="The MMM Team"
                aria-label="Your Ideas Made"
                className="w-full h-auto"
              />
              <Image
                priority
                src="/branding/mmm-line-logo-left-white.png"
                width={708}
                height={65}
                alt=""
                className="absolute bottom-[2rem] sm:bottom-[3rem] md:bottom-[3rem] lg:bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full"
              />
            </div> */}
          </div>

          <div className="flex flex-col justify-left order-1 xl:order-2 max-w-[708px]">
            <h1 className="font-semibold text-3xl sm:4xl md:text-5xl 2xl:text-6xl">
              Your Trusted St. Louis Video Production Partner
            </h1>
            <p className="md:text-lg xl:text-xl text-balance my-4 lg:my-6">
              Our team brings decades of combined experience from the broadcast
              and production industries to produce your ideal content. We are a
              tight-knit team and we keep our work in-house. We work hard, play
              hard, and spend a lot of time laughing.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link href="/about">
                <div
                  className={`border-2 border-black text-black hover:transform hover:bg-black hover:text-white transition-transform font-semibold rounded-full flex justify-center items-center cursor-pointer w-32 lg:w-36 py-1 lg:px-2`}>
                  <span className="lg:text-lg">About MMM</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <section id="our-work-section">
        <BannerVideoWithFadeNoLogo
          src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="Mike Martin Media | Our Work"
        />
        <div className="flex justify-center">
          <div className="max-w-800 lg:py-24">
            <MMMLineLogoHeading headline="Our Work" heading_level={"h2"} />
            <div className="lg:mt-12 grid grid-cols-1 lg:grid-cols-3 max-w-[1440px]">
              <div className="px-6 flex flex-col">
                <p className="pr-6 mb-6 lg:mb-10 md:text-lg xl:text-xl text-balance">
                  We take pride in every project. We partner with clients of all
                  sizes to bring their ideas to life. From concept to
                  conclusion, we write, shoot, direct, produce, edit, animate,
                  and everything else needed for your production.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Link href="/our-work" className="">
                    <div
                      className={`border-[3px] border-black text-black hover:transform hover:bg-black hover:text-white transition duration-1000 font-semibold rounded-full flex justify-center items-center cursor-pointer w-[14rem] py-1 px-1 mb-4 `}>
                      <span className="lg:text-lg font-bold">Check Out Our Work</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-2 p-2">
                <CapabilityBlockContainer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <FourPicGrid />
      </div>

      {/* Testimonials Section */}
      <section className="grid grid-cols-1 bg-black ">
        <div className="">
          <TestimonialDisplay />
        </div>
      </section>
      <section className="lg:my-24" id="blog-section">
        <div className="">
          <MMMLineLogoHeading headline="Beyond the Lens" heading_level={"h2"} />
        </div>
        <div className="px-2 pb-12 md:pb-6 lg:pb-0 pt-6">
          <BlogPostGallery number_of_posts={3} />
        </div>
        {/* <BannerVideo
          src="https://player.vimeo.com/video/943724347?h=791f0d08b9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Travel Video"
        /> */}
        {/* 
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 -mt-1">
          <h3 className="text-center font-bold text-3xl md:text-4xl">
            BEYOND THE LENS
          </h3>
        </div>
        <div className="md:text-lg xl:text-xl 3xl:text-2xl flex justify-center items-center mt-6 mb-6">
          <p className="p-2 text-center text-balance w-10/12">
            {homePageText.blog_section_text}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <MmmSiteButtonLogoFirst
            href="blog"
            label="Blog"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div className="w-full">
          <MMMLineLogoBlack />
        </div> */}
      </section>
    </main>
  );
}

{
  /* <Image
            priority
            src="/branding/mmm-line-logo-left-white.png"
            width={708}
            height={65}
            alt=""
            className="absolute bottom-[-15%]"
          /> */
}
