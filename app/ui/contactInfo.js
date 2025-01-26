"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import components
import Image from "./image";
import SocialMediaLinks from "./socialMediaLinks";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <Image
        src="/branding/mmm_logo_white.png"
        alt="MMM logo"
        width={294}
        height={95}
        className="mb-4 w-"
      />
      <div className="text-xl font-bold my-2 text-center md:text-left">Mike Martin Media</div>

      {/* Address Section */}
      <div className=" my-2 text-center md:text-left">
        <a
          href="https://maps.app.goo.gl/Uptcidd5RbhV8Ke57"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to Mike Martin Media on Google Maps. 3333 Washington Avenue, Suite 201, St. Louis, MO 63103"
          className="mt-"
          onClick={() => track("Google Maps link clicked")}>
          <div className="flex flex-col hover:transform hover:scale-110 transition-transform">
            <span className="">
              3333 Washington Avenue, Suite 201
              <br />
              St. Louis, MO 63103
            </span>
          </div>
        </a>
      </div>
      {/* Phone Number Section */}
      <div className="my-2 text-center md:text-left">
        <a
          href="tel:636-212-0978"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Call Mike Martin Media at 636-212-4019"
          className="mt-"
          onClick={() => track("Phone link clicked")}>
          <div className="flex flex-col hover:transform hover:scale-110 transition-transform">
            <span>636-212-4019</span>
          </div>
        </a>
      </div>
      <div className="my-2 flex justify-center md:justify-start">
        <SocialMediaLinks />
      </div>
    </div>
  );
}
