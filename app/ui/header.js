import Nav from "./nav";
import Image from "next/image";
import Link from "next/link";



export default function Header() {
  return (
    <header className="flex items-center"> {/* Flex container */}
      <div className="p-1 ml-6 w-40 h-12"> 
        <Link href='/'>
          <Image src="/branding/mmm_black.png" height={95} width={294}  alt='company logo' priority />
        </Link>
      </div>
      {/* <div className="p-4"><h1>Mike Martin Media</h1></div> */}
      <div className="ml-auto p-4"> {/* Push Nav to the right with ml-auto*/}
        <Nav />
      </div>
    </header>
  )
}
