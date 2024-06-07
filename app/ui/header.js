import Nav from "./nav";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center bg-black text-white h-30 lg:h-32 xl:h-32">
      {" "}
      {/* Flex container */}
      <div className="ml-2 sm:ml-6 md:ml-12 2xl:ml-20 w-40 md:w-48 lg:w-52 xl:w-60 2xl:w-64 3xl:w-72 h-auto flex items-center p-4">
        <Link href="/">
          <Image
          priority
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="MMM logo"
          />
        </Link>
      </div>
      {/* <div className="p-4"><h1>Mike Martin Media</h1></div> */}
      {/* <div className="ml-auto md:ml-0 md:mr-auto p-4">  */}
      <div className="ml-auto p-4 mr-2 sm:mr-6 md:mr-12 2xl:mr-20">
        <Nav />
      </div>
    </header>
  );
}
