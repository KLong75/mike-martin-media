import IconLink from "./iconLink";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function ContactInfo({ m_src }) {
  return (
    <div className="justify-items-center">
      <div className="flex flex-col text-center space-y-4">
        {/* <div className="flex justify-center items-center mt-10 p-2">
          <div className="flex justify-center items-center w-8 h-auto mb-2.5 ">
            <ColorChangeM src={m_src} />
          </div>
          <h2 className="text-xl font-bold mr-2 -ml-">ike</h2>
          <div className="flex justify-center items-center w-8 h-auto mb-2.5">
            <ColorChangeM src={m_src} />
          </div>
          <h2 className="text-xl font-bold mr-2 -ml-">artin</h2>
          <div className="flex justify-center items-center w-8 h-auto mb-2.5">
            <ColorChangeM src={m_src} />
          </div>
          <h2 className="text-xl font-bold mr-2">edia</h2>
        </div> */}
        {/* <h2 className=" font-bold">Mike Martin Media</h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 lg:gap-72 mt-12">
          {/* Phone Number Section */}
          <div className="group mt-2 md:mt-6 ">
            <a
              href="tel:636-212-0978"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="call Mike Martin Media"
              className="mt-">
              <div className="flex flex-col items-center hover:transform hover:scale-110 transition-transform">
                {/* <IconLink
                href="tel:636-212-0978"
                icon={<FaPhone size={24} />}
                label="call Mike Martin Media"
              /> */}
                <FaPhone size={24} />
                <span>636-212-0978</span>
              </div>
            </a>
            <span className="text-xs">(click/tap to call)</span>
          </div>
          {/* Address Section */}
          <div className="group mt-2 md:mt-6">
            <a
              href="https://maps.app.goo.gl/Uptcidd5RbhV8Ke57"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to Mike Martin Media on Google Maps"
              className="mt-">
              <div className="flex flex-col items-center  hover:transform hover:scale-110 transition-transform">
              
                <FaLocationDot size={24} />

                <span>
                  3333 Washington Avenue, Suite 201
                  <br />
                  St. Louis, MO 63103
                </span>
                
              </div>
            </a>
            <span className="text-xs">(click/tap for directions)</span>
          </div>
          {/* Email Section */}
          <div className="group  mt-2 md:mt-6 ">
            <a
              href="mailto:mike@mikemartinmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email Mike Martin Media">
              <div className="flex flex-col items-center  hover:transform hover:scale-110 transition-transform">
                <FaEnvelope size={24} />
                <span>mike@mikemartinmedia.com</span>
              </div>
            </a>
            <span className="text-xs">(click/tap to email)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
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
              <span>St. Louis, MO 63103</span>
            </a>
            <div className="flex justify-center items-center space-x-2">
              <IconLink
                href="https://www.google.com/maps/place/Mike+Martin+Media,+LLC/@38.6382665,-90.2298992,17z/data=!3m1!4b1!4m6!3m5!1s0x87d8c6735ac822fb:0x32eff35f341c030b!8m2!3d38.6382623!4d-90.2273243!16s%2Fg%2F11b6c9h53l?entry=ttu"
                icon={<FaLocationDot size={24} />}
                label="link to Mike Martin Media on Google Maps"
                name="link to Mike Martin Media on Google Maps"
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
              >
              <span>636-212-0978</span>
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
              <span>mike@mikemartinmedia.com</span>
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
        </div> */
}
