"use client";
// import from vercel
import { track } from "@vercel/analytics";
// import icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import IconLink from "./iconLink";

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-left items-center space-x-4 z-100 ">
      <div
        className="hover:transform hover:scale-125 transition-transform duration-500 ease-in-out"
        onClick={() => track("social media link clicked", {name: "Facebook"})}>
        <IconLink
          href="https://www.facebook.com/mikemartinmedia"
          icon={<FaFacebook size={22} />}
          label="link to Mike Martin Media on Facebook"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform duration-500 ease-in-out"
        onClick={() => track("social media link clicked", {name: "Instagram"})}>
        <IconLink
          href="https://www.instagram.com/mikemartinmedia"
          icon={<FaInstagram size={22} />}
          label="link to Mike Martin Media on Instagram"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform duration-500 ease-in-out"
        onClick={() => track("social media link clicked", {name: "LinkedIn"})}>
        <IconLink
          href="https://www.linkedin.com/company/mike-martin-media/"
          icon={<FaLinkedin size={22} />}
          label="link to Mike Martin Media on LinkedIn"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform duration-500 ease-in-out"
        onClick={() => track("social media link clicked", {name: "YouTube"})}>
        <IconLink
          href="https://www.youtube.com/channel/UC9YeMwSvCRKJBGeIoi1n97Q"
          icon={<FaYoutube size={22} />}
          label="link to Mike Martin Media on YouTube"
        />
      </div>
    </div>
  );
}
