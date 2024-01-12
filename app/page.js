'use client';
// import from next
import Image from "next/image";
// import from react
import { useState, useEffect } from "react";
// import components
import VideoFrame from "./ui/videoFrame";
import ContactUsButton from "./ui/contactUsButton";
import TeamGallery from "./ui/teamGallery";

export default function Home() {
  const [hideLogo, setHideLogo] = useState(false); 
  const [showVideo, setShowVideo] = useState(false);
  
  useEffect(() => {
    const hideLogoTimer = setTimeout(() => {
      setHideLogo(true);
    }
    , 4000);
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 500);
    return () => {
      clearTimeout(hideLogoTimer);
      clearTimeout(videoFadeTimer);
    };
  }, []);


  return (
    <main className="grid grid-cols-1 gap-4 ">
      {/* <h1 className="text-center w-full mt-6 text-2xl font-bold">Mike Martin Media</h1> */}
      
      {/* <div className={`flex justify-center overflow-hidden transition-all duration-3000 ease-in-out ${hideLogo ? 'opacity-0 max-h-0' : 'opacity-100 max-h-[720px]'}`}>
        <Image
          src="/branding/mmm_logo_with_text.png"
          width={960}
          height={720}
          alt="Mike Martin Media logo"
        />
      </div>
      <div className={`flex justify-center mt-6 overflow-hidden transition-all duration-6000 ease-in-out ${showVideo ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0'}`}>
        <VideoFrame
          src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Homepage Vid 2024 Version 2 010524"
        />
      </div> */}

      {/* Container for Video and Logo */}
      <div className="relative flex justify-center mt-6">
      <div className={`w-full max-w-4xl transition-all duration-6000 ease-in-out ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
        {/* Video Frame */}
        
        <VideoFrame
          src="https://player.vimeo.com/video/900179937?h=3c366b24ba&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Homepage Vid 2024 Version 2 010524"
        />
        </div>
        {/* Logo */}
        <div className={`absolute -mt-14 p-6 transition-opacity duration-8000 ease-in-out ${hideLogo ? 'opacity-0' : 'opacity-100'}`}>
        {/* <div className="absolute -mt-12 p-4"> */}
          <Image
            src="/branding/mmm_logo_with_text_resize.png"
            width={816}
            height={612}
            alt="Mike Martin Media logo"
          />
        </div>
      </div>





      <div className="flex justify-center items-center ">
        <Image
          src="/branding/mmm_line_logo.png"
          height={75}
          width={1425}
          alt="MMM logo"
        />
      </div>
      <div className="flex justify-center items-center mt-12">
        <h2 className="text-4xl font-bold mr-4">About</h2>
        <div className="flex justify-center items-center w-24 h-8">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <p className=" w-3/4">
          Mike Martin Media specializes in video production and creative
          services for corporations, nonprofits, education and medical
          institutions. Our mission is to help our clients promote their causes,
          inform their clients and staff, and inspire with their stories. We
          deliver dynamic multi-media solutions.
        </p>
      </div>
      <div className="flex justify-center mt-12">
        <TeamGallery />
      </div>
      <div className="flex justify-center mb-4">
        <ContactUsButton />
      </div>
    </main>
  );
}
