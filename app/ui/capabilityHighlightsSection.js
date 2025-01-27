// import components
import Image from "@/app/ui/image";

export default function CapabilityHighLightsSection({
  headline,
  highlights,
  video_src,
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-6">
        <h3 className="lg:px-6 text-lg lg:text-xl 2xl:text-4xl font-semibold lg:-mb-10">
          {headline}
        </h3>
        <div className="w">
        <Image
          src="/branding/line-logo-black.png"
          alt="Line Logo Black"
          width={1440}
          height={65}
          className="lg:mb-6 lg:px-6"
        />
        </div>
      </div>
      <div className="lg:m-10 grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-2xl">
        <div className="flex justify-center hidden lg:flex">
          <iframe
            src={video_src}
            title="Video"
            width="100%"
            height="100%"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="w-full h-auto "></iframe>
        </div>
        <div className="flex justify-center">
          <ul className="space-y-12 w-full">
            {highlights.map((highlight, index) => (
              <li key={index} className="relative pb-6">
                <span className="text-2xl font-bold">{highlight.label}</span>
                <br />
                <span className="text-xl">{highlight.description}</span>
                <span className="absolute bottom-0 left-0 w-full border-b border-black "></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}