// import components
// import Image from "../ui/image";
// import ContactForm from "../ui/contactForm";
// import ContactInfo from "../ui/contactInfo";
// import SocialMediaLinks from "../ui/socialMediaLinks";
// import InstagramWidget from "../ui/instagramWidget";
// import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
import PageHeadingBanner from "../ui/pageHeadingBanner";
import GoogleMap from "../ui/googleMap";
// import BannerVideoWithFadeEffect from "../ui/bannerVideoWithFadeEffect";
// import BannerVideoWithFadeNoLogo from "../ui/bannerVideoWithFadeNoLogo";
// import images
// import whiteMmmLogo from "../../public/branding/white-mmm-logo-294x95.png";
import ActiveCampaignContactForm from "../ui/activeCampaignContactForm";
// import NewsletterSignupButton from "../ui/newsletterSignupButton";

const contactPageOgImgUrl = "https://www.mikemartinmedia.com/images/open-graph/contact-og.png";

export const metadata = {
  title: "Contact | Mike Martin Media",
  description:
    "Contact Mike Martin Media. Contact us today to work on your project together tomorrow.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Mike Martin Media",
    description:
      "Contact Mike Martin Media. Contact us today to work on your project together tomorrow.",
    images: [
      {
        url: contactPageOgImgUrl,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    title: "Contact | Mike Martin Media",
    description:
      "Contact Mike Martin Media. Contact us today to work on your project together tomorrow.",
    images: [
      {
        url: contactPageOgImgUrl,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  
  return (
    <main className=" flex-1">
      <div className="z-10">
        <GoogleMap />
      </div>
      {/* <div className="bg-black text-white flex justify-center items-center w-full h-20 md:h-24 lg:h-28">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl font-bold mr-2 lg:mr-3">
          CONTACT{" "}
        </h1>
        <div className="flex justify-center items-center w-24 md:w-32 lg:w-40 h-auto mb-1.5 lg:mb-2.5 ">
          <Image
            src={whiteMmmLogo}
            alt="MMM"
          />
        </div>
      </div> */}

      <div className="">
        <PageHeadingBanner
          title={"Mike Martin Media"} 
          heading={"Contact Us Today to Work on Your Project Together Tomorrow"}
          text={
            "We are more than just a video production team. We are your partners. Let's work together to bring your ideas to life and turn them into something that makes a difference."
          }
        />
      </div>

      {/* <div className="flex justify-center items-center">
        <span>Contact Us</span>
      </div>  */}

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
