// import from next
import Link from "next/link";
import Image from "next/image";
// import components
import TextSegment from "../ui/textSegment";
import OurWorkTiles from "../ui/ourWorkTiles";
import BackToHomeLink from "../ui/backToHome";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerVideo from "../ui/bannerVideo";
import BannerImage from "../ui/bannerImage";
import ContactUsButton from "../ui/contactUsButton";
import WorkCategorySection from "../ui/workCategorySection";
// import icons
import { TbDrone } from "react-icons/tb";
import { FaVideo, FaCameraRetro } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";

export const metadata = {
  title: "Our Work",
  description:
    "We take pride in every project. We partner with clients of all sizes to bring their ideas to life. From concept to conclusion, we write, shoot, edit, direct, produce, animate, hire talent, find locations, and everything else needed for your production. From videos to livestreams, to animations, to photography, to licensed drone photography, and licensed drone videography, we have you covered.",
};

export default function Page() {
  return (
    <>
      <main>
        <div className="-mt-1">
          <BannerImage
            src="/images/ourWorkPage/our_work_video_banner_image.jpg"
            alt="MMM Video Production at work"
            width={5008}
            height={1996}
            priority={true}
          />
        </div>
        <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-4xl md:text-5xl">
            OUR WORK
          </h3>
        </div>
        <div className="md:text-xl flex justify-center items-center mt-6 mb-6">
          <p className="text-center text-balance w-10/12 p-2">
            From corporate, education, medical, or nonprofit videos, to livestreaming, drone work, and photography, MMM is your
            partner through every step of the process. Check out work below and
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            to get started on your project today.
          </p>
        </div>
        <div className="mb-6 relative ">
          <Link href="/our_work/mmm-video">
            <div className="flex flex-col justify-center items-center  absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:transform hover:scale-125 transition-transform">
              <div>
                <FaVideo size={36} />
              </div>
              <h3 className="text-4xl md:text-6xl font-semibold z-50">VIDEO</h3>
            </div>
            <div className=" z-20">
              <Image
                src="/images/ourWorkPage/video_banner_image.png"
                alt="MMM Video Production at work"
                width={5008}
                height={1996}
                priority={true}
              />
            </div>
          </Link>
        </div>
        <div className="md:text-xl flex justify-center items-center md:mt-12 md:mb-12">
          <p className="p-2  text-center text-balance w-10/12 md:w-1/2">
            We have more than one way to get you what you need. Let us know if
            one of our other services fits your needs.
          </p>
        </div>
        <div className="grid grid cols-3 md:grid-cols-3 mb-6 mt-4 md:mt-12 md:mb-16">
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
        <div className="flex justify-center items-center">
          <h4 className="text-xl md:text-2xl font-bold">
            Get started on your project today!
          </h4>
        </div>
        <div className="flex justify-center items-center p-2 mt-4 mb-6 md:mb-12">
          <div className="mt-2 flex justify-center">
            <ContactUsButton />
          </div>
        </div>
        <div className="w-full">
          <MMMLineLogoBlack />
        </div>
      </main>
    </>
  );
}
