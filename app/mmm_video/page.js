"use client";
// import from next
import Image from "next/image";
import Head from "next/head";
// import from react
import { useState } from "react";
// import components
import VideoGallery from "../ui/videoGallery";
import VideoCategories from "../ui/videoCategories";
import TextSegment from "../ui/textSegment";
import OurWorkTiles from "../ui/ourWorkTiles";

// export const metadata = {
//   title: "Videos",
// };

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");
  return (
    <>
    <Head>
        <title>Videos</title>
        <meta name="description" content="We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process." />
        {/* Other meta tags */}
    </Head>
    <main>
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
        <h2 className=" text-center text-4xl font-bold mt-12 mb-6">Our Work</h2>
      {/* </div> */}
      <div className="mb-12 ">
      <TextSegment
      className=""
        text="We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, to Livestreaming, and Photography, we are your partner through every step of the process."
      />
      </div>
      <div>
        <OurWorkTiles />
      </div>
      {/* <section className="-mb-6">
      <VideoCategories onCategorySelected={setSelectedCategory}/>
      </section>
      <VideoGallery selectedCategory={selectedCategory} /> */}
    </main>
    </>
  );
}
