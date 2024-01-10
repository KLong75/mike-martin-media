import Image from "next/image";
import SocialMediaLinks from "./socialMediaLinks";

export default function ContactInfo() {
  return (
    <div className="  justify-items-center">
      <div className="flex flex-col text-center space-y-2 m-2">      
        <span className="text-xl">Mike Martin Media</span>
        <span className="">3333 Washington Avenue, Suite 201</span>
        <span className="">St. Louis, MO 63103</span>
        <span className="">636-212-0978</span>
        <span className="">mike@mikemartinmedia.com</span>
      </div>
    </div>
  );
}
