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
    <header className="flex items-center bg-black text-white h-30">
      <div className="my-2 ml-2 sm:ml-6 md:ml-12 2xl:ml-20 w-40 md:w-42 lg:w-48 xl:w-52 3xl:w-64 h-auto p-2">
        <Link href="/" aria-label="Mike Martin Media - Home">
          <Image
            className="min-w-36"
            priority
            src={whiteMmmLogo}
            alt="Mike Martin Media"
          />
        </Link>
      </div>
      <div className="ml-auto xl:mr-6">
        <Nav />
      </div>
      <div className="hidden lg:block mr-20 ">
        <SocialMediaLinks />
      </div>
    </header>
  );
}
