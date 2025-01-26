"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import Image from "next/image";
// import components
import OurCapabilitiesList from "./ourCapabilitiesList";
import IndustriesList from "./industriesList";
import Image from "./image";
import ContactInfo from "./contactInfo";
import NewsletterSignupButton from "./newsletterSignupButton";
// import from next
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <p className="text-center mt-12 font-bold text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl tracking-tight">
        CONTACT US TODAY TO WORK ON YOUR PROJECT TOGETHER TOMORROW.
      </p>
      <div className="flex grid grid-cols-1 lg:grid-cols-3 mt-6 md:mt-28 justify-center">
        <div className="flex justify-center">
          <ContactInfo />
        </div>
        <div className="flex justify-center mt-6 md:mt-2 mr-[2rem]">
          <OurCapabilitiesList />
        </div>
        <div className="flex justify-center mt-10 md:mt-2 mr-[2rem]">
          <IndustriesList />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-2 mt-4 -mb-4 sm:mb- md:mb-0">
        <NewsletterSignupButton />
        <div>
          <span className="text-xs mx-2">
            <Link href="/privacy-policy" className="underline">
              Privacy Policy{" "}
            </Link>
          </span>
          <span className="text-xs mx-2">
            <Link href="/cookie-policy" className="underline">
              Cookie Policy
            </Link>
          </span>
        </div>
        <div>
          <span className="text-xs ">©2025 Mike Martin Media</span>
        </div>
        <a
          className="underline"
          href="https://www.rhythmcodestudio.tech/"
          target="_blank"
          rel="noopener noreferrer">
          <span
            className="text-xs"
            onClick={() => track("Rhythm Code Studio link clicked")}>
            Website by Rhythm Code Studio
          </span>
        </a>
      </div>
      <div className="flex md:hidden justify-center items-center w-full">
        <Image
          src="/branding/mmm_line_logo_white.png"
          height={60}
          width={1140}
          alt=""
        />
      </div>
    </footer>
  );
}
