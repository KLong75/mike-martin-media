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

const navLinks = [
  {
    href: "/",
    label: "About",
  },
  {
    href: "/our_videos",
    label: "Videos",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const openMenu = () => setMenuOpen(true);
  // const filteredNavLinks = navLinks.filter((link) => link.href !== pathname);

  return (
    <nav className="flex  p-4 z-40 ">
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
              <div className="mt-40 ">
              <div className="flex justify-center items-center p-6 mb-6">
                <Image
                  src="/branding/mmm_black_x.png"
                  alt="logo"
                  width={160}
                  height={52}
                  className="p-4"
                />
              </div>
              <ul className="flex flex-col space-y-8  items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`text-xl font-bold text-center w-full p-2
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

      <div
        className={` flex space-x-24 ${
          menuOpen ? "" : "hidden md:flex"
        }`}>
        <ul className="flex flex-row space-x-24">
        {navLinks.map((link) => (
          <li key={link.label} className={`${pathname === link.href ? 'text-gray-400 font-bold' : ''}`}>
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
}
