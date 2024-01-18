// import from next
import Image from "next/image";
// import components
import ContactUsButton from "../ui/contactUsButton";
import TeamGallery from "../ui/teamGallery";
import TextSegment from "../ui/textSegment.js";

export default function Page() {
  return (
    <main>
    <div className="flex justify-center items-center mt-10 mb-4">
        <div className="w-24 h-8 mx-2 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold -ml-2">eet The Team</h2>
      </div>
      <TextSegment
        text="Our team brings decades of combined experience from the broadcast and production industries.  We are a tight-knit team, and we keep our work in-house. We work hard, play hard, and spend a lot of time laughing."
      />
    <div className="flex flex-col items-center justify-center mt-4 -mb-2">
      <ContactUsButton />
      </div>
      <div>
        <TeamGallery />
      </div>
      
    </main>
  );
}
