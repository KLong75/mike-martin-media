// import from next
import Link from "next/link";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoGallery from "@/app/ui/videoGallery";

export const metadata = {
  title: "Our Work | Animation and Motion Graphics",
  description:
    "Elevate your organization's message with our dynamic animation and motion graphics capabilities. From captivating 2D illustrations to immersive 3D experiences, we bring your vision to life with creativity and precision. Our visual effects services are individually designed to enhance your message with captivating motion graphics and animations. From animated intros and outros to fully animated videos, our adept editors will bring your ideas right to your screen. With our expertise in animation editing, we help you create a seamless and immersive visual experience that captivates your audience and sets your organization apart from the rest",
};

export default function Page() {
  return (
    <main>
      <BannerVideoWithFadeNoLogo
        src="https://player.vimeo.com/video/948449576?h=378cc31a7c&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="mt-4 mb-4 flex md:hidden">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h2 className="text-center font-bold text-2xl md:text-4xl xl:text-6xl mt-2">
          ANIMATION & MOTION GRAPHICS
        </h2>
      </div>
      <div className="mt-4 -mb-8 hidden md:flex">
        <BackToOurWorkLink />
      </div>
      <section className="md:mt-12">
        <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center">
          <p className="text-center text-balance p-6 2xl:p-12 3xl:px-72 4xl:px-96">
            Elevate your organization&apos;s message with our dynamic animation and
            motion graphics capabilities. From captivating 2D illustrations to
            immersive 3D experiences, we bring your vision to life with
            creativity and precision.
          </p>
        </div>
        <div className="flex justify-center items-center p-6">
          <ContactUsButton />
        </div>
        <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center">
          <p className="text-center text-balance p-6 2xl:p-12 3xl:px-72 4xl:px-96">
            We stay up to date on the latest and greatest in the animation and
            editing worlds so that you don&apos;t have to. Growing with the rapidly
            advancing world around us keeps us on our toes, flexible, and always
            ready for what&apos;s next.
          </p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 p-12">
          <h4 className="text-2xl xl:text-3xl 2xl:text-4xl text-center font-bold">
            Animation & Motion Graphics Projects
          </h4>
        </div>
        <div className="mb-8 md:mb-12 lg:mb-18">
          <VideoGallery
            selectedCategory="Animation"
            excludedCategory={[
              "Corporate",
              "Education",
              "Medical",
              "Nonprofit",
              "Drone",
              "Livestream",
            ]}
          />
        </div>
      </section>

      <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center">
        <p className="text-center text-balance p-6 2xl:p-12 3xl:px-72 4xl:px-96">
          Our visual effects services are individually designed to enhance your
          message with captivating motion graphics and animations. From animated
          intros and outros to fully animated videos, our adept editors will
          bring your ideas right to your screen. With our expertise in animation
          editing, we help you create a seamless and immersive visual experience
          that captivates your audience and sets your organization apart from
          the rest.
        </p>
      </div>

      {/* <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center -mt-4 md:mt-0">
        <p className=" text-center text-balance w-10/12">
          <Link href="/contact">
            <span className="font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today...
        </p>
      </div> */}

      <div className="flex justify-center items-center mb-12 mt-6">
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
