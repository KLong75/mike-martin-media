// import from next
import Image from "next/image";
// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideo from "../../ui/bannerVideo";
// import data
import { photographyWorkSampleData } from "@/app/lib/data";
import PhotographyGallery from "@/app/ui/photographyGallery";

export default function Page() {
  return (
    <main className="grid grid-cols-1 ">
      <section className="">
        <BannerVideo
          src="https://player.vimeo.com/video/905365877?h=71828ac5c8&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Photography Slide Show"
        />
      </section>
      <h2 className="p-6 md:p-8 lg:p-12 md:mb-6 text-center text-3xl md:text-4xl font-extrabold ">
        Photography
      </h2>
      <section className="grid grid-cols-1">
        <div className="flex justify-center items-center">
          <p className="text-left p-8 -mt-10 md:-mt-12 md:px-48 lg:-mt-24 lg:px-60 lg:mr-24 lg:ml-24">
            We offer a wide range of photography services. From headshots to
            events, we can help you capture the moment. Check out our work below
            and then contact us to see how we can help you.
          </p>
        </div>
      </section>
      <div className=" flex justify-center items-center ">
        {/* prasino */}
        <div className="grid grid-cols-1">
          <PhotographyGallery
            client={"Prasino"}
            thumbnail_src={"/images/photographyWorkSamples/prasino/01.png"}
            width={500}
            height={333}
          />
          {/* <div className="text-white relative justify-center items-center w-full h-auto p-6 hover:cursor-pointer hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform">
            <Image
              src={photographyWorkSampleData[2].thumbnail_src}
              alt={photographyWorkSampleData[2].client}
              width={photographyWorkSampleData[2].width}
              height={photographyWorkSampleData[2].height}
            />
            <h3 className=" text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-bold  ">
              {photographyWorkSampleData[2].client}
            </h3> */}
          {/* </div> */}
        </div>
      </div>
      {/* ccstl */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 ">
        {/* Container for each image ensuring they have the same size */}
        <div className="text-white relative w-96 h-144 hover:cursor-pointer hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform">
          {" "}
          {/* Adjust 'w-96 h-96' to desired size */}
          <Image
            src={photographyWorkSampleData[0].thumbnail_src}
            alt={photographyWorkSampleData[0].client}
            layout="fill" // Use 'fill' to make the image cover the container
            objectFit="cover" // Adjust how the image fits within the container
            className="p-4"
          />
          <h3 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-bold">
            {photographyWorkSampleData[0].client}
          </h3>
        </div>

        <div className="text-white relative w-96 h-144 hover:transform hover:cursor-pointer hover:scale-110 hover:z-40 hover:text-black transition-transform">
          {" "}
          {/* Adjust 'w-96 h-96' to desired size */}
          <Image
            src={photographyWorkSampleData[1].thumbnail_src}
            alt={photographyWorkSampleData[1].client}
            layout="fill" // Use 'fill' to make the image cover the container
            objectFit="cover" // Adjust how the image fits within the container
            className="p-4"
          />
          <h3 className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl lg:text-4xl font-bold ">
            {photographyWorkSampleData[1].client}
          </h3>
        </div>
      </div>
      {/* </section> */}
      <div className="flex justify-center items-center p-4 mt-6 mb-6">
        <ContactUsButton />
      </div>
    </main>
  );
}
