import Link from "next/link";
import Image from "next/image";
// import components
import SocialMediaLinks from "./socialMediaLinks";
import ContactInfo from "./contactInfo";
import ContactUsButton from "./contactUsButton";

export default function Footer() {
  return (
    <footer className=" bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  justify-items-center mt-4">
        <div className="flex justify-center items-center w-52 h-auto">
          <Image
            src="/branding/mmm_black.png"
            alt="logo"
            width={294}
            height={95}
            className="p-4"
          />
        </div>
        <div className="">
          <ContactInfo />
        </div>
        <div className="flex justify-center items-center w-full">
          <SocialMediaLinks />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-2 -mb-4">
        <Link href="/">
          <span className="text-xs">©2024 Mike Martin Media</span>
        </Link>
        <Link href="https://kevinlong.dev/" target="_blank" className="">
          <span className="text-xs">Website by Rhythm Code Studio</span>
        </Link>
      </div>
      <div className="flex justify-center items-center ">
        <Image
          src="/branding/mmm_line_logo.png"
          height={60}
          width={1140}
          alt="MMM logo"
        />
      </div>
    </footer>
  );
}
