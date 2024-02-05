"use client";
// import from react
import { useState } from "react";
// import from next
import Head from "next/head";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideo from "../../ui/bannerVideo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import TextSegment from "@/app/ui/textSegment";
import MmmSiteButtonTextOnly from "@/app/ui/mmmSiteButtonTextOnly";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoCategories from "@/app/ui/videoCategories";
import VideoGallery from "@/app/ui/videoGallery";
import MmmSiteButton from "@/app/ui/mmmSiteButton";

export default function Page() {
  <Head>
    <title>Videos</title>
    <meta
      name="description"
      content="We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process."
    />
  </Head>;
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  return (
    <main className="grid grid-cols-1 ">
      <section>
        <BannerVideo
          src="https://player.vimeo.com/video/906520722?h=fe8eda318f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Promotional Video"
        />
      </section>
      <div className="mt-4 mb-4">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h2 className="text-center font-bold text-2xl md:text-4xl mt-2">
          VIDEO
        </h2>
      </div>
      <section className="-mt-4">
        <div className="flex justify-center items-center -mb-2">
          <p className="text-left p-8 ">
            Video lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            keywords about video production. Lorem ipsum dolor sit amet,
          </p>
        </div>
      </section>
      <section className="mb-0">
        <VideoCategories onCategorySelected={setSelectedCategory} />
      </section>
      <VideoGallery selectedCategory={selectedCategory} />

      <div>
        <TextSegment text="Contact us today to get started on your Video project. This text can change. Here we need to invite visitors to contact MMM." />
      </div>
      <div className="flex justify-center items-center mb-12 mt-2">
        <MmmSiteButton
          href="/contact"
          label="Contact "
          backgroundColor="bg-black"
          textColor="text-white"
          imgSrc="/branding/mmm_logo_white.png"
        />
      </div>
      <div className="mb-3 ">
        <BackToOurWorkLink />
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}
