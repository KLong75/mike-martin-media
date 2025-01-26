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
      <div className="ml-2 sm:ml-6 md:ml-12 2xl:ml-20 w-40 md:w-42 lg:w-48 xl:w-52 h-auto p-2">
        <Link href="/" aria-label="Mike Martin Media - Home">
          <Image
            className="min-w-36"
            priority
            src={whiteMmmLogo}
            alt="Mike Martin Media Logo"
            aria-hidden="Mike Martin Media Logo"
          />
        </Link>
      </div>
      <div className="ml-auto xl:mr-6">
        <Nav />
      </div>
      <div className="hidden xl:block xl:mr-12">
        <SocialMediaLinks />
      </div>
    </header>
  );
}
