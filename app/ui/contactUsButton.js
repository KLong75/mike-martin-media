"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import from next
import Link from "next/link";
// import Image from "next/image";
// import components
import Image from "./image";

export default function ContactUsButton() {
  return (
    <div className="bg-black hover:transform hover:scale-105 transition-transform text-white font-bold py-2 px-4 rounded-full">
      <Link href="/contact" onClick={() => track("Contact us link clicked")}>
        <div className="flex justify-center items-center">
          <span className="text-xl md:text-2xl">Contact</span>
          <div
            className="flex justify-center items-center w-14 md:w-16 ml-2 h-auto contact-us-button-logo-container"
          >
            <Image
              src="/branding/mmm_logo_white.png"
              width={294}
              height={95}
              alt="MMM logo"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
