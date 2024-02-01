// import components
import BackToOurWorkLink from "@/app/ui/backToOurWorkLink";
import MmmSiteButtonTextOnly from "@/app/ui/mmmSiteButtonTextOnly";
import TextSegment from "@/app/ui/textSegment";
import VideoGallery from "@/app/ui/videoGallery";
import MMMLineLogoBlack from "@/app/ui/mmmLineLogoBlack";

export const metadata = {
  title: "Medical Videos",
  description:
    "We promote, inform and inspire audiences with every project. From Corporate, Education, Medical and Nonprofit videos, we are your partner through every step of the process.",
};


export default function MedicalVideos() {
  return (
    <main>
    <div className="mt-3 -mb-9">
        <BackToOurWorkLink />
      </div>
      <h2 className="mt-12 text-center text-3xl md:text-4xl font-bold">Medical Content</h2>
      <section className="mt-12">
        <VideoGallery selectedCategory="Medical" />
      </section>
      <div className="mt-6">
        <TextSegment text="Contact us today to get started on your Education video project. This text can change. Here we need to invite visitors to contact MMM." />
      </div>
      <div className="flex justify-center items-center p-2 mb-6">
        <MmmSiteButtonTextOnly
          href="/contact"
          label="Contact Us"
          backgroundColor="bg-black"
          textColor="text-white"
        />
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
