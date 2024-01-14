// import components
import IconLink from "./iconLink";
// import icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";

export default function ContactInfo() {
  return (
    <div className="  justify-items-center">
      <div className="flex flex-col text-center space-y-4 m-2">
        <span className="text-xl">Mike Martin Media</span>
        <div className="mt-4 mb-4 hover:transform hover:scale-110 hover:font-black focus:transform focus:scale-110">
          <a
            href="https://www.google.com/maps/place/Mike+Martin+Media,+LLC/@38.6382665,-90.2298992,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8c6735ac822fb:0x32eff35f341c030b!8m2!3d38.6382623!4d-90.2273243!16s%2Fg%2F11b6c9h53l?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            name="link to Mike Martin Media on Google Maps"
            aria-label="link to Mike Martin Media on Google Maps"
            className=" hover:font-black">
            <span>3333 Washington Avenue, Suite 201</span>
            <br />
            <span className="">St. Louis, MO 63103</span>
          </a>
          <div className="flex justify-center items-center space-x-2">
            <IconLink
              href="https://www.google.com/maps/place/Mike+Martin+Media,+LLC/@38.6382665,-90.2298992,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8c6735ac822fb:0x32eff35f341c030b!8m2!3d38.6382623!4d-90.2273243!16s%2Fg%2F11b6c9h53l?entry=ttu"
              icon={<FaLocationDot size={24} />}
              label="link to Mike Martin Media on Google Maps"
              name="link to Mike Martin Media on Google Maps"
              className=""
            />
          </div>
        </div>
        <div className="mt-4 mb-4 hover:transform hover:scale-110 hover:font-black active:transform ">
          <a
            href="tel:636-212-0978"
            target="_blank"
            rel="noopener noreferrer"
            name="call Mike Martin Media"
            aria-label="call Mike Martin Media"
            className="">
            <span className="">636-212-0978</span>
          </a>
          <div className="flex justify-center items-center space-x-2">
            <IconLink
              href="tel:636-212-0978"
              icon={<FaPhone size={24} />}
              label="call Mike Martin Media"
              name="call Mike Martin Media"
              className="hover:transform hover:scale-110 hover:font-black"
            />
          </div>
        </div>
        <div className="hover:transform hover:scale-110 hover:font-black ">
          <a
            href="mailto:mike@mikemartinmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            name="email Mike Martin Media"
            aria-label="email Mike Martin Media"
            className="hover:font-black">
            <span className="">mike@mikemartinmedia.com</span>
            </a>
            <div className="flex justify-center items-center space-x-2">
              <IconLink
                href="mailto:mike@mikemartinmedia.com"
                icon={<FaEnvelope size={24} />}
                label="email Mike Martin Media"
                name="email Mike Martin Media"
                className="hover:transform hover:scale-110 hover:font-black"
              />
            </div>
        </div>
      </div>
    </div>
  );
}
