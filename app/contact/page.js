// import from next
import Image from "next/image";
// import components
import ContactForm from "../ui/contactForm";
import ContactInfo from "../ui/contactInfo";
import SocialMediaLinks from "../ui/socialMediaLinks";

export const metadata = {
  title: "Page 4",
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
    </main>
  );
}
