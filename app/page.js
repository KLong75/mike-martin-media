// "use client";
// import from next
import Link from "next/link";
// import components
import BannerVideoWithFadeEffect from "./ui/bannerVideoWithFadeEffect";
import BannerVideoWithFadeNoLogo from "./ui/bannerVideoWithFadeNoLogo";
import MMMLineLogoHeading from "./ui/mmmLineLogoHeading";
import TestimonialDisplay from "./ui/testimonialDisplay";
import MMMTeamPhotoWithLogo from "./ui/mmmTeamPhotoWithLogo";
import CapabilityBlockContainer from "./ui/capabilityBlockContainer";
import FourPicGrid from "./ui/fourPicGrid";
import BlogPostGallery from "./ui/blogPostGallery";

export default function Home() {
  return (
    <main className="grid grid-cols-1 ">
      <BannerVideoWithFadeEffect
        src="https://player.vimeo.com/video/1090631184?h=7363ce54f9&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Mike Martin Media - Ideas in Motion"
        containerClassName="banner-vid-with-fade-container-no-logo"
      />
      <section className="flex justify-center items-center p-6 md:p-12 lg:p-28 xl:p-42">
        <div
          id="home-page-about-section"
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-12 xl:gap-16 max-w-800 flex justify-center items-center">
          <div className="order-2 xl:order-1 relative flex justify-center items-center">
            <MMMTeamPhotoWithLogo />
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
            src="https://player.vimeo.com/video/938224537?h=7b77483940&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
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
      </section>
    </main>
  );
}