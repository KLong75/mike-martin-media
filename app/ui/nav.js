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
    label: "Home",
  },
  {
    href: "/page2",
    label: "Page 2",
  },
  {
    href: "/page3",
    label: "Page 3",
  },
  {
    href: "/page4",
    label: "Page 4",
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const openMenu = () => setMenuOpen(true);
  const filteredNavLinks = navLinks.filter((link) => link.href !== pathname);

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
                className="absolute top-0 right-0 mt-6 mr-6">
                <HiX size={24} />
              </button>
              <div className="flex justify-center items-center mt-36">
                <Image
                  src="/images/company_logo.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="p-4"
                />
              </div>
              <ul className="flex flex-col space-y-4  items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.label}
                    className={`text-xl font-bold text-center w-full p-2
            hover:text-blue-500 
            transition duration-300 ease-in-out
            ${pathname === link.href ? 'text-blue-500' : ''}`
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
        </Dialog.Panel>
      </Dialog>
      {/* Mobile Menu Button*/}
      <div className="-mt-7 -mr-4 md:hidden">
        <button onClick={openMenu}>
          <MdDehaze
            size={24}
            className="hover:text-blue-500"
            aria-label="Open menu"
          />
        </button>
      </div>

      <div
        className={`ml-auto flex space-x-12 ${
          menuOpen ? "" : "hidden md:flex"
        }`}>
        {filteredNavLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
