// import icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import from nexrt
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center items-center space-x-6 z-100">
      <a href="https://www.facebook.com/mikemartinmedia" target="_blank" rel="noopener noreferrer" name='link to Mike Martin Media on Facebook' aria-label='link to Mike Martin Media on Facebook'>
        <FaFacebook size={36} />
      </a>
      <a href="https://www.instagram.com/mikemartinmedia" target="_blank" rel="noopener noreferrer" name='link to Mike Martin Media on Instagram' aria-label='link to Mike Martin Media on Instagram'>
        <FaInstagram size={36} />
      </a>
      <a href="https://www.linkedin.com/company/mike-martin-media/" target="_blank" rel="noopener noreferrer" name='link to Mike Martin Media on LinkedIn' aria-label='link to Mike Martin Media on LinkedIn'>
        <FaLinkedin size={36} />
      </a>
    </div>
  );
}