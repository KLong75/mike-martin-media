// import from next
import Link from "next/link";
import Image from "next/image";

// import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BannerImage from "../ui/bannerImage";
import ContactUsButton from "../ui/contactUsButton";
import WorkCategorySection from "../ui/workCategorySection";
// import icons
import { TbDrone } from "react-icons/tb";
import { FaVideo, FaCameraRetro } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";
// import text
import { our_work_page_text } from "../lib/siteText";

export const metadata = {
  title: "Our Work",
  description:
    "We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process.",
};

export default function Page() {
  return (
    <>
      <main>
        <div className="pb-20">
          <BannerImage
            src="/images/ourWorkPage/our_work_video_banner_image.png"
            alt="MMM Video Production at work"
            width={4320}
            height={1584}
            priority
          />
        </div>
        <div className="-mt-20 bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
          <h3 className="text-center font-bold text-4xl md:text-6xl">
            OUR WORK
          </h3>
        </div>
        <div className="md:text-lg flex justify-center items-center mt-6 md:mt-12 mb-6 md:mb-12">
          <p className="md:text-xl text-center text-balance w-10/12 p-2">
            From corporate, educational, medical, and nonprofit videos, to
            whatever category your content could fit into, we would love to
            create with you. We utilize video, livestreaming, drone work, and
            photography in all that we do. MMM is your partner for every step of
            the process. Check out our work below and
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-110 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            to get started on your next project.
          </p>
        </div>
        <div className="mt-2 mb-4 md:mb-20 flex justify-center">
          <ContactUsButton />
        </div>

        <section id="our-work-video-section" className="mt-12 mb-6 md:mb-20">
          <div>
            <Link href="/our_work/mmm-video">
              <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform">
                <div>
                  <FaVideo size={36} />
                </div>
                <h3 className="text-3xl md:text-6xl font-semibold underline">
                  VIDEO
                </h3>
              </div>
            </Link>
          </div>
          <div className="md:text-2xl flex justify-center items-center ">
            <p className="p-2 text-center text-balance w-10/12 md:w-1/2">
              Award winning, professional video production. Content creation,
              live recording, post-production editing, color grading, audio
              engineering, on screen graphics, green screen, visual effects,
              commercials, promotions, and so much more.
            </p>
          </div>
        </section>
        <div className="grid grid cols-3 md:grid-cols-3 mb-6 mt-4 md:mt-12 md:mb-20 gap-6 md:gap-8">
          <div className="flex justify-center items-center mt-2 md:mt-0 order-1 md:h-52">
            <Link href="/our_work/drone">
              <WorkCategorySection
                categoryName="DRONE"
                categoryIcon={<TbDrone />}
                categoryText="Going where we can't, our certified drone pilots capture the aerial shots of your dreams."
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-0 order-2 md:h-52">
            <Link href="/our_work/livestreaming">
              <WorkCategorySection
                categoryName="LIVESTREAM"
                categoryIcon={<BsBroadcast />}
                categoryText="Livestream from anywhere to anywhere, amplifying your message like never before."
              />
            </Link>
          </div>
          <div className="flex justify-center items-center mt-2 md:mt-0 order-3 md:h-52">
            <Link href="/our_work/photography">
              <WorkCategorySection
                categoryName="PHOTOGRAPHY"
                categoryIcon={<FaCameraRetro />}
                categoryText="Easy to share candid photos, headshots, and group pictures. In studio or on location."
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center p-2 mt-12 mb-2">
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
