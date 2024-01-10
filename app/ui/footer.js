import Link from "next/link";
import Image from "next/image";
// import components
import SocialMediaLinks from "./socialMediaLinks";
import ContactInfo from "./contactInfo";

export default function Footer() {
  return (
    <footer className="mt-4">
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3  justify-items-center">
    <div className="flex justify-center items-center">
        <Image
          src="/images/company_logo.png"
          alt="logo"
          width={100}
          height={100}
          className=""
        />
      </div>
      <div className="">
        <ContactInfo />
      </div>
      <div className="flex justify-center items-center  w-full">
        <SocialMediaLinks />
      </div>
    </div>
      <div className="flex flex-col justify-center items-center py-2">
        <Link href="/">
          <span className="text-xs">©2024 Client Name</span>
        </Link>
        <Link href="https://kevinlong.dev/" target="_blank" className="">
          <span className="text-xs">Website by Rhythm Code Studio</span>
        </Link>
      </div>
    </footer>
  );
}
