// import from next
import Image from "next/image";
// import components
import ContactForm from "../ui/contactForm";
import ContactInfo from "../ui/contactInfo";
import SocialMediaLinks from "../ui/socialMediaLinks";
import IconLink from "../ui/iconLink";
// import icons
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import InstagramWidget from "../ui/instagramWidget";
import MMMInstaLogo from "../ui/mmmInstaLogo";

export const metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <main className=" flex-1">
      <div className="flex justify-center items-center mt-10 mb-2 p-2">
        <h2 className="text-4xl font-bold mr-2">Contact</h2>
        <div className="flex justify-center items-center w-24 h-8 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 mb-8">
        <ContactInfo />
      </div>

      <div className="flex justify-center items-center mt-4  z-50">
        <SocialMediaLinks />
      </div>
      
        <div className="flex justify-center items-center -mt-8">
          <ContactForm />
        </div>
  
        <div className="mb-24 w-full h-auto">
        <InstagramWidget />
        </div>
        {/* <div className="flex justify-center items-center"> */}
        {/* <div className="grid grid-cols-1 -mt-8">
          <div className="flex flex-col text-center">
           
            <div className="grid grid-cols-1 gap-6">
           
              <h2 className="text-xl font-bold">Mike Martin Media</h2>
              <div className="group hover:transform hover:scale-110 transition-transform ">
                <div className="flex flex-col items-center">
                  <IconLink
                    href="tel:636-212-0978"
                    icon={<FaPhone size={24} />}
                    label="call Mike Martin Media"
                  />
                  <a
                    href="tel:636-212-0978"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="call Mike Martin Media"
                    className="mt-">
                    <span>636-212-0978</span>
                  </a>
                </div>
              </div>
             
              <div className="group hover:transform hover:scale-110 transition-transform ">
                <div className="flex flex-col items-center">
                  <IconLink
                    href="https://maps.app.goo.gl/Uptcidd5RbhV8Ke57"
                    icon={<FaLocationDot size={24} />}
                    label="link to Mike Martin Media on Google Maps"
                  />
                  <a
                    href="https://maps.app.goo.gl/Uptcidd5RbhV8Ke57"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to Mike Martin Media on Google Maps"
                    className="mt-">
                    <span>
                      3333 Washington Avenue, Suite 201
                      <br />
                      St. Louis, MO 63103
                    </span>
                  </a>
                </div>
              </div>
             
              <div className="group hover:transform hover:scale-110 transition-transform ">
                <div className="flex flex-col items-center">
                  <IconLink
                    href="mailto:mike@mikemartinmedia.com"
                    icon={<FaEnvelope size={24} />}
                    label="email Mike Martin Media"
                  />
                  <a
                    href="mailto:mike@mikemartinmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="email Mike Martin Media"
                    className="mt-">
                    <span>mike@mikemartinmedia.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-2 p-6">
              <SocialMediaLinks />
            </div>
          </div>
        </div> */}
     
      {/* </div> */}
    </main>
  );
}
