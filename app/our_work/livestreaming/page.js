// import from next
import Link from "next/link";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideoWithFadeNoLogo from "@/app/ui/bannerVideoWithFadeNoLogo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoGallery from "@/app/ui/videoGallery";

export const metadata = {
  title: "Our Work | Livestream Services",
  description:
    "Wherever you are, we can help you stream to anywhere. Livestreaming is an invaluable resource that can catapult your organization and message farther. Contact us today to create a livestreaming solution that works for you.",
};

export default function Page() {
  return (
    <main>
        <BannerVideoWithFadeNoLogo
          src="https://player.vimeo.com/video/904181398?h=c0efc97d6f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Livestreaming_Video"
        />
      <div className="mt-4 mb-4 flex md:hidden">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl mt-2">
          LIVESTREAMING
        </h2>
      </div>
      <div className="mt-4 -mb-8 hidden md:flex">
        <BackToOurWorkLink />
      </div>
      <section className="md:mt-12">
        <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center">
          <p className="text-center text-balance p-6">
            Wherever you are, we can help you stream to{" "}
            <span className="italic font-bold">ANYWHERE</span>. Livestreaming is
            an invaluable resource that can catapult your organization and
            message farther.{" "}
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            today to create a livestreaming solution that works for you.
          </p>
        </div>
        <div className="flex justify-center items-center p-4 mb-6 md:mb-10">
          <ContactUsButton />
        </div>
      </section>
      <section className="justify-center items-center mt-2">
        <div className="flex justify-center">
          <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold">Available Streaming Services</h3>
        </div>
        <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center -mt-12">
          <ul className="list-disc p-16 columns-1 md:columns-2 lg:ml-40">
            <li>Streaming capable on various platforms</li>
            <li>In-studio or on-site streaming</li>
            <li>Optimized for travel</li>
            <li>International streaming available</li>
            <li>Single cam or multicam</li>
            <li>Incorporate live remote guests</li>
            <li>Live and pre-recorded content</li>
            <li>Facilitate live closed captioning</li>
            <li>Prompter for speakers</li>
            <li>Confidence screens</li>
            <li>Collaboration with in-house or third party vendors</li>
            <li>Long-term livestream hosting</li>
            <li>Interactive options</li>
            <li>Will collaborate with your team to ensure a smooth process</li>
            <li>Small to large audience size</li>
            <li>Online, in-person, and hybrid</li>
          </ul>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 -mt-8 md:mt-0">
          <h4 className="text-2xl xl:text-3xl 2xl:text-4xl text-center font-bold -mb-6 md:mb-12 lg:mb-20 ">
            Recent Streams
          </h4>
          <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center md:-mt-6">
            <p className="text-balance text-center p-8 -mb-6 md:-mt-12 md:px-48 lg:-mt-24 lg:px-60 lg:mr-24 lg:ml-24">
              Check out some recent live streams we have hosted.
            </p>
          </div>
        </div>
        <div className="mb-8 md:mb-12 lg:mb-18">
          <VideoGallery selectedCategory="Livestream" 
            excludedCategory={["Corporate", "Education", "Medical", "Nonprofit", "Drone"]}
          />
        </div>
      </section>

      <div className="md:text-xl xl:text-2xl 3xl:text-3xl flex justify-center items-center -mt-4 md:mt-0">
        <p className=" text-center text-balance w-10/12">
          <Link href="/contact">
            <span className="font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today to get started on your Livestreaming project.
        </p>
      </div>

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
};
