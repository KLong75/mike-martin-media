// "use client";
// import from next
import Image from "next/image";
import Head from "next/head";
// import from react
// import { useState } from "react";
// import components
// import VideoGallery from "../ui/videoGallery";
// import VideoCategories from "../ui/videoCategories";
import TextSegment from "../ui/textSegment";
import OurWorkTiles from "../ui/ourWorkTiles";
import BackToHomeLink from "../ui/backToHome";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import MmmSiteButton from "../ui/mmmSiteButton";
import BannerVideo from "../ui/bannerVideo";


export const metadata = {
  title: "Our Work",
  description:
    "We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process.",
};

export default function Page() {
  // const [selectedCategory, setSelectedCategory] = useState("All Videos");
  return (
    <>
      {/* <Head>
        <title>Videos</title>
        <meta name="description" content="We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process." />
    </Head> */}
      <main>
      <div className="-mt-1">
      <BannerVideo
        src="https://player.vimeo.com/video/911636273?h=f61fbbc179&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Our_Work_Video"
      />
      </div>
        {/* <div className="flex justify-center items-center mt-12 mb-6"> */}
        {/* <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
            priority
            as="image"
          />
        </div> */}
        {/* <h2 className=" text-center text-4xl font-bold mt-12 ">Our Work</h2> */}
        {/* </div> */}
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-3xl md:text-4xl mt-2">
            OUR WORK
          </h3>
        </div>
        <div className="mt-2 mb-2">
          <BackToHomeLink />
      </div>
        <div className="md:-mt-4 mb-6 font-bold">
          <TextSegment text="From Corporate, Education, Medical and Nonprofit videos, to Livestreaming, and Photography, we are your partner through every step of the process. Check out our work below and contact us today to get started on your project." />
        </div>
        <div>
          <OurWorkTiles />
        </div>
        <div className="-mt-6 md:mt-6">
          <TextSegment text="From Corporate, Education, Medical and Nonprofit videos, to Livestreaming, and Photography, we are your partner through every step of the process. Contact us today to get started on your project. This text can change. What we need here is an invitation for visitors to contact MMM." />
        </div>
        <div className="flex justify-center items-center p-2 mb-6 md:mb-12">
         
        <div className="flex justify-center mb-2">
          <MmmSiteButton
            href="/contact"
            label="Contact "
            backgroundColor="bg-black"
            textColor="text-white"
            imgSrc="/branding/mmm_logo_white.png"
          />
        </div>
        </div>
        <div className="mb-4">
          <BackToHomeLink />
        </div>
        <div className="w-full">
        <MMMLineLogoBlack />
      </div>
      </main>
    </>
  );
}
