"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import Image from "next/image";
// import components
import OurCapabilitiesList from "./ourCapabilitiesList";
import IndustriesList from "./industriesList";
import Image from "./image";
import ContactInfo from "./contactInfo";
import TestimonialDisplay from "./testimonialDisplay";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";
//import data
// import { testimonials } from "../lib/testimonials";

export default function Footer() {
  const currentPath = usePathname();

  return (
    <div className="bg-black">

    {currentPath !== "/" && (
      <div className="grid grid-cols-1 bg-black p-2 lg:px-12 xl:px-28 mt-6 lg:m-16">
        <TestimonialDisplay />
      </div>
    )}
      <footer className=" bg-black text-white flex justify-center items-center w-full pt-6 lg:pt-12">
        <div className="bg-black text-white max-w-800">
          <p className="text-center px-4 font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-[2.6rem] 3xl:text-5xl tracking-tight">
            CONTACT US TODAY TO WORK ON YOUR PROJECT TOGETHER TOMORROW.
          </p>
          <div className="flex grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-6 md:mt-28 lg:mt-32 justify-center">
            <div className="flex justify-center">
              <ContactInfo />
            </div>
            <div className="flex justify-center mt-12 lg:mt-2 mr-[4rem] lg:mr-[2rem]">
              <OurCapabilitiesList />
            </div>
            
            <div className="mb-6 lg:mb-0 flex justify-center mt-10 lg:mt-2 mr-[4rem] lg:mr-[2rem]">
              <IndustriesList />
            </div>
          </div>

          <div className="flex grid grid-cols-1 lg:grid-cols-3 justify-center items-center py-2 m-4 mt-12">
            <div className="order-2 md:order-1 text-center xl:mr-auto">
              <span className="text-xs lg:text-sm">
                ©2025 Mike Martin Media
              </span>
            </div>
            <div className="order-1 md:order-2 text-center">
              <span className="text-xs lg:text-sm mx-2">
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy{" "}
                </Link>
              </span>
              <span className="text-xs lg:text-sm mx-2">
                <Link href="/cookie-policy" className="underline">
                  Cookie Policy
                </Link>
              </span>
            </div>

            <div className="order-3 text-center xl:ml-auto">
              <span
                className="text-xs lg:text-sm"
                onClick={() => track("Rhythm Code Studio link clicked")}>
                Website by{" "}
                <a
                  className="font-bold"
                  href="https://www.rhythmcodestudio.tech/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Rhythm Code Studio{" "}
                </a>
                +{" "}
                <a
                  className="font-bold"
                  href="https://seafoammedia.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Seafoam Media{" "}
                </a>
              </span>
            </div>
          </div>

          <div className="flex md:hidden justify-center items-center w-full mb-2">
            <Image
              src="/branding/line-logo-white.png"
              height={65}
              width={1440}
              alt=""
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
