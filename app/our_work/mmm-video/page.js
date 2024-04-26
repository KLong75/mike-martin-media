"use client";
// import from react
import { useState } from "react";
// import from next
import Link from "next/link";
// import components
import BannerVideo from "../../ui/bannerVideo";
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import TextSegment from "@/app/ui/textSegment";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";
import MmmSiteButton from "@/app/ui/mmmSiteButton";
import ContactUsButton from "@/app/ui/contactUsButton";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  return (
    <main className="grid grid-cols-1">
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="Video_Page_Banner_Video"
      />
      <div className="mt-4 mb-4 flex md:hidden">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h2 className="text-center font-bold text-4xl md:text-6xl">
          VIDEO
        </h2>
      </div>
      <div className="mt-4 hidden md:flex">
        <BackToOurWorkLink />
      </div>
      <section className="md:mt-6">
        <div className="md:text-lg flex justify-center items-center mb-6 md:mb-8">
          <p className="mt-2 text-center text-balance md:w-10/12 p-8">
          Award winning, professional video production. Content creation, live recording, post-production editing, color grading, audio engineering, on screen graphics, green screen, visual effects, commercials, promotions, and so much more.{" "}
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            today to get started on your project.
          </p>
        </div>
      </section>
      <section className="-mt-4">
        <VideoCategories onCategorySelected={setSelectedCategory} />
      </section>
      <VideoGallery selectedCategory={selectedCategory} excludedCategory={['Drone', 'Livestream']}/>
      <div className="md:text-lg flex justify-center items-center mt-6 mb-6">
        <p className="text-center text-balance w-10/12 p-2">
          <Link href="/contact">
            {" "}
            <span className="font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today to get started on your Video project.
        </p>
      </div>
      <div className="mt-2 mb-12 flex justify-center">
        <ContactUsButton />
      </div>
      <div className="mb-3 mt-12">
        <BackToOurWorkLink />
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
