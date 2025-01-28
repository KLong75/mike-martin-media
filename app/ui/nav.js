// "use client";
// // import from react
// import { useState } from "react";
// //  import from next
// import Link from "next/link";
// // import Image from "next/image";
// import { usePathname } from "next/navigation";
// // import from headlessui
// import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
// // import icons
// import { MdDehaze } from "react-icons/md";
// import { HiX } from "react-icons/hi";
// // import components
// import Image from "./image";
// import SubNavMenu from "./subNavMenu";

// const navLinks = [
//   {
//     href: "/about",
//     label: "About",
//   },
//   {
//     href: "/our-work",
//     label: "Our Work",
//   },
//   {
//     href: "",
//     label: "Capabilities",
//   },
//   {
//     href: "",
//     label: "Industries",
//   },
//   {
//     href: "/blog",
//     label: "Blog",
//   },
//   {
//     href: "/careers",
//     label: "Careers",
//   },
//   {
//     href: "/contact",
//     label: "Contact Us",
//   },
// ];

// const capabilities = [
//   {
//     href: "",
//     label: "Video Editing",
//   },
//   {
//     href: "",
//     label: "Video Production",
//   },
//   {
//     href: "/our-work/drone",
//     label: "Drone",
//   },
//   {
//     href: "/our-work/livestreaming",
//     label: "Live Streaming",
//   },
//   {
//     href: "/our-work/animation-motion-graphics",
//     label: "Animation and Motion Graphics",
//   },
//   {
//     href: "/our-work/photography",
//     label: "Photography",
//   },
// ];

// const industries = [
//   {
//     href: "",
//     label: "Corporate",
//   },
//   {
//     href: "",
//     label: "Education",
//   },
//   {
//     href: "",
//     label: "Medical",
//   },
//   {
//     href: "",
//     label: "Nonprofit",
//   },
// ];

// const handleNavButtonClick = (label) => {
//   alert(`${label} clicked`);
// };

// export default function Nav() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
//   const [industriesOpen, setIndustriesOpen] = useState(false);
//   const pathname = usePathname();
//   const openMenu = () => setMenuOpen(true);
//   const openCapabilities = () => setCapabilitiesOpen(true);
//   const openIndustries = () => setIndustriesOpen(true);

