import Nav from "./nav";
// import Image from "next/image";
import Image from "./image"

export default function Header() {
  return (
    <header className="flex items-center bg-black text-white h-30 lg:h-32 xl:h-32">
      {" "}
      {/* Flex container */}
      <div className="ml-2 sm:ml-6 md:ml-12 2xl:ml-20 w-40 md:w-48 lg:w-52 xl:w-60 2xl:w-64 3xl:w-72 h-auto flex items-center p-4">
          <Image
            priority
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="MMM logo"
          />
      </div>
      <div className="ml-auto p-4 mr-2 sm:mr-6 md:mr-12 2xl:mr-20">
        <Nav />
      </div>
    </header>
  );
}
