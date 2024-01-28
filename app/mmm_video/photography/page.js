// import from next 
import Image from "next/image";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideo from "../../ui/bannerVideo";
import VideoGallery from "@/app/ui/videoGallery";


export default function Page() {
  return (
    <main className="grid grid-cols-1 ">
      <section className="">
        <BannerVideo
          src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Livestreaming Video"
        />
      </section>
      <h2 className="p-6 md:p-8 lg:p-12 text-center text-3xl md:text-4xl font-extrabold ">
        Photography
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      </section>
     
    </main>
  );
}