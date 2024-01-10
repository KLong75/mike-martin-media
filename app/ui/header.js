import Nav from "./nav";
import Image from "next/image";
import Link from "next/link";



export default function Header() {
  return (
    <header className="flex items-center"> {/* Flex container */}
      <div className="p-1 ml-2"> 
        <Link href='/'>
          <Image src="/images/company_logo.png" width={100} height={100} alt='company logo' priority />
        </Link>
      </div>
      <div className="p-4"><h1>Company Name</h1></div>
      <div className="ml-auto p-6"> {/* Push Nav to the right with ml-auto*/}
        <Nav />
      </div>
    </header>
  )
}
