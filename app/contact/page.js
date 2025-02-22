// import components
import Image from "../ui/image";
// import ContactForm from "../ui/contactForm";
// import ContactInfo from "../ui/contactInfo";
// import SocialMediaLinks from "../ui/socialMediaLinks";
import InstagramWidget from "../ui/instagramWidget";
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import GoogleMap from "../ui/googleMap";
// import images
import whiteMmmLogo from "../../public/branding/white-mmm-logo-294x95.png";
import ActiveCampaignContactForm from "../ui/activeCampaignContactForm";
import NewsletterSignupButton from "../ui/newsletterSignupButton";

export const metadata = {
  title: "Contact",
  description:
    "Contact information for Mike Martin Media. Email. Phone. Address. Social Media. Contact Form. Google Map. Instagram Widget. Mike Martin Media. Video Production and Creative Services.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  
  return (
    <main className=" flex-1">
      <div className="z-10">
        <GoogleMap />
      </div>
      <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-bold mr-2 lg:mr-3">
          CONTACT{" "}
        </h1>
        <div className="flex justify-center items-center w-24 md:w-32 lg:w-40 h-auto mb-1.5 lg:mb-2.5 ">
          <Image
            src={whiteMmmLogo}
            alt="MMM"
          />
        </div>
      </div>

      {/* <div className="md:text-xl flex justify-center items-center -mt-20 md:mb-8 p-12">
        <ContactInfo />
      </div> */}
      {/* <div className="flex justify-center items-center md:mt-4 z-50">
        <SocialMediaLinks />
      </div> */}
      {/* <div className="flex justify-center items-center">
        <ContactForm />
      </div> */}

      <ActiveCampaignContactForm />
      {/* <div className="mb-12 md:-mb-16 lg:-mb-28 w-full h-auto ">
        <InstagramWidget />
      </div>
      <div className="w-full mt-6 md:hidden">
        <MMMLineLogoBlack />
      </div> */}
    </main>
  );
}
