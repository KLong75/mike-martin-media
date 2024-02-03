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
import MeetTheTeamButton from "./ui/meetTheTeamButton";
import WorkCategorySection from "./ui/workCategorySection";
import MMMLineLogoBlack from "./ui/mmmLineLogoBlack";
import TeamGallery from "./ui/teamGallery";
import MmmSiteButtonLogoFirst from "./ui/mmmSiteButtonLogoFirst";
// import Icons
import { FaVideo, FaCameraRetro } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import MmmSiteButton from "./ui/mmmSiteButton";
import OurWorkTiles from "./ui/ourWorkTiles";
import MmmSiteButtonTextOnly from "./ui/mmmSiteButtonTextOnly";

export default function Home() {
  return (
    <main className="grid grid-cols-1 gap-4 ">
      <BannerVideo
        src="https://player.vimeo.com/video/906520722?h=fe8eda318f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM Promotional Video"
      />
      {/* About Section */}
      <section id="home-page-about-section">
        <div className="flex flex-col justify-center items-center w-full h-auto -mt-4">
          <div className="bg-black text-white w-full h-36 mb-6">
            <div className="flex justify-center items-center mt-2 -mb-6 p-2">
              {/* <h3 className="text-4xl font-bold mr-2">About</h3> */}
              <div className="flex justify-center items-center w-36 h-auto mb-1 mt-2">
                <Image
                  src="/branding/mmm_logo_white.png"
                  width={294}
                  height={95}
                  alt="company logo"
                />
              </div>
            </div>
            <div className="flex justify-center items-center p-1 mt-6">
              <h3 className="text-2xl md:text-4xl font-bold mr-2">
                YOUR IDEAS,
              </h3>
              <div
                className="flex justify-center items-center w-7 md:w-10 h-auto mb-1 "
                style={{ marginRight: "-.2rem" }}>
                <Image
                  src="/branding/singleMWhite.png"
                  width={3492}
                  height={2716}
                  alt="company logo"
                />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold ml-1">ADE</h2>
            </div>
          </div>
          <div className="flex justify-center items-center p-2 mb-6 -mt-4 text-red-500">
            <TextSegment
              text="Mike Martin Media specializes in video production and creative
              services for corporations, nonprofits, education and medical
              institutions. Our mission is to help our clients promote their causes,
              inform their clients and staff, and inspire with their stories. We
              deliver dynamic multi-media solutions. Visit our about page to learn more about our team and our mission."
            />
          </div>
          <div className="flex justify-center items-center pb-6 -mt-6">
            <MmmSiteButton
              href="about_mmm"
              label="About "
              backgroundColor="bg-black"
              textColor="text-white"
              imgSrc="/branding/mmm_logo_white.png"
            />
          </div>
          <div className="flex justify-center items-center w-128 h-auto p-20 -mt-20 -mb-8 lg:mb-8">
            <Image
              src="/images/workSectionImages/work_section_img.jpg"
              width={960}
              height={840}
              alt="MMM at work"
            />
          </div>

          <div className="flex justify-center items-center p-2 mb-6 -mt-12 text-red-500">
            <TextSegment
              text="Contact us today to see what we can do for you."
            />
          </div>
          <div className="flex justify-center -mt-6 mb-2 ">
            <MmmSiteButton
              href="contact"
              label="Contact "
              backgroundColor="bg-black"
              textColor="text-white"
              imgSrc="/branding/mmm_logo_white.png"
            />
          </div>
        </div>
        <div className="w-full mb-6">
          <MMMLineLogoBlack />
        </div>
      </section>

      <section>
        <BannerVideo
          src="https://player.vimeo.com/video/719179719?h=8b8c5ebc86&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Travel Video"
        />
      </section>
      <section>
        <div>
          <h3 className="text-center font-bold text-2xl mb-2 italic">
            Our work is
          </h3>
          <MmmGood />
        </div>
        <div className="flex justify-center items-center p-2 -mt-2 md:mt-0 mb-6">
          <TextSegment text="We take pride in every project.  We partner with clients of all sizes to bring their ideas to life.  From concept to conclusion, we write, shoot, edit, direct, produce, animate, hire talent, find locations, and everything else needed for your production. From videos to livestreams, to animations, to photography we have you covered. Check out our work and then contact us to see what we can do for you!" />
        </div>
        <div className="flex justify-center items-center pb-6 -mt-6 mb-2">
          <MmmSiteButtonTextOnly
            href="our_work"
            label="Our Work"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        <div className="grid grid cols-1 md:grid-cols-3 mb-2 ">
          <div className="flex justify-center items-center -mt-6 md:order-2  ">
            <WorkCategorySection
              categoryName="Video"
              categoryIcon={<FaVideo />}
              categoryImage="/images/workSectionImages/work_section_img.jpg"
              categoryText="Videos and stuff lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
          </div>
          <div className="flex justify-center items-center -mt-6  md:order-1">
            <WorkCategorySection
              categoryName="Livestream"
              categoryIcon={<BsBroadcast />}
              // categoryImage="/images/workSectionImages/work_section_img.jpg"
              categoryText="Livestream lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
          </div>
          <div className="flex justify-center items-center -mt-6 md:order-3">
            <WorkCategorySection
              categoryName="Photography"
              categoryIcon={<FaCameraRetro />}
              categoryImage="/images/workSectionImages/work_section_img.jpg"
              categoryText="Photography lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
            />
          </div>
        </div>

        <div className="flex justify-center items-center p-1 -mt-2 md:mt-4 -mb-1">
          <h3 className="text-2xl md:text-4xl font-bold mr-2">And</h3>
          <div
            className="flex justify-center items-center w-7 md:w-10 h-auto "
            style={{ marginRight: "-.1rem", marginBottom: ".25rem" }}>
            <Image
              src="/branding/singleMBlack.png"
              width={3492}
              height={2716}
              alt="company logo"
            />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">ore!</h2>
        </div>
        <div>
          <TextSegment text="Whatever your needs, we've got you covered. Reach out today to see how we can help you with your next project. lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore." />
        </div>
        <div className="flex justify-center mb-8 mt-2 ">
          <ContactUsButton />
        </div>
        <div className="w-full">
          <MMMLineLogoBlack />
        </div>
      </section>
      <section className="mb-12">
        <div className="flex justify-center items-center mt-10">
          <div className="w-24 h-8 mx-2 mb-1">
            <Image
              src="/branding/mmm_black.png"
              width={294}
              height={95}
              alt="company logo"
            />
          </div>
          <h2 className="text-4xl font-bold -ml-2">Blog</h2>
        </div>
        <TextSegment text=" Check out some of our latest adventures as we film and travel across town and around the country. Try to keep up, we move fast!" />
        <div className="flex justify-center items-center p-2 ">
          <MmmSiteButtonLogoFirst
            href="blog"
            label="BLOG"
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
      </section>

      {/*  
      <div className="mb-2 p-2">
        <div className="flex justify-center items-center mb-1">
          <h2 className="text-4xl font-bold mr-2">The</h2>
          <div className="flex justify-center items-center w-24 h-8 mb-1">
            <Image
              src="/branding/mmm_black.png"
              width={294}
              height={95}
              alt="company logo"
            />
          </div>
          <h2 className="text-4xl font-bold mr-2">Team</h2>
        </div>
        <div className="flex justify-center -mb-4">
          <RiTeamFill size={36} />
        </div>
      </div>
      <TextSegment
        text="For more than a decade, MMM has completed projects for hundreds of local and national clients.  Our team has produced thousands of videos from last-minute projects on tight deadlines, to long-range planning and execution.

        We listen.  No two projects are exactly the same.  We collaborate with your team, bringing decades of experience and expertise to the table.  We understand the importance of branding and messaging, and finding effective and budget-conscious ways to bring your message to life.

        We are easy to communicate with, responsive, and proactive throughout the entire production process.  Our team is both personable and professional, and make sure that our clients enjoy the process. We offer the best value in professional video production."
      />
    */}
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}

{
  /* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-6 mt-12 gap-0">
        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE PROMOTE.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left  rounded-2xl w-full p-4">
            Whether you are promoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE INFORM.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left  rounded-2xl w-full p-4">
            Whether you are promoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE INSPIRE.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left rounded-2xl w-full p-4">
            Whether you are promoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>
      </div> */
}
