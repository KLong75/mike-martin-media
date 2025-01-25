// import from next
import Link from "next/link";
// import components
import Nav from "./nav";
import SocialMediaLinks from "./socialMediaLinks";
import Image from "./image"
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-294x95.png";

export default function Header() {
  return (
    <header className="flex items-center bg-black text-white h-30 lg:h-32 xl:h-32">
      {" "}
      {/* Flex container */}
      <div className="ml-2 sm:ml-6 md:ml-12 2xl:ml-20 w-40 md:w-48 lg:w-52 xl:w-56 h-auto flex items-center p-4">
        <Link href="/" aria-label="Mike Martin Media - Home">
          <Image
            priority
            src={whiteMmmLogo}
            alt="Mike Martin Media Logo"
            aria-hidden="Mike Martin Media Logo"
          />
        </Link>
      </div>
      <div className="ml-auto p-2 ml-48">
        <Nav />
      </div>
      <div className="ml-auto mr-16 hidden md:block">
        <SocialMediaLinks />
      </div>
    </header>
  );
}
