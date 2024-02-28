// import icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import IconLink from "./iconLink";


export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center items-center space-x-16 lg:space-x-72 z-100 ">
      <div className="hover:transform hover:scale-105 transition-transform">
      <IconLink
        href="https://www.facebook.com/mikemartinmedia"
        icon={<FaFacebook size={36} />}
        label="link to Mike Martin Media on Facebook"
        name="link to Mike Martin Media on Facebook"
        className="hover:transform hover:scale-105 hover:font-black"
      />
      </div>
      <div className="hover:transform hover:scale-105 transition-transform">
      <IconLink
        href="https://www.instagram.com/mikemartinmedia"
        icon={<FaInstagram size={36} />}
        label="link to Mike Martin Media on Instagram"
        name="link to Mike Martin Media on Instagram"
      />
      </div>
      <div className="hover:transform hover:scale-105 transition-transform">
      <IconLink
        href="https://www.linkedin.com/company/mike-martin-media/"
        icon={<FaLinkedin size={36} />}
        label="link to Mike Martin Media on LinkedIn"
        name="link to Mike Martin Media on LinkedIn"
      />
      </div>
    </div>
  );
}