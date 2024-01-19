"use client";
// import from react
import { useState } from "react";
//  import from next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// import from headlessui
import { Dialog } from "@headlessui/react";
// import icons
import { MdDehaze } from "react-icons/md";
import { HiX } from "react-icons/hi";
import { FaVideo } from "react-icons/fa6";
import { BsBroadcast } from "react-icons/bs";
import { FaCameraRetro } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { RiBallPenFill } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { FaClapperboard } from "react-icons/fa6";
// import { FaFileVideo } from "react-icons/fa6";
// import { RiFolderVideoFill } from "react-icons/ri";


const navLinks = [
  {
    href: "/",
    label: "About",
    icon: <FaClapperboard size={24} />,
  },
  {
    href: "/the_mmm_team",
    label: "The Team",
    icon: <RiTeamFill size={24} />,
  },
  {
    href: "/mmm_video",
    label: "Videos",
    icon: <FaVideo size={24} />,
  },
  {
    href: "/livestream",
    label: "Livestream",
    icon: <BsBroadcast size={24} />,
  },
  {
    href: "/photography",
    label: "Photography",
    icon: <FaCameraRetro size={24} />,
  },
  {
    href: "/blog",
    label: "MMM Blog",
    icon: <RiBallPenFill size={24} />,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: <FaEnvelope size={24} />,
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const openMenu = () => setMenuOpen(true);
  // const filteredNavLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <nav className="flex p-4 z-40 ">
      {/* Mobile Nav Menu */}
      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <Dialog.Panel className="fixed inset-0 z-10">
          <div className="flex justify-center items-center h-full">
            <div className="relative bg-white w-full h-full">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 mt-10 mr-7">
                <HiX size={28} />
              </button>
              <div className="mt-10 ">
              <div className="flex justify-center items-center w-24 mb-6">
              <Image
        src="/branding/mmm_black.png"
        width={294}
        height={95}
        alt="MMM logo"
      />
              </div>
              <ul className="flex flex-col space-y-8 items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`font-bold text-center w-full p-2
                      hover:text-slate-400 
                      transition duration-300 ease-in-out
                      ${pathname === link.href ? 'text-gray-400' : ''}`
                    }
                    onClick={() => {
                      setMenuOpen(false);
                    }}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* Mobile Menu Button*/}
      <div className=" mt-2 -mr-2 md:hidden">
        <button onClick={openMenu}>
          <MdDehaze
            size={28}
            className="hover:text-slate-500"
            aria-label="Open menu"
          />
        </button>
      </div>

      {/* <div
        className={` flex  ${
          menuOpen ? "" : "hidden md:flex"
        }`}>
        <ul className="flex flex-row w-full space-x-12">
        {navLinks.map((link) => (
          <li key={link.label} className={`flex-grow hover:transform hover:scale-125 transition-transform ${pathname === link.href ? 'text-gray-400 font-bold hidden' : ''}`}>
          <Link key={link.label} href={link.href}>
            {link.label}
            {link.icon}
          </Link>
          </li>
        ))}
        </ul>
      </div> */}
      <div className={`flex ${menuOpen ? "" : "hidden md:flex"} w-full`}>
  <ul className="flex flex-row w-full space-x-10 justify-center">
    {navLinks.map((link) => (
      <li key={link.label} className={`flex flex-col items-center justify-center hover:transform hover:scale-125 transition-transform ${pathname === link.href ? 'text-gray-400 font-bold hidden' : ''}`}>
        <Link href={link.href}>
          <div className="flex flex-col items-center justify-center">
            {link.icon}
            <span className="mt-2">{link.label}</span>
          </div>
        </Link>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
}
