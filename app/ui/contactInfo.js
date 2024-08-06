// import from vercel
import { track } from "@vercel/analytics";
// import icons
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

export default function ContactInfo({ m_src }) {
  return (
    <div className="justify-items-center">
      <div className="flex flex-col text-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-24 lg:gap-72 mt-12">
          {/* Phone Number Section */}
          <div className="group mt-2 md:mt-6 ">
            <a
              href="tel:636-212-0978"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="call Mike Martin Media"
              className="mt-"
              onClick={() => track("Phone link clicked")}
              >
              <div className="flex flex-col items-center hover:transform hover:scale-110 transition-transform">
                <FaPhone size={24} />
                <span>636-212-4019</span>
              </div>
            </a>
            {/* <span className="text-xs">click/tap to call</span> */}
          </div>
          {/* Address Section */}
          <div className="group mt-2 md:mt-6">
            <a
              href="https://maps.app.goo.gl/Uptcidd5RbhV8Ke57"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="link to Mike Martin Media on Google Maps"
              className="mt-"
              onClick={() => track("Google Maps link clicked")}
              >
              <div className="flex flex-col items-center hover:transform hover:scale-110 transition-transform">
                <FaLocationDot size={24} />
                <span>
                  3333 Washington Avenue, Suite 201
                  <br />
                  St. Louis, MO 63103
                </span>
              </div>
            </a>
            {/* <span className="text-xs">click/tap for directions</span> */}
          </div>
          {/* Email Section */}
          <div className="group mt-2 md:mt-6 ">
            <a
              href="mailto:mike@mikemartinmedia.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="email Mike Martin Media"
              onClick={() => track("Email link clicked")}
              >
              <div className="flex flex-col items-center hover:transform hover:scale-110 transition-transform">
                <FaEnvelope size={24} />
                <span>mike@mikemartinmedia.com</span>
              </div>
            </a>
            {/* <span className="text-xs">click/tap to email</span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
  
