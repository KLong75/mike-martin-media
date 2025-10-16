// import from next
// import Image from "next/image";
// import components
import Image from "next/image";

export default function MMMInstaLogo() {
  return (
    <div className="flex justify-center items-center w-full  mb-4">
      <div className="flex flex-col items-center mb-2 ">
        <div className="flex justify-center items-center mt-6 mb-4 md:mb-8">
          <span className="text-xl md:text-3xl font-bold mr-1">Follow</span>
          <div className="flex justify-center items-center w-12 md:w-20 h-auto md:mb-1">
            <Image
              src="/branding/mmm_black.png"
              width={294}
              height={95}
              alt="Mike Martin Media"
            />
          </div>
          <span className="text-xl md:text-3xl font-bold ml-1">
            on Instagram
          </span>
        </div>
        <div className="bg-black rounded-full w-16 h-16 md:w-20 md:h-20 -mt-2 md:-mt-6 mb-1">
          <div className="flex justify-center items-center w-full h-auto ">
            <Image
              className="mt-4 md:mt-6 p-1"
              src="/branding/mmm_logo_white.png"
              width={294}
              height={95}
              alt="MMM Instagram Profile Picture"
            />
          </div>
        </div>
        <a
          href="https://www.instagram.com/mikemartinmedia/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline">
          <span className="text-center md:text-xl font-bold hover:transform hover:scale-105 transition-transform">
            @mikemartinmedia
          </span>
        </a>
      </div>
    </div>
  );
}
