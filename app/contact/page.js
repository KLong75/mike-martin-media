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
// import ActiveCampaignContactForm from "../ui/activeCampaignContactForm";
// import NewsletterSignupButton from "../ui/newsletterSignupButton";
import ContactFormWrapper from "../ui/contactFormWrapper.js";

const contactPageOgImgUrl =
  "https://www.mikemartinmedia.com/images/open-graph/contact-og.png";

export const metadata = {
  title: "Contact | Mike Martin Media",
  description:
    "Contact Mike Martin Media. Contact us today to work on your project together tomorrow.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mikemartinmedia.com/contact",
    siteName: "Mike Martin Media: St. Louis Video Production Company",
    title: "Contact | Mike Martin Media",
    description:
      "Contact Mike Martin Media. Contact us today to work on your project together tomorrow.",
    images: [
      {
        url: contactPageOgImgUrl,
        width: 1200,
        height: 630,
      },
      // {
      //   url: ,
      //   width: 1920,
      //   height: 1080,
      //   alt: "About Mike Martin Media",
      // },
      // {
      //   url: ,
      //   width: 1080,
      //   height: 1080,
      // },
      // {
      //   url: ,
      //   width: 600,
      //   height: 314,
      // }
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
      // {
      //   url: ,
      //   width: 800,
      //   height: 418,
      // },
    ],
  },
};

export default function Page() {
  return (
    <div className=" flex-1">
      <div className="z-10">
        <GoogleMap />
      </div>

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
        <ContactForm />
      </div> */}

      {/* <ActiveCampaignContactForm /> */}
      {/* <div>
        <ContactFormWrapper />
      </div> */}
    </div>
  );
}
