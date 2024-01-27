import Link from "next/link";
import Image from "next/image";
// import components
import SocialMediaLinks from "./socialMediaLinks";
import ContactInfo from "./contactInfo";
// import ContactUsButton from "./contactUsButton";

export default function Footer() {
  return (
    <footer className=" bg-black text-white">
      <div className="grid grid-cols-1  justify-items-center mt-2">
        <div className="hidden md:flex justify-center items-center w-32 h-auto">
          <Image
            src="/branding/mmm_logo_white.png"
            alt="logo"
            width={294}
            height={95}
            className="p-4"
          />
        </div>

        <div className=" mt-">
          <ContactInfo />
        </div>
        <div className="flex justify-center items-center w-full mt-4 mb-4">
          <SocialMediaLinks />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-2">
        <div className="mb-">
          <span className="text-xs ">©2024 Mike Martin Media</span>
        </div>
        <span className="text-xs">Website by Rhythm Code Studio</span>
      </div>
      <div className="flex  md:hidden justify-center items-center w-full">
        <Image
          src="/branding/mmm_line_logo_white.png"
          height={60}
          width={1140}
          alt="MMM logo"
        />
      </div>
    </footer>
  );
}
