// import from next
import Link from "next/link";
// import data
// import components
import Image from "../ui/image";
import TeamGallery from "../ui/teamGallery";
import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
import MMMLineLogoHeading from "../ui/mmmLineLogoHeading";
import MMMTeamPhotoWithLogo from "../ui/mmmTeamPhotoWithLogo";
// iport images
import mikeVan from "../../public/images/about-page/mike-van.png";
// import text
import PageHeadingBanner from "../ui/pageHeadingBanner";

export const metadata = {
  title: "About Mike Martin Media",
  description:
    "For over 15 years, Mike Martin Media has combined the latest technology with the best in-house talent to create impactful videos for organizations all over the United States and the world. We partner with corporations, medical institutions, education institutions, and nonprofit organizations to bring their vision to life. Our expertise provides a seamless production experience that you probably didn't know could exist. We produce the quality work and client experience that you need along with a valuable partnership that will bring growth and success.",
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return (
    <main>
      <div className="">
        <BannerVideoWithFadeNoLogo
          src="https://player.vimeo.com/video/953317163?h=21c26f1413&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="About_Page_Banner_Video"
        />
      </div>
      <div>
        <PageHeadingBanner
          title={"About Us"}
          heading={"Turning Your Ideas Into Impactful Stories"}
          text={
            <>
              At MMM, we create video content{" "}
              <Link href="/capabilities/video-production" className="underline">
                video content
              </Link>{" "}
              that not only looks great but also makes a positive impact. We
              believe in the power of telling stories to inspire, connect and
              make real change. Every project we complete is an opportunity to
              help our clients succeed while contributing something good to the
              world.
            </>
          }
        />
      </div>
      <section className="flex justify-center items-center ">
      <div className="flex justify-center items-center p-6 md:p-12 lg:p-28 xl:p-42 max-w-700">
        <div
          id="home-page-about-section"
          className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-12 xl:gap-16 flex justify-center items-center">
          <div className="order-2 xl:order-1 relative flex justify-center items-center">
            <MMMTeamPhotoWithLogo />
          </div>
          <div className="flex flex-col justify-left order-1 xl:order-2 ">
            <h2 className="font-semibold text-2xl lg:text-3xl xl:text-4xl">
              Who We Are
            </h2>
            <p className="md:text-lg xl:text-xl my-4 lg:my-6">
            We are a team of creatives who found our niche in producing meaningful, high-quality video content. We understand that your story is unique and feel it should be told in a way that resonates with your audience. From concept to the final product, we are dedicated to crafting videos that are authentic, impactful and aligned with your goals.
            </p>
            <p className="md:text-lg xl:text-xl my-4 lg:my-6">
            While we do love to have fun, we also take our work very seriously—because we know that when it&apos;s done right, video can move people, inspire action and make a difference.
            </p>
          </div>
        </div>
      </div>
      </section>
      
      <section className="mt-8">
        <div className="lg:px-6 2xl:px-0">
          <MMMLineLogoHeading headline="Meet The Team" heading_level={"h2"} />
        </div>
        <div className="flex justify-center">
          <div className="max-w-600">
            <TeamGallery />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center p-8 lg:p-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 max-w-500 gap-6">
          <div className="mb-6">
            <h5 className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-6">
              Our Journey
            </h5>
            <div>
              <p className="lg:text-xl xl:text-balance">
                MMM was born out of a desire to do things differently. When we
                started, we knew we wanted to be more than just a production
                company. We wanted to create something that made a tangible,
                positive difference. We found our niche by focusing on quality,
                efficiency and impact, and help our clients bring their visions
                to life in a way that matters.
              </p>
            </div>
            <div className="mt-6">
              <p className="lg:text-xl xl:text-balance">
                We&apos;ve built lasting relationships with clients who share our
                values, and we&apos;ve helped them achieve success while also making
                the world a little better along the way. We&apos;re proud of where we
                started, and even more excited for where we&apos;re going.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={mikeVan}
              alt="Mike Martin in a white van with a video camera"
              priority
              width={708}
              height={5386}
            />
          </div>
        </div>
      </div>
    </main>
  );
}