//   return (
//     <nav className="flex p-4 z-40">
//       {/* Mobile Nav Menu */}
//       <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
//         <DialogBackdrop className="fixed inset-0 bg-black" />
//         <DialogPanel className="fixed inset-0 z-10">
//           <div className="flex justify-center items-center h-full">
//             <div className="relative text-white bg:black w-full h-full flex flex-col justify-center items-center">
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 className="absolute top-0 right-0 mt-10 mr-7">
//                 <HiX size={28} />
//               </button>
//               <div className="mb-6 w-40 h-auto">
//                 <Link href="/" aria-label="Mike Martin Media - Home">
//                   <Image
//                     src="/branding/mmm_logo_white.png"
//                     width={294}
//                     height={95}
//                     alt="MMM logo"
//                     priority
//                     as="image"
//                     onClick={() => setMenuOpen(false)}
//                   />
//                 </Link>
//               </div>
//               {/* Nav Links */}
//               <ul className="space-y-4 text-xl">
//                 {navLinks.map((link) => (
//                   <li
//                     key={link.label}
//                     className={`font-bold text-center w-full p-2 ${
//                       pathname === link.href ? "hidden" : ""
//                     }`}>
//                     <Link href={link.href}>
//                       <div
//                         className="flex flex-col items-center justify-center cursor-pointer"
//                         onClick={() => setMenuOpen(false)}>
//                         {link.icon}
//                         <span>{link.label}</span>
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//       {/* Mobile Menu Button*/}
//       <div className=" mt-2 -mr-2 lg:hidden">
//         <button onClick={openMenu}>
//           <MdDehaze size={28} aria-label="Open menu" />
//         </button>
//       </div>
//     {/* Desktop Nav Menu */}
//         <div className={`flex ${menuOpen ? "" : "hidden lg:flex"} w-full`}>
//           <ul className="flex flex-row w-full space-x-8 justify-center">
//             {navLinks.map((link) => (
//           <li
//             key={link.label}
//             className={`flex flex-col items-center justify-center font-bold text-lg 3xl:text-xl ${
//               pathname === link.href
//             ? ""
//             : "hover:scale-105 hover:transform transition-transform"
//             }`}>
//             {link.label === "Capabilities" || link.label === "Industries" ? (
//               <>
//             <button
//               className=""
//               onClick={() => {
//                 if (link.label === "Capabilities") {
//               setCapabilitiesOpen(!capabilitiesOpen);
//               setIndustriesOpen(false);
//                 } else if (link.label === "Industries") {
//               setIndustriesOpen(!industriesOpen);
//               setCapabilitiesOpen(false);
//                 }
//               }}>
//               {link.label}
//             </button>
//               </>
//             ) : (
//               <Link href={link.href}>
//             <span
//             onClick={() => setCapabilitiesOpen(false) || setIndustriesOpen(false)}
//               className={` mt-2 ${
//                 pathname === link.href
//               ? "hover:cursor-text disabled text-gray-300"
//               : " "
//               } `}>
//               {link.label}
//             </span>
//               </Link>
//             )}
//           </li>
//             ))}
//           </ul>
//           {/* Capabilities Submenu */}
//         {capabilitiesOpen && (
//           <div 
//             className="absolute top-20 z-50"
//           >
//           <SubNavMenu subMenu={capabilities} />
//           </div>
//         )}
//         {/* Industries Submenu */}
//         {industriesOpen && (
//           <div
//             className="absolute top-20 z-50"
//           >
//           <SubNavMenu subMenu={industries} />
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
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
import Image from "./image";
import SubNavMenu from "./subNavMenu";
import SubNavMenuMobile from "./subNavMenuMobile";
// import data
import { capabilities } from "../lib/capabilities";
import { industries } from "../lib/industries";

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
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [capabilitiesOpenMobile, setCapabilitiesOpenMobile] = useState(false);
  const [industriesOpenMobile, setIndustriesOpenMobile] = useState(false);
  const [submenuPosition, setSubmenuPosition] = useState({ left: 0 });
  const pathname = usePathname();
  const openMenu = () => setMenuOpen(true);
  const openCapabilities = () => setCapabilitiesOpen(true);
  const openIndustries = () => setIndustriesOpen(true);
  const openCapabilitiesMobile = () => setCapabilitiesOpenMobile(true);
  const openIndustriesMobile = () => setIndustriesOpenMobile(true);

  const capabilitiesRef = useRef(null);
  const industriesRef = useRef(null);

  const closeSubMenu = () => {
    setCapabilitiesOpen(false);
    setIndustriesOpen(false);
  };

  const closeSubMenuMobile = () => {
    setCapabilitiesOpenMobile(false);
    setIndustriesOpenMobile(false);
  };

  useEffect(() => {
    if (capabilitiesOpen && capabilitiesRef.current) {
      const rect = capabilitiesRef.current.getBoundingClientRect();
      setSubmenuPosition({ left: rect.left + rect.width / 2 });
    } else if (industriesOpen && industriesRef.current) {
      const rect = industriesRef.current.getBoundingClientRect();
      setSubmenuPosition({ left: rect.left + rect.width / 2 });
    }
  }, [capabilitiesOpen, industriesOpen]);

  return (
    <nav className="flex p-4 z-40">
      {/* Mobile Nav Menu */}
      <Dialog open={menuOpen} onClose={() => setMenuOpen(false)}>
        <DialogBackdrop className="fixed inset-0 bg-black" />
        <DialogPanel className="fixed inset-0 z-10">
          <div className="flex justify-center items-center h-full">
            <div className="relative text-white bg:black w-full h-full flex flex-col justify-center items-center">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-0 right-0 mt-10 mr-7">
                <HiX size={28} />
              </button>
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
                    key={link.label}
                    className={`font-bold text-center w-full p-2 ${
                      pathname === link.href ? "hidden" : ""
                    }`}>
                    {link.label === "Capabilities" || link.label === "Industries" ? (
                      <button
                        ref={link.label === "Capabilities" ? capabilitiesRef : industriesRef}
                        className="cursor-pointer"
                        onClick={() => {
                          if (link.label === "Capabilities") {
                            setCapabilitiesOpenMobile(!capabilitiesOpenMobile);
                            setIndustriesOpenMobile(false);
                          } else if (link.label === "Industries") {
                            setIndustriesOpenMobile(!industriesOpenMobile);
                            setCapabilitiesOpenMobile(false);
                          }
                        }}>
                        {link.label}
                      </button>
                    ) : (
                      <Link href={link.href}>
                        <div
                          className="cursor-pointer"
                          onClick={() => setMenuOpen(false)}>
                          {link.icon}
                          <span>{link.label}</span>
                        </div>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {/* Capabilities Submenu Mobile */}
              {capabilitiesOpenMobile && (
                <div className="absolute bottom-40 z-50">
                  <SubNavMenuMobile 
                    subMenu={capabilities} 
                    closeSubMenu={closeSubMenuMobile} 
                    setMenuOpen={setMenuOpen} 
                  />
                </div>
              )}
              {/* Industries Submenu Mobile */}
              {industriesOpenMobile && (
                <div className="absolute bottom-40 z-50">
                  <SubNavMenuMobile 
                    subMenu={industries} 
                    closeSubMenu={closeSubMenuMobile}
                    setMenuOpen={setMenuOpen}
                />
                </div>
              )}
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
      <div className={`flex ${menuOpen ? "" : "hidden lg:flex"} w-full`}>
      <ul className="flex flex-row space-x-6 2xl:space-x-12">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={`flex flex-col items-center justify-center font-bold whitespace-nowrap xl:text-lg 3xl:text-2xl ${
                pathname === link.href
                  ? ""
                  : "hover:scale-105 hover:transform transition-transform"
              }`}>
              {link.label === "Capabilities" || link.label === "Industries" ? (
                <button
                  ref={link.label === "Capabilities" ? capabilitiesRef : industriesRef}
                  className={`${
                    pathname === link.href
                      ? "hover:cursor-text disabled text-gray-300"
                      : " "
                  } `}
                  onClick={() => {
                    if (link.label === "Capabilities") {
                      setCapabilitiesOpen(!capabilitiesOpen);
                      setIndustriesOpen(false);
                    } else if (link.label === "Industries") {
                      setIndustriesOpen(!industriesOpen);
                      setCapabilitiesOpen(false);
                    }
                  }}>
                  {link.label}
                </button>
              ) : link.label === "Contact Us" ? (
                <Link href={link.href}>
                  <span
                    onClick={() => setCapabilitiesOpen(false) || setIndustriesOpen(false)}
                    className={`hover:bg-white hover:text-black rounded-full border-4 p-2 px-4 mt-2 ${
                      pathname === link.href
                        ? "hover:cursor-text disabled text-gray-300"
                        : " "
                    } `}>
                    {link.label}
                  </span>
                </Link>
              ) : (
                <Link href={link.href}>
                  <span
                    onClick={() => setCapabilitiesOpen(false) || setIndustriesOpen(false)}
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

        {/* Capabilities Submenu */}
        {capabilitiesOpen && (
          <div
            className="absolute top-20 z-50 transform -translate-x-1/2"
            style={{ left: submenuPosition.left }}
          >
            <SubNavMenu subMenu={capabilities} closeSubMenu={closeSubMenu}/>
          </div>
        )}
        {/* Industries Submenu */}
        {industriesOpen && (
          <div
            className="absolute top-20 z-50 transform -translate-x-1/2"
            style={{ left: submenuPosition.left }}
          >
            <SubNavMenu subMenu={industries} closeSubMenu={closeSubMenu}/>
          </div>
        )}
      </div>
    </nav>
  );
};