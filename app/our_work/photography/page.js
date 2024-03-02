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
  title: "Photography Services",
  description:
    "We offer a wide range of photography services. From headshots to events, candid shots, and group pictures we can help you capture the moment.",
};

export default function Page() {
  return (
    <main className="grid grid-cols-1 ">
        <BannerVideo
          src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM_Photography_Video"
        />
      <div className="mt-4 mb-4 flex md:hidden">
        <BackToOurWorkLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 mb-6">
        <h2 className="text-center font-bold text-4xl md:text-6xl">
          PHOTOGRAPHY
        </h2>
      </div>
      <div className="mt-4 mb-8 hidden md:flex">
        <BackToOurWorkLink />
      </div>
      <section className="grid grid-cols-1 -mb-8 md:mb-0">
        <div className="md:text-lg flex justify-center items-center p-2">
          <p className=" md:text-lg text-center text-balance w-10/12  ">
            We offer a wide range of photography services. From headshots to
            events, we can help you capture the moment. Check out our work below
            and then{" "}
            <Link href="/contact">
              {" "}
              <span className="md:text-lg font-bold hover:scale-105 transition-transform inline-block">
                Contact Us{" "}
              </span>{" "}
            </Link>
            today to get started on your project.
          </p>
        </div>
        <div className="flex justify-center items-center p-4 mb-6 md:mb-10">
          <ContactUsButton />
        </div>
      </section>
      <div className="flex justify-center items-center w-full h-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-10/12 md:w-full">
          <div className="text-white relative  transition-transform">
            <PhotographyGallery
              client={"Catholic Charities of St. Louis"}
              cover_img_src={
                "/images/photography-cover-images/catholic-charities-cover-img.png"
              }
              width={437}
              height={655}
            />
          </div>
          <div className="text-white relative">
            <PhotographyGallery
              client={"Prasino"}
              cover_img_src={"/images/photography-cover-images/prasino-cover-img.png"}
              width={750}
              height={500}
            />
          </div>
          <div className="text-white relative">
            <PhotographyGallery
              client={"Club Fitness"}
              cover_img_src={
                "/images/photography-cover-images/club-fitness-cover-img.png"
              }
              width={374}
              height={536}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2 md:mt-12 md:mb-6">
        <p className="md:text-lg text-center text-balance w-10/12 md:w-1/2 ">
          <Link href="/contact">
            {" "}
            <span className="md:text-lg font-bold hover:scale-105 transition-transform inline-block">
              Contact Us{" "}
            </span>{" "}
          </Link>
          today to get started on your Photography project. Photography text with related
          keywords telling people how awesome your photography work is lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nulla keywords about
          photography.
        </p>
      </div>
      <div className="flex justify-center items-center p-2 mt-6 mb-6 md:mb-12">
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
