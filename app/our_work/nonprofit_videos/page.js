// import components
import MmmSiteButtonTextOnly from "@/app/ui/mmmSiteButtonTextOnly";
import VideoGallery from "@/app/ui/videoGallery";
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import TextSegment from "@/app/ui/textSegment";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";
import ContactUsButton from "@/app/ui/contactUsButton";

export const metadata = {
  title: "Nonprofit Videos",
  description:
    "We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process.",
};


export default function NonprofitContent() {
  return (
    <main>
    <div className="mt-3 -mb-9">
        <BackToOurWorkLink />
      </div>
      <h2 className="mt-12 text-center text-4xl font-bold">Nonprofit Videos</h2>
      <section className="mt-12">
        <VideoGallery selectedCategory="Nonprofit" />
      </section>
      <div className="mt-6">
        <TextSegment text="Contact us today to get started on your Nonprofit video project. This text can change. Here we need to invite visitors to contact MMM." />
      </div>
      <div className="flex justify-center items-center p-2 mb-6">
       <ContactUsButton />
      </div>
      <div className="mb-3 ">
        <BackToOurWorkLink />
      </div>
      <div className="w-full">
        <MMMLineLogoBlack />
      </div>
    </main>
  );
} 