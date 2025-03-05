"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import components
import Image from "./image";
import SocialMediaLinks from "./socialMediaLinks";
import NewsletterSignupButton from "./newsletterSignupButton";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center md:justify-start w-full">
        <Image
          src="/branding/mmm-logo-white-298x96.png"
          alt="Mike Martin Media Logo"
          width={179} // 75% of 298
          height={58} // 75% of 96
          className="mb-4 md:w-[298px] md:h-[96px]"
        />
      </div>
      <div className="text-xl font-bold my-2 text-center lg:text-left">
        Mike Martin Media
      </div>

      {/* Address Section */}
      <div className=" my-2 text-center lg:text-left">
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
      <div className="my-2 text-center lg:text-left">
        <a
          href="tel:636-212-4019"
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
      <div className="my-2 flex justify-center lg:justify-start">
        <SocialMediaLinks />
      </div>
      <div className="my-2 flex justify-center lg:justify-start">
        <NewsletterSignupButton />
      </div>
    </div>
  );
}
