export const dynamic = "force-static";
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
    <main>
      <BannerVideoWithFadeEffect
        src="L5JuSo02xaPTfj00YJr5W6ugZd6CDeuVa42DkDM6XjU9I"
        title="Mike Martin Media - Ideas in Motion"
        containerClassName="padding-top-42-19"
        autoPlay={true}
        loop={true}
        muted={true}
        // poster="https://image.mux.com/L5JuSo02xaPTfj00YJr5W6ugZd6CDeuVa42DkDM6XjU9I/thumbnail.png?width=1920&height=1080&time=0"
        // poster="/banner-vid-thumbs/ideas-in-motion-thumbnail-444x187.webp"
        // poster="https://image.mux.com/L5JuSo02xaPTfj00YJr5W6ugZd6CDeuVa42DkDM6XjU9I/thumbnail.webp?width=214&height=121&time=0"
        // poster="https://image.mux.com/L5JuSo02xaPTfj00YJr5W6ugZd6CDeuVa42DkDM6XjU9I/thumbnail.webp?fit_mode=smartcrop&time=0"
        poster=""
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
              Our{" "}
              <Link
                href="/about#team-gallery"
                className="underline font-semibold">
                team
              </Link>{" "}
              brings decades of combined experience from the broadcast and
              production industries to produce your ideal content. We are a
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
          src="PtWJLW7g8zmVIlrDUQrHas45MGty0102w4tH9tiGwZIyQ"
          title="Mike Martin Media | Our Work"
          containerClassName="padding-top-42-19"
          autoPlay={false}
          loop={true}
          muted={true}
          poster=""
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
                      <span className="lg:text-lg font-bold">
                        Check Out Our Work
                      </span>
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
      <section>
        <FourPicGrid />
      </section>
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
          <BlogPostGallery number_of_posts={3} priorityFirstImage={false} />
        </div>
      </section>
    </main>
  );
}
