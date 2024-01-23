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
    label: "Video",
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

  return (
    <nav className="flex p-4 z-40 ">
      {/* Mobile Nav Menu */}
      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-80" />
        <Dialog.Panel className="fixed inset-0 z-10">
          <div className="flex justify-center items-center h-full">
            <div className="relative bg-white w-full h-full flex flex-col justify-center items-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 mt-10 mr-7">
                <HiX size={28} />
              </button>
              <div className="mb-6">
                <Image
                  src="/branding/mmm_black_x.png"
                  alt="logo"
                  width={160}
                  height={52}
                />
              </div>
             {/* Nav Links */}
             <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`font-bold text-center w-full p-2 hover:transform hover:scale-125 transition-transform ${
                      pathname === link.href ? "hidden" : ""
                    }`}>
                    <Link href={link.href}>
                      <div
                        className="flex flex-col items-center justify-center cursor-pointer"
                        onClick={() => setMenuOpen(false)}>
                        {link.icon}
                        <span>{link.label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
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
      {/* Desktop Nav Menu */}
      <div className={`flex ${menuOpen ? "" : "hidden md:flex"} w-full`}>
        <ul className="flex flex-row w-full space-x-10 justify-center">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`flex flex-col items-center justify-center hover:font-bold hover:transform hover:scale-125 transition-transform ${
                pathname === link.href ? "hidden" : ""
              }`}>
              <Link href={link.href}>
                <div className="flex flex-col items-center justify-center cursor-pointer">
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