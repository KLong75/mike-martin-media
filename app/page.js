"use client";
// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import BannerVideo from "./ui/bannerVideo";
import MmmSiteButton from "./ui/mmmSiteButton";
import MmmSiteButtonTextOnly from "./ui/mmmSiteButtonTextOnly";
import MMMLineLogoBlack from "./ui/mmmLineLogoBlack";
import MmmSiteButtonLogoFirst from "./ui/mmmSiteButtonLogoFirst";
import BannerVideoWithFadeEffect from "./ui/bannerVideoWithFadeEffect";
import BannerImage from "./ui/bannerImage";
// import text
import { homePageText } from "./lib/siteText";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 ">
      <BannerVideoWithFadeEffect
        src="https://player.vimeo.com/video/938224346?h=85055436bd&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Home_Page_Banner_Video"
      />
      <section id="home-page-about-section">
        <div className="flex flex-col justify-center items-center w-full h-auto -mt-4">
          <div className="bg-black text-white w-full h-20 md:h-24 flex items-center justify-center">
            <div className="flex justify-center items-center p-1 ">
              <h3 className="text-4xl md:text-5xl font-bold mr-2">
                YOUR IDEAS,
              </h3>
              <div
                className="flex justify-center items-center w-10 md:w-14 h-auto mb-1 md:mb-2"
                style={{ marginRight: "-.1rem" }}>
                <Image
                  src="/branding/singleMWhiteResizeSmall.png"
                  width={349}
                  height={271}
                  alt="company logo"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold ml-1">ADE</h2>
            </div>
          </div>
          <div className="mt-6 md:text-lg flex justify-center items-center">
            <p className="p-2 text-center text-balance w-10/12">
              {homePageText.about_section_text_a}
            </p>
          </div>
          <div className="md:text-lg flex justify-center items-center mb-6">
            <p
              className="p-2 text-center text-balance w-10/12"
              id="team-paragraph">
              Our{" "}
              <Link href="/about_mmm#mmm-team" className="">
                <span className="font-bold hover:scale-105 transition-transform inline-block">
                  team
                </span>
              </Link>{" "}
              {homePageText.about_section_text_b}{" "}
              <Link href="/about_mmm">
                <span className="font-bold hover:scale-105 transition-transform inline-block">
                  About
                </span>
              </Link>{" "}
              page to get to know our dream team.
            </p>
          </div>
          <div className="flex justify-center items-center pb-6 ">
            <MmmSiteButton
              href="/about_mmm"
              label="About "
              backgroundColor="bg-black"
              textColor="text-white"
              imgSrc="/branding/mmm_logo_white.png"
            />
          </div>
          <div
            className="flex justify-center items-center max-w-4xl mx-auto p-4 md:mt-4"
            id="blog-section-image-container"
            style={{ maxWidth: "1800px" }} // Set the max-width to desired value
          >
            <BannerImage
              id="blog-section-image"
              src="/images/home_page/about_mmm_pic.jpg"
              alt="MMM at work"
              width={3242}
              height={2022}
              priority={true}
            />
          </div>

          <div className="text-xl md:text-2xl flex justify-center items-center md:mt-6">
            <p className="text-center text-balance p-2">
              <Link href="/contact">
                <span className="font-bold hover:scale-105 transition-transform inline-block">
                  Contact us
                </span>
              </Link>{" "}
              today to work on your project together tomorrow.
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 ">
            <MmmSiteButton
              href="/contact"
              label="Contact"
              backgroundColor="bg-black"
              textColor="text-white"
              imgSrc="/branding/mmm_logo_white.png"
            />
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <section className="mt-12" id="our-work-section">
        <BannerVideo
          src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Our_Work_Video"
        />
        <div className="-mt-1 bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-3xl md:text-4xl">
            OUR WORK
          </h3>
        </div>
        <div className="md:text-lg flex justify-center items-center mt-6">
          <p
            className="p-2 text-center text-balance w-10/12"
            id="work-paragraph">
            {homePageText.our_work_section_text}
            <Link href="/our_work">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Our Work{" "}
              </span>
            </Link>{" "}
            and contact us to get started on your project today.
          </p>
        </div>
        <div className="flex justify-center items-center mb-6 mt-6 w-full">
          <MmmSiteButtonTextOnly
            href="our_work"
            label="Our Work"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div
          className="flex justify-center items-center max-w-4xl mx-auto p-4 md:mt-4 md:mb-4"
          id="blog-section-image-container"
          style={{ maxWidth: "1800px" }} // Set the max-width to desired value
        >
          <BannerImage
            id="blog-section-image"
            src="/images/home_page/home-page-our-work-img.png"
            alt="MMM at work"
            width={2100}
            height={900}
            priority={true}
          />
        </div>
        <div className="md:text-lg flex justify-center items-center mt-2 md:mt-6">
          <p className="p-2 text-center text-balance w-10/12">
            {homePageText.our_work_section_contact_text}
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact us
              </span>
            </Link>{" "}
            now to get started on your next project.
          </p>
        </div>

        <div className="flex justify-center items-center mt-6 mb-6">
          <MmmSiteButton
            href="/contact"
            label="Contact"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div className="flex justify-center items-center mb-6 mt-6">
          <p className="text-xl md:text-2xl"></p>
        </div>
      </section>
      <section className="mb-4" id="blog-section">
        <BannerVideo
          src="https://player.vimeo.com/video/914955209?h=f60c29d735&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Travel Video"
        />
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-3xl md:text-4xl">
            BEYOND THE LENS
          </h3>
        </div>
        <div className="md:text-lg flex justify-center items-center mt-6 mb-6">
          <p className="p-2 text-center text-balance w-10/12">
            {homePageText.blog_section_text}
          </p>
        </div>
        <div className="flex justify-center items-center mb-12">
          <MmmSiteButtonLogoFirst
            href="blog"
            label="Blog"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div className="w-full mt-4">
          <MMMLineLogoBlack />
        </div>
      </section>
    </main>
  );
}
