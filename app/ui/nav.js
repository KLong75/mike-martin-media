"use client";
// import from react
import { useState, useRef, useEffect } from "react";
//  import from next
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
// import from headlessui
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
// import icons
import { MdDehaze } from "react-icons/md";
import { HiX } from "react-icons/hi";
// import components
import Image from "next/image";
// import SubNavMenu from "./subNavMenu";
// import SubNavMenuMobile from "./subNavMenuMobile";
// import data
import { capabilities } from "../lib/capabilities/capabilities";
import { industries } from "../lib/industries/industries";
import SubNavPopover from "./subNavPopover";

const navLinks = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/our-work",
    label: "Our Work",
  },
  {
    href: "",
    label: "Capabilities",
  },
  {
    href: "",
    label: "Industries",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  // {
  //   href: "/case-studies",
  //   label: "Case Studies",
  // },
  {
    href: "/careers",
    label: "Careers",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  // const [industriesOpen, setIndustriesOpen] = useState(false);
  // const [capabilitiesOpenMobile, setCapabilitiesOpenMobile] = useState(false);
  // const [industriesOpenMobile, setIndustriesOpenMobile] = useState(false);
  // const [submenuPosition, setSubmenuPosition] = useState({ left: 0 });
  const pathname = usePathname();
  const openMenu = () => setMenuOpen(true);
  // const openCapabilities = () => setCapabilitiesOpen(true);
  // const openIndustries = () => setIndustriesOpen(true);
  // const openCapabilitiesMobile = () => setCapabilitiesOpenMobile(true);
  // const openIndustriesMobile = () => setIndustriesOpenMobile(true);

  // const capabilitiesRef = useRef(null);
  // const industriesRef = useRef(null);

  // useEffect(() => {
  //   if (capabilitiesOpen && capabilitiesRef.current) {
  //     const rect = capabilitiesRef.current.getBoundingClientRect();
  //     setSubmenuPosition({ left: rect.left + rect.width / 2 });
  //   } else if (industriesOpen && industriesRef.current) {
  //     const rect = industriesRef.current.getBoundingClientRect();
  //     setSubmenuPosition({ left: rect.left + rect.width / 2 });
  //   }
  // }, [capabilitiesOpen, industriesOpen]);

  return (
    <nav className="flex p-4 z-40">
      {/* Mobile Nav Menu */}
      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black z-50" />
        <DialogPanel className="fixed inset-0 z-50">
          <div className="flex justify-center items-center h-full">
            <div className="relative text-white bg:black w-full h-full flex flex-col justify-center items-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 mt-10 mr-7">
                <HiX size={28} />
              </button>
              <div className="flex flex-col items-center">
                <div className="mb-6 w-40 h-auto">
                  <Link href="/" aria-label="Mike Martin Media - Home">
                    <Image
                      src="/branding/mmm_logo_white.png"
                      width={294}
                      height={95}
                      alt="MMM logo"
                      priority
                      as="image"
                      onClick={() => setMenuOpen(false)}
                    />
                  </Link>
                </div>
                {/* Nav Links */}
                <ul className="space-y-4 text-xl">
                  {navLinks.map((link) => (
                    <li
                      onClick={() => setMenuOpen(false)}
                      key={link.label}
                      className={`font-bold text-left w-full p-2 ${
                        pathname === link.href ? "disabled" : ""
                      }`}>
                      {link.label === "Capabilities" ? (
                        <SubNavPopover
                          category={{
                            label: "Capabilities",
                            sub_items: capabilities,
                          }}
                        />
                      ) : link.label === "Industries" ? (
                        <SubNavPopover
                          category={{
                            label: "Industries",
                            sub_items: industries,
                          }}
                        />
                      ) : link.label === "Contact Us" ? (
                        <a href={link.href}>
                          <span
                            onClick={() => setMenuOpen(false)}
                            className={` ${
                              pathname === link.href
                                ? "hover:cursor-text disabled text-gray-300"
                                : " "
                            } `}>
                            {link.label}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* Mobile Menu Button*/}
      <div className="ml-auto mt-2 lg:hidden">
        <button onClick={openMenu}>
          <MdDehaze size={28} aria-label="Open menu" />
        </button>
      </div>
      {/* Desktop Nav Menu */}
      <div className={`z-50 flex ${menuOpen ? "" : "hidden lg:flex"} w-full`}>
        <ul className="flex flex-row space-x-6 xl:space-x-8 2xl:space-x-10">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`flex flex-col items-center justify-center whitespace-nowrap ${
                pathname === link.href ? "" : ""
              }`}>
              {link.label === "Capabilities" ? (
                <SubNavPopover
                  category={{
                    label: "Capabilities",
                    sub_items: capabilities,
                  }}
                />
              ) : link.label === "Industries" ? (
                <SubNavPopover
                  category={{
                    label: "Industries",
                    sub_items: industries,
                  }}
                />
              ) : link.label === "Contact Us" ? (
                <Link href={link.href}>
                  <span
                    className={` rounded-full border-white border-4 p-2 px-4 mt-2 ${
                      pathname === link.href
                        ? "hover:cursor-text disabled text-gray-300 border-gray-300"
                        : "hover:bg-white hover:text-black"
                    } `}>
                    {link.label}
                  </span>
                </Link>
              ) : (
                <Link href={link.href}>
                  <span
                    className={` mt-2 ${
                      pathname === link.href
                        ? "hover:cursor-text disabled text-gray-300"
                        : " "
                    } `}>
                    {link.label}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
