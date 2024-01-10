import Image from "next/image";
import SocialMediaLinks from "./socialMediaLinks";

export default function ContactInfo() {
  return (
    <div className="  justify-items-center">
      <div className="flex flex-col text-center space-y-2 m-2">      
        <span className="text-xl">Company Name</span>
        <span className="">123 Main Street</span>
        <span className="">City, State, Zip</span>
        <span className="">555-555-5555</span>
        <span className="">email@company.com</span>
      </div>
    </div>
  );
}
