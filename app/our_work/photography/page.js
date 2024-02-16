// import from Link
import Link from "next/link";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideo from "../../ui/bannerVideo";
import PhotographyGallery from "@/app/ui/photographyGallery";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import TextSegment from "@/app/ui/textSegment";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";


export const metadata = {
  title: "Photography",
  description:
    "We offer a wide range of photography services. From headshots to events, we can help you capture the moment. Check out our work and then contact us to see how we can help you.",
};


export default function Page() {
  return (
    <main className="grid grid-cols-1 ">
      <section >
        <BannerVideo
          src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Photography_Slide_Show"
        />
      </section>
      <div className="mt-4 mb-4">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 mb-6">
          <h2 className="text-center font-bold text-3xl md:text-4xl">
            PHOTOGRAPHY
          </h2>
        </div>
      <section className="grid grid-cols-1 -mb-8 md:mb-0">
      <div className="flex justify-center items-center p-2 mb-4">
          <p className="-mt-4 text-center text-balance w-10/12 md:w-1/2 ">
          We offer a wide range of photography services. From headshots to
            events, we can help you capture the moment. Check out our work below
            and then {" "}
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            today to get started on your project.
          </p>
        </div>
        {/* <div className="flex justify-center items-center">
          <p className="text-center text-balance font-bold p-8 -mt-10 md:-mt-8 lg:px-60 lg:mr-24 lg:ml-24">
            We offer a wide range of photography services. From headshots to
            events, we can help you capture the moment. Check out our work below
            and then contact us to see how we can help you.
          </p>
        </div> */}
      </section>
      {/* <section> */}
      <div className=" flex justify-center items-center ">
        {/* prasino */}
        <div className="grid grid-cols-1 w-128 h-auto">
          <PhotographyGallery
            client={"Prasino"}
            cover_img_src={"/images/photographyWorkSamples/prasino/01_15percent.png"}
            width={750}
            height={500}
          />
        </div>
      </div>
      {/* ccstl */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-0 h-full">
        {/* Container for each image ensuring they have the same size */}
        <div className="text-white relative w-96 h-auto hover:cursor-pointer hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform ">
          <PhotographyGallery
            client={"CCSTL"}
            cover_img_src={"/images/photographyWorkSamples/ccstl/01_crop.png"}
            width={437}
            height={655}
          />
        </div>
        <div className="text-white relative w-96 h-auto hover:transform hover:cursor-pointer hover:scale-110 hover:z-40 hover:text-black transition-transform">
          <PhotographyGallery
            client={"Club Fitness"}
            cover_img_src={"/images/photographyWorkSamples/clubFitness/01.png"}
            width={374}
            height={536}
          />
        </div>
      </div>
      <div className="flex justify-center items-center p-2">
        <p className=" text-center text-balance w-10/12 md:w-1/2 ">
          <Link href="/contact">
            {" "}
            <span className="font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today to get started on your Video project. Video text with related
          keywords telling people how awesome your video work is lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla keywords about
          video production.
        </p>
      </div>
      <div className="flex justify-center items-center p-2 mb-6">
        <ContactUsButton />
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
