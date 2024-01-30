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
import MmmGood from "./ui/mmmMmmMmmGood";
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
      <div className="bg-black text-white flex flex-col justify-center items-center w-full h-36 -mt-4">
        <div className="flex justify-center items-center p-1">
          <h2 className="text-4xl font-bold mr-2">YOUR IDEAS,</h2>
          <div className="flex justify-center items-center w-9 h-8 mb-1">
            <Image
              src="/branding/whiteM.png"
              width={101}
              height={95}
              alt="company logo"
            />
          </div>
          <h2 className="text-4xl font-bold ml-1">ADE</h2>
        </div>
        <div className="flex justify-center items-center p-2">
          <MmmSiteButton
            href="about_mmm"
            label="ABOUT "
            backgroundColor="bg-white"
            textColor="text-black"
            imgSrc="/branding/mmm_black.png"
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-10">
        <h3 className="text-center font-bold text-2xl ">OUR WORK</h3>
      </div>
      <OurWorkTiles />
      <div className="flex justify-center items-center p-2 ">
        <MmmSiteButtonTextOnly
          href="mmm_video"
          label="LEARN MORE"
          backgroundColor="bg-black"
          textColor="text-white"
        />
      </div>
      <section>
        <div className="flex justify-center items-center mt-10">
          <div className="w-24 h-8 mx-2 mb-1">
            <Image
              src="/branding/mmm_black.png"
              width={294}
              height={95}
              alt="company logo"
            />
          </div>
          <h2 className="text-4xl font-bold -ml-2">eet the Team</h2>
        </div>
        <div>
          <TeamGallery />
        </div>
      </section>
      <section>
        <BannerVideo 
          src="https://player.vimeo.com/video/719179719?h=8b8c5ebc86&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0" 
          title="MMM Travel Video"
        />
      </section>
      <section>
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
      {/* <TextSegment
        text="Mike Martin Media (MMM) specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions. Get in touch to see how we can bring your project to life"
      />
      <div className="flex justify-center mt-8 mb-8 ">
        <ContactUsButton />
      </div>
      <div>
        <h3 className="text-center font-bold text-xl mb-2 italic">
          Our work is
        </h3>
        <MmmGood />
      </div>
      <TextSegment text="We take pride in every project that we produce.  We partner with clients of all sizes to bring visions to video.  From concept to conclusion, we can write, shoot, edit, produce, animate, hire talent, find locations, and everything else needed for your production. From videos to livestreams, to still photography, we have you covered. Take a minute and check out our work!" />
      <div className="grid grid cols-1 md:grid-cols-3 mb-4">
        <div className="flex justify-center items-center  md:order-2">
          <WorkCategorySection
            categoryName="Video"
            categoryIcon={<FaVideo />}
            categoryImage="/images/workSectionImages/work_section_img.jpg"
            categoryText="Whether you are promoting an event, initiative, product, or organization, MMM has you covered. From last minute promos to promotional campaigns, we have the experience and the team to get you the results you need."
          />
        </div>
        <div className="flex justify-center items-center  md:order-1">
          <WorkCategorySection
            categoryName="Livestream"
            categoryIcon={<BsBroadcast />}
            categoryImage="/images/workSectionImages/work_section_img.jpg"
            categoryText="Whether you are promoting an event, initiative, product, or organization, MMM has you covered. From last minute promos to promotional campaigns, we have the experience and the team to get you the results you need."
          />
        </div>
        <div className="flex justify-center items-center  md:order-3">
          <WorkCategorySection
            categoryName="Photography"
            categoryIcon={<FaCameraRetro />}
            categoryImage="/images/workSectionImages/work_section_img.jpg"
            categoryText="Whether you are promoting an event, initiative, product, or organization, MMM has you covered. From last minute promos to promotional campaigns, we have the experience and the team to get you the results you need."
          />
        </div>
      </div>
      <TextSegment text="Whatever your needs, we've got you covered. Reach out today to see how we can help you with your next project. lorem impsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" />
      <div className="flex justify-center mb-8 ">
        <ContactUsButton />
      </div>
      <MMMLineLogoBlack />
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

      <div className="flex justify-center mt-2 mb-8 ">
        <MeetTheTeamButton />
      </div> */}
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
