// import icons
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
// import from nexrt
import Link from "next/link";

export default function SocialMediaLinks() {
  return (
    <div className="flex justify-center items-center space-x-6">
      <Link href="https://www.facebook.com/" target="_blank">
        <FaFacebook size={36} />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <FaInstagram size={36} />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <FaXTwitter size={36} />
      </Link>
      <Link href="https://www.linkedin.com/" target="_blank">
        <FaLinkedin size={36} />
      </Link>
    </div>
  );
}