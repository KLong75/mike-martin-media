"use client";
// import from next
import Image from "next/image";
// import from react
// import { useState, useEffect } from "react";
// import components
import ContactUsButton from "./ui/contactUsButton";
import TextSegment from "./ui/textSegment";
import PromoVideo from "./ui/promoVideo";
import MmmGood from "./ui/mmmMmmMmmGood";
import MmmVideoButton from "./ui/mmmVideoButton";
import MmmLivestreamButton from "./ui/mmmLivestreamButton";
import MmmPhotographyButton from "./ui/mmmPhotographyButton";
import MeetTheTeamButton from "./ui/meetTheTeamButton";

export default function Home() {
  // const [hideLogo, setHideLogo] = useState(false);
  // const [showVideo, setShowVideo] = useState(false);

  // useEffect(() => {
  //   const hideLogoTimer = setTimeout(() => {
  //     setHideLogo(true);
  //   }, 4000);
  //   const videoFadeTimer = setTimeout(() => {
  //     setShowVideo(true);
  //   }, 0);
  //   return () => {
  //     clearTimeout(hideLogoTimer);
  //     clearTimeout(videoFadeTimer);
  //   };
  // }, []);

  return (
    <main className="grid grid-cols-1 gap-4 ">
      {/* Container for Video and Logo */}
      {/* <div className="relative flex justify-center mt-3">
        <div
          className={`w-full max-w-4xl  transition-all duration-8000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}>
          <VideoFrame
            src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
            title="MMM Homepage Vid 2024 Version 2 010524"
          />
        </div>
       
        <div
          className={`absolute -mt-14 p-6 transition-opacity duration-8000 ease-in-out ${
            hideLogo ? "opacity-0" : "opacity-100"
          }`}>
          <Image
            priority
            src="/branding/mmm_logo_with_text_resize.png"
            width={816}
            height={612}
            alt="Mike Martin Media logo"
          />
        </div>
      </div> */}

      <PromoVideo src="https://player.vimeo.com/video/903012192?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0" />

      {/* <div className="flex justify-center items-center -mt-3">
        <Image
          src="/branding/mmm_line_logo.png"
          height={60}
          width={1140}
          alt="MMM logo"
        />
      </div> */}

      {/* <div className="flex justify-center items-center mt-12">
      
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <div className="flex justify-center items-center w-24 h-8 ml-2 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold ml-1">Good...</h2>
      </div> */}

      {/* <div className="flex justify-center">
        <p className="text-center w-3/4">
          Mike Martin Media specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions.
        </p>
      </div> */}
      <div className="flex justify-center items-center mt-6 mb-2">
        <div className="bg-black h-1"></div>
        <h2 className="text-4xl font-bold mr-2">About </h2>
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>
      <TextSegment
        text="Mike Martin Media (MMM) specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions. Get in touch to see how we can bring your project to life"
      />
      <div className="flex justify-center mt-8 mb-8 ">
        <ContactUsButton />
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-6 mt-12 gap-0">
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
      </div> */}
      <div className="">
        <MmmGood />
      </div>
      <TextSegment text="We take pride in every video that we produce.  We partner with clients of all sizes to bring visions to video.  From concept to conclusion, we can write, shoot, edit, produce, animate, hire talent, find locations, and everything else needed for your production.  Take a minute and check out our work! From videos to livestreams, to still photography, we have you covered." />
      <div className="grid grid cols-1 md:grid-cols-3 mb-4">
        <div className="flex justify-center items-center mt-4 mb-4">
          <MmmVideoButton />
        </div>
        <div className="flex justify-center items-center mt-4 mb-4">
          <MmmLivestreamButton />
        </div>
        <div className="flex justify-center items-center mt-4 mb-4">
          <MmmPhotographyButton />
        </div>
      </div>

      <div className="flex justify-center items-center  mb-2 p-2">
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

      <TextSegment
        text="For more than a decade, MMM has completed projects for hundreds of local and national clients.  Our team has produced thousands of videos from last-minute projects on tight deadlines, to long-range planning and execution.

        We listen.  No two projects are exactly the same.  We collaborate with your team, bringing decades of experience and expertise to the table.  We understand the importance of branding and messaging, and finding effective and budget-conscious ways to bring your message to life.

        We are easy to communicate with, responsive, and proactive throughout the entire production process.  Our team is both personable and professional, and make sure that our clients enjoy the process. We offer the best value in professional video production."
      />

      <div className="flex justify-center mt-2 mb-8 ">
        <MeetTheTeamButton />
      </div>
    </main>
  );
}
