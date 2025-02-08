// import components
import Image from "@/app/ui/image";
import MMMLineLogoHeading from "@/app/ui/mmmLineLogoHeading";

export default function CapabilityHighLightsSection({
  headline,
  highlights,
  video_src,
}) {
  return (
    <div className="flex flex-col items-center">
    <div className="lg:px-6 2xl:px-0">
      <MMMLineLogoHeading headline={headline} heading_level={"h3"} />
      </div>
      <div className="lg:m-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl">
        <div className="flex justify-center hidden md:flex px-12">
          <iframe
            src={video_src}
            title="Video"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="w-full h-auto">
          </iframe>
        </div>
        <div className="flex justify-center px-6 ">
          <ul className="space-y-6 w-full">
            {highlights.map((highlight, index) => (
              <li key={index} className="relative lg:pb-6">
                <span className="lg:text-2xl font-bold">{highlight.label}</span>
                <br />
                <span className="text-sm lg:text-xl inline-block">
                  {highlight.description}
                </span>
                <span
                  className="absolute bottom-0 left-0 border-b border-black"
                  style={{ width: "calc(100% - 2rem)" }}></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

{/* <div className="p-6">
        <h3 className="lg:px-6 text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold -mb-6 lg:-mb-10 w-3/4">
          {headline}
        </h3>
        <div className="">
          <Image
            src="/branding/line-logo-black.png"
            alt="Line Logo Black"
            width={1440}
            height={65}
            className="mt-2 lg:mb-6 lg:px-6"
          />
        </div>
      </div> */}