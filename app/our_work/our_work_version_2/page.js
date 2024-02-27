// "use client";
// import from next
import Link from "next/link";
import Image from "next/image";
// import from react
// import { useState } from "react";
// import components
// import VideoGallery from "../ui/videoGallery";
// import VideoCategories from "../ui/videoCategories";

import MMMLineLogoBlack from "../../ui/mmmLineLogoBlack";
import BannerVideo from "../../ui/bannerVideo";
import BannerImage from "../../ui/bannerImage";
import ContactUsButton from "../../ui/contactUsButton";
import WorkCategorySection from "../../ui/workCategorySection";
// import icons
import { TbDrone } from "react-icons/tb";
import { FaVideo, FaCameraRetro } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";

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
          <BannerImage
            src="/images/ourWorkPage/our_work_video_banner_image.png"
            alt="MMM Video Production at work"
            width={4320}
            height={1584}
            priority
          />
        </div>
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-4xl md:text-6xl mt-2">
            OUR WORK
          </h3>
        </div>
        <div className="md:text-lg flex justify-center items-center mt-6 mb-6">
          <p className="md:text-xl text-center text-balance w-10/12 p-2">
            From corporate, education, medical, or nonprofit videos, to
            livestreaming, drone work, and photography, MMM is your partner
            through every step of the process. We are known for our award winning video production services but we have more than one way to get you what you need. Let us know if
            one of our other services fits your needs. Check out work below and
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            to get started on your project today.
          </p>
        </div>
        <section id="our-work-video-section">
          <div>
            <Link href="/our_work/mmm-video">
              <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform">
                <div>
                  <FaVideo size={36} />
                </div>
                <h3 className="text-4xl md:text-6xl font-bold">
                  VIDEO
                </h3>
              </div>
            </Link>
          </div>
          <div className="md:text-lg flex justify-center items-center ">
          <p className="p-2 text-center text-balance w-10/12 md:w-1/2">
           Our video production is awesome beyond awesome and here in this text block we are going to tell you all about it using keywords that search engines like. lorem ipsum blah blah blah. 
          </p>
        </div>
        </section>

        {/* <div className="mt-12 md:text-lg flex justify-center items-center ">
          <p className="p-2 text-center text-balance w-10/12 md:w-1/2 ">
            We have more than one way to get you what you need. Let us know if
            one of our other services fits your needs. 
          </p>
        </div> */}
        <div className="grid grid cols-3 md:grid-cols-3 mb-6 mt-4 md:mt-12 md:mb-12">
          <div className="flex justify-center items-center mt-2 md:mt-0 order-1">
            <Link href="/our_work/drone">
              <WorkCategorySection
                categoryName="DRONE"
                categoryIcon={<TbDrone />}
                categoryText="Going where we can't, our certified drone pilots capture the aerial shots of your dreams."
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-0 order-2">
            <Link href="/our_work/livestreaming">
              <WorkCategorySection
                categoryName="LIVESTREAM"
                categoryIcon={<BsBroadcast />}
                categoryText="Livestream from anywhere to anywhere, amplifying your message like never before."
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-0 order-3">
            <Link href="/our_work/photography">
              <WorkCategorySection
                categoryName="PHOTOGRAPHY"
                categoryIcon={<FaCameraRetro />}
                categoryText="Capture your event with easy to share candid photos, headshots, and group pictures."
              />
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center items-center p-2 mt-6 mb-2">
          <div className="mt-2 flex justify-center">
            <ContactUsButton />
          </div>
        </div>
        <div className="flex justify-center items-center mb-12">
          <h4 className="text-xl md:text-2xl font-bold">
            Get started on your project today!
          </h4>
        </div>
        <div className="w-full">
          <MMMLineLogoBlack />
        </div>
      </main>
    </>
  );
}
