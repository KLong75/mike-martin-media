// import from next
import Link from "next/link";
// import components
import BannerVideo from "../../ui/bannerVideo";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import VideoGallery from "@/app/ui/videoGallery";
import ContactUsButton from "@/app/ui/contactUsButton";

export const metadata = {
  title: "Drone",
  description:
    "Aerial footage can add a unique perspective to your project. Our drone services provide stunning visuals. Contact us today to see how we can help you.",
};

export default function Page() {
  return (
    <main>
      <BannerVideo
        src="https://player.vimeo.com/video/914904466?h=4da6b8b38e&&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
        title="MMM_Livestreaming_Video"
      />
      <div className="mt-4 mb-4">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24">
        <h2 className="text-center font-bold text-3xl md:text-4xl mt-2">
          DRONE
        </h2>
      </div>
      <section>
        <div className="">
          <p className="md:text-lg text-center text-balance p-2">
            Drone content is highly requested and incredibly powerful for a
            project. We use it in most projects.
          </p>
          <p className="text-center text-balance p-2">
            <Link href="/contact">
              {" "}
              <span className="font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            to see how our licensed drone pilots can take your video to the next
            level.
          </p>
          <div className="mt-4 mb-4 flex justify-center"> <ContactUsButton />
          </div>
         
        </div>
        <VideoGallery selectedCategory="Drone" excludedCategory={[]} />
      </section>
      <div className="md:text-lg flex justify-center items-center mt-6 md:mt-12">
        <p className=" text-center text-balance w-10/12">
          <Link href="/contact">
            <span className="font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today to see how our certified drone pilots can take your project to the next level. Drone text
          with related keywords telling people how awesome your livestream work
          is lorem ipsum
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
}
