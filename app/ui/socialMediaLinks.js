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
    <div className="flex justify-center items-center space-x-16 lg:space-x-72 z-100 ">
      <div
        className="hover:transform hover:scale-125 transition-transform"
        onClick={() => track("Facebook link clicked")}>
        <IconLink
          href="https://www.facebook.com/mikemartinmedia"
          icon={<FaFacebook size={32} />}
          label="link to Mike Martin Media on Facebook"
          name="link to Mike Martin Media on Facebook"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform"
        onClick={() => track("Instagram link clicked")}>
        <IconLink
          href="https://www.instagram.com/mikemartinmedia"
          icon={<FaInstagram size={32} />}
          label="link to Mike Martin Media on Instagram"
          name="link to Mike Martin Media on Instagram"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform"
        onClick={() => track("LinkedIn link clicked")}>
        <IconLink
          href="https://www.linkedin.com/company/mike-martin-media/"
          icon={<FaLinkedin size={32} />}
          label="link to Mike Martin Media on LinkedIn"
          name="link to Mike Martin Media on LinkedIn"
        />
      </div>
      <div
        className="hover:transform hover:scale-125 transition-transform"
        onClick={() => track("YouTube link clicked")}>
        <IconLink
          href="https://www.youtube.com/channel/UC9YeMwSvCRKJBGeIoi1n97Q"
          icon={<FaYoutube size={32} />}
          label="link to Mike Martin Media on YouTube"
          name="link to Mike Martin Media on YouTube"
        />
      </div>
    </div>
  );
}
