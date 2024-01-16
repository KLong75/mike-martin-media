"use client";
// import from next
import Image from "next/image";
// import from react
import { useState, useEffect } from "react";
// import components
import VideoFrame from "./ui/videoFrame";
import ContactUsButton from "./ui/contactUsButton";
import TeamGallery from "./ui/teamGallery";
import TextSegment from "./ui/textSegment";
import PromoVideo from "./ui/promoVideo";
import MmmGood from "./ui/mmmMmmMmmGood";

export default function Home() {
  const [hideLogo, setHideLogo] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }, 4000);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 1000);
    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
    };
  }, []);

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

      <PromoVideo src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0" />

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
      <div className="mt-6 mb-6">
        <MmmGood />
      </div>
      {/* <div className="flex justify-center">
        <p className="text-center w-3/4">
          Mike Martin Media specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions.
        </p>
      </div> */}
      <TextSegment
        text="Mike Martin Media specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-6 mt-12 gap-0">
        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE PROMOTE.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left  rounded-2xl w-full p-4">
            Whether you are romoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE INFORM.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left  rounded-2xl w-full p-4">
            Whether you are romoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center p-6">
          <h4 className="font-bold">WE INSPIRE.</h4>
          <p className=" shadow-xl p-2 font-semibold text-left border border-2 rounded-2xl w-full p-4">
            Whether you are romoting an event, initiative, product, or
            organization, MMM has you covered. From last minute promos to
            promotional campaigns, we have the experience and team to get you
            results.
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-2 ">
        <ContactUsButton />
      </div>
      <div className="flex justify-center mt-4 ">
        <TeamGallery />
      </div>
      <div className="flex justify-center -mt-8 mb-8">
        <ContactUsButton />
      </div>
    </main>
  );
}
