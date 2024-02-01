// import from next
import Image from "next/image";

export default function MMMInstaLogo() {
  return (
    <a
      href="https://www.instagram.com/mikemartinmedia/"
      target="_blank"
      rel="noopener noreferrer">
      <div className="flex justify-center items-center w-full hover:transform hover:scale-110 transition-transform mb-4">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center mt-6 mb-2 md:mb-6">
            <h6 className=" text-xl font-bold mr-1">Follow</h6>
            <div className="flex justify-center items-center w-14 h-auto mb-1">
              <Image
                src="/branding/mmm_black.png"
                width={294}
                height={95}
                alt="company logo"
              />
            </div>
            <h6 className="text-xl font-bold ml-1">on Instagram</h6>
          </div>

          <div className="bg-black rounded-full w-24 h-24 -mt-2 md:-mt-6">
            <div className="flex justify-center items-center w-full h-auto ">
              <Image
                className="mt-6 p-1"
                src="/branding/mmm_logo_white.png"
                width={294}
                height={95}
                alt="company logo"
              />
            </div>
          </div>
          <h6 className="text-center text-xl font-bold">@mikemartinmedia</h6>
        </div>
      </div>
    </a>
  );
}
