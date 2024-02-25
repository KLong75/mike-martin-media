import Nav from "./nav";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center bg-black text-white h-30">
      {" "}
      {/* Flex container */}
      <div className="ml-6 w-40 h-12 flex items-center">
        <Link href="/">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
            priority
            as="image"
          />
        </Link>
      </div>
      {/* <div className="p-4"><h1>Mike Martin Media</h1></div> */}
      {/* <div className="ml-auto md:ml-0 md:mr-auto p-4">  */}
      <div className="ml-auto p-4">
        <Nav />
      </div>
    </header>
  );
}
