"use client";
// import from next
import Image from "next/image";
import Link from "next/link";
// import from react
// import { useState, useEffect } from "react";
// import components
import ContactUsButton from "./ui/contactUsButton";
import TextSegment from "./ui/textSegment";
import BannerVideo from "./ui/bannerVideo";
import MmmGood from "./ui/mmmGood";
import MmmSiteButton from "./ui/mmmSiteButton";
import MmmSiteButtonTextOnly from "./ui/mmmSiteButtonTextOnly";
import WorkCategorySection from "./ui/workCategorySection";
import MMMLineLogoBlack from "./ui/mmmLineLogoBlack";
import MmmSiteButtonLogoFirst from "./ui/mmmSiteButtonLogoFirst";
// import Icons
import { FaVideo, FaCameraRetro } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";
// import { RiTeamFill } from "react-icons/ri";
import { FaClapperboard } from "react-icons/fa6";
import BannerImage from "./ui/bannerImg";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 ">
      <BannerVideo
        src="https://player.vimeo.com/video/911653748?h=25830c4348&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Home_Page_Banner_Video"
      />
      {/* About Section */}
      <section id="home-page-about-section">
        <div className="flex flex-col justify-center items-center w-full h-auto -mt-4">
          <div className="bg-black text-white w-full h-20 md:h-24 flex items-center justify-center">
            <div className="flex justify-center items-center p-1 ">
              <h3 className="text-3xl md:text-4xl font-bold mr-2">
                YOUR IDEAS,
              </h3>
              <div
                className="flex justify-center items-center w-8 md:w-10 h-auto md:mb-0"
                style={{ marginRight: "-.1rem", marginBottom: ".13rem" }}>
                <Image
                  src="/branding/singleMWhiteResizeSmall.png"
                  width={349}
                  height={271}
                  alt="company logo"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold ml-1">ADE</h2>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 mb-6">
            <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
              MMM specializes in video production and creative services for
              corporations, nonprofits, education, medical institutions. Our
              mission is to help our clients promote their causes, inform their
              clients, and inspire with their stories. We deliver dynamic
              multi-media solutions.
            </p>
          </div>
          <div className="flex justify-center items-center p-2 mb-6 -mt-8 ">
            <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
              Our{" "}
              <Link href="/about_mmm#mmm-team" className="">
                <span className="font-bold hover:scale-110 transition-transform inline-block">
                  team
                </span>
              </Link>{" "}
              brings decades of combined experience from the broadcast and
              production industries. together to create the content that you’re
              looking for. Get to know the team that you’ll be working with at{" "}
              <Link href="/contact">
                <span className="font-bold hover:scale-105 transition-transform inline-block">
                  About MMM.
                </span>
              </Link>{" "}
            </p>
          </div>
          <div className="flex justify-center items-center pb-6 -mt-6 -mb-5">
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
            style={{ maxWidth: "1024px" }} // Set the max-width to desired value
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
          {/* <div className="flex justify-center items-center p-2 mb-6 -mt-4 md:mt-0">
          <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
              Like what you see?{" "}
              <Link href="/contact">
                <span className="font-bold hover:scale-105 transition-transform inline-block">
                  Contact us
                </span>
              </Link>{" "}
              to get started on your next project today.
            </p>
          </div> */}
          <div className="flex justify-center items-center pb-6 -mb-5">
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
      <section className="mt-12" id="our-work-section">
        <BannerVideo
          src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Our_Work_Video"
        />
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 -mt-1">
          <h3 className="text-center font-bold text-3xl md:text-4xl">
            OUR WORK
          </h3>
        </div>
        {/* <BannerVideo
          src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Our_Work_Video"
        /> */}
        <div className="flex justify-center items-center p-2 mb-6">
          <p className="p-2 md:p-6 text-center text-balance w-10/12 md:w-1/2 ">
            We take pride in every project. We partner with clients of all sizes
            to bring their ideas to life. From concept to conclusion, we write,
            shoot, edit, direct, produce, animate, hire talent, find locations,
            and everything else needed for your production. From videos to
            livestreams, to animations, to photography we have you covered.
            Check out
            <Link href="/our_work">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Our Work{" "}
              </span>
            </Link>{" "}
            to view recent projects and contact us to get started on your next
            project today.
          </p>
        </div>
        <div className="flex justify-center items-center pb-6 -mt-6 md:-mt-4 w-full">
          <MmmSiteButtonTextOnly
            href="our_work"
            label="Our Work"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div className="flex justify-center items-center p-2 mb-6">
          <p>WE NEED AN IMAGE HERE</p>
        </div>
        <div className="flex justify-center items-center p-2 mb-6 -mt-4 md:mt-0">
          <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
            Whatever you need, we’ve got you covered.{" "}
            <Link href="/contact">
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact us
              </span>
            </Link>{" "}
            now to get started on your next project.
          </p>
        </div>
        <div className="flex justify-center items-center pb-6 -mt-6 mb-8">
          <MmmSiteButton
            href="/contact"
            label="Contact"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        {/* <div className="w-full mt-4">
          <MMMLineLogoBlack />
        </div> */}
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
        {/* <BannerVideo
          src="https://player.vimeo.com/video/719179719?h=8b8c5ebc86&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Travel Video"
        /> */}
        {/* <div
          className="flex justify-center items-center max-w-4xl mx-auto"
          id="blog-section-image-container"
          style={{ maxWidth: '1024px' }} // Set the max-width to match the image's intrinsic width or any other desired value
        >
          <BannerImage
            id="blog-section-image"
            src="/images/aboutPage/mike-van.jpg"
            alt="Mike in van with camera"
            width={2048}
            height={1363}
          />
        </div> */}
        <div className="flex justify-center items-center p-2 mb-6">
          <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
            Go Beyond the lens and check out our latest adventures in the MMM
            Blog as we film and travel across town across the country, and
            around the world. Try to keep up, we move fast!
          </p>
        </div>
        <div className="flex justify-center items-center mb-2 -mt-6">
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
