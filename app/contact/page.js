// import from next
import Image from "next/image";
// import components
import ContactForm from "../ui/contactForm";
import ContactInfo from "../ui/contactInfo";
import SocialMediaLinks from "../ui/socialMediaLinks";
import InstagramWidget from "../ui/instagramWidget";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import BackToHomeLink from "../ui/backToHome";
import GoogleMap from "../ui/googleMap";
// import fonts
import { dm_serif_display } from "../fonts";

export const metadata = {
  title: "Contact",
  description: "Contact Mike Martin Media",
};

export default function Page() {
  return (
    <main className=" flex-1">

      <div className="md:hidden">
        <GoogleMap/>
      </div>
      <div className="mt-2 mb-2 hidden md:block">
        <BackToHomeLink />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 ">
        <h2 className={`${dm_serif_display.className} text-3xl md:text-4xl font-bold mr-2`}>CONTACT </h2>
        <div className="flex justify-center items-center w-20 md:w-24 h-auto mb-1 ">
          <Image
            src="/branding/mmm_logo_white.png"
            width={294}
            height={95}
            alt="company logo"
            priority
            as="image"
          />
        </div>
      </div>
      {/* <div className="mt-2 mb-2 md:hidden">
        <BackToHomeLink />
      </div> */}
      <div className="flex justify-center items-center -mt-12 md:mb-8 p-12">
        <ContactInfo />
      </div>
      <div className="flex justify-center items-center md:mt-4 z-50">
        <SocialMediaLinks />
      </div>
      <div className="flex justify-center items-center -mt-8">
        <ContactForm />
      </div>

      <div className="mb-12 md:-mb-16 lg:-mb-28 w-full h-auto ">
        <InstagramWidget />
      </div>
      <div className="hidden pl-36 pr-36 md:block md:mb-16">
        <GoogleMap />
      </div>
      <div className="w-full mt-6 md:hidden">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
}

{
  /* <div className="flex justify-center items-center mt-6 -mb-6 p-2">
          <div className="flex justify-center items-center w-8 md:w-10 h-auto mb-2 md:mb-1.5">
            <ColorChangeM src="/branding/singleMBlack.png"/>
          </div>
          <h2 className="text-xl md:text-3xl font-bold mr-2 -ml-">ike</h2>
          <div className="flex justify-center items-center w-8 md:w-10 h-auto mb-2 md:mb-1.5 ">
            <ColorChangeM src="/branding/singleMBlack.png"/>
          </div>
          <h2 className="text-xl md:text-3xl font-bold mr-2 -ml-">artin</h2>
          <div className="flex justify-center items-center w-8 md:w-10 h-auto mb-2 md:mb-1.5 ">
            <ColorChangeM src="/branding/singleMBlack.png"/>
          </div>
          <h2 className="text-xl md:text-3xl font-bold mr-2">edia</h2>
        </div> */
}
