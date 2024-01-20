import Link from "next/link";
import Image from "next/image";
// import components
import SocialMediaLinks from "./socialMediaLinks";
import ContactInfo from "./contactInfo";
// import ContactUsButton from "./contactUsButton";

export default function Footer() {
  return (
    <footer className=" bg-gray-300">
      <div className="grid grid-cols-1  justify-items-center">
      <div className="flex justify-center items-center w-32 h-auto">
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
        <div className="flex justify-center items-center w-full mt-4 mb-4">
          <SocialMediaLinks />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-2">
  <div className="mb-">
    <a href="/" name='link to mikemartinmedia.com' target="_blank" rel="noopener noreferrer">
      <span className="text-xs ">©2024 Mike Martin Media</span>
    </a>
  </div>
  <a href="https://kevinlong.dev/" target="_blank" rel="noopener noreferrer" className="z-10" name="link to kevinlong.dev">
    <span className="text-xs">Website by Rhythm Code Studio</span>
  </a>
</div>
<div className="relative z-0 flex justify-center items-center w-auto -mt-5">
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
