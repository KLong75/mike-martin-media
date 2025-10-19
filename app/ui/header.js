"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
// import components
import Nav from "./nav";
import SocialMediaLinks from "./socialMediaLinks";
import Image from "next/image";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-294x95.png";

export default function Header() {
  const currentPath = usePathname();
  return (
    <header className="flex items-center bg-black text-white h-30">
      <div className="my-2 ml-2 sm:ml-6 md:ml-12 3xl:ml-16 w-40 md:w-42 lg:w-48 xl:w-52 3xl:w-64 h-auto p-2">
        {currentPath === "/" ? (
          <div aria-label="Mike Martin Media">
            <Image
              className="min-w-36"
              priority
              src={whiteMmmLogo}
              alt="Mike Martin Media"
            />
          </div>
        ) : (
          <Link href="/" aria-label="Mike Martin Media - Home">
            <Image
              className="min-w-36"
              priority
              src={whiteMmmLogo}
              alt="Mike Martin Media"
            />
          </Link>
        )}
      </div>
      <div className="ml-auto lg:mr-6">
        <Nav />
      </div>
      {/* <div className="hidden lg:block ml-6 mr-12 3xl:mr-16"> */}
      <div className="hidden xl:block flex justify-center items-center ml-2 mr-12 3xl:mr-16">
        <SocialMediaLinks />
      </div>
    </header>
  );
}
