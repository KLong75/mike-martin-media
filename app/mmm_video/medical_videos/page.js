import MmmSiteButton from "@/app/ui/mmmSiteButton";
import MmmSiteButtonTextOnly from "@/app/ui/mmmSiteButtonTextOnly";
import VideoGallery from "@/app/ui/videoGallery";

export default function MedicalVideos() {
  return (
    <main>
      <h2 className="mt-12 text-center text-4xl font-bold">Medical Content</h2>
      <section className="mt-12">
        <VideoGallery selectedCategory="Medical" />
      </section>
      <div className="flex justify-center items-center p-12">
      <MmmSiteButtonTextOnly
        href="/mmm_video"
        label="WATCH MORE"
        backgroundColor="bg-black"
        textColor="text-white"
        />
        </div>
    </main>
  );
}
