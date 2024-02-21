// import from next
import Link from "next/link";
// import icons

import { IoIosArrowBack } from "react-icons/io";

export default function BackToHomeLink() {
  return (
    <Link href="/">
      <div className="ml-2 flex">
        <IoIosArrowBack className="text-3xl "/>
        <span className="text-xs mt-2 -ml-1 md:text-sm md:mt-1.5">To Home</span>
      </div>
    </Link>
  );
}