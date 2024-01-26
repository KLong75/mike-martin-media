// import components
import ContactUsButton from "@/app/ui/contactUsButton";
import BannerVideo from "../../ui/bannerVideo";

export default function Page() {
  return (
    <main className="grid grid-cols-1 ">
      <h2 className="mt-6 lg:-mb-12 md:mt-12 text-center text-4xl font-extrabold ">
        Livestreaming
      </h2>
      <section>
        <BannerVideo
          src="https://player.vimeo.com/video/904181398?h=c0efc97d6f&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&controls=0&loop=1&background=1&title=0&muted=1&byline=0&portrait=0"
          title="MMM Livestreaming Video"
        />
      </section>
      <section className>
        <div className="flex justify-center items-center">
          <p className="text-left p-8 md:-mt-12 md:px-48 lg:-mt-24 lg:px-60 lg:mr-24 lg:ml-24">
            Wherever you are, we can help you stream to{" "}
            <span className="italic font-bold">anywhere</span>. Livestreaming is
            an invaluable resource that can catapult your organization and
            message farther. Contact us today to create a livestreaming solution
            that works for you.
          </p>
        </div>
        <div className="flex justify-center items-center p-4 ">
          <ContactUsButton />
        </div>
      </section>
      <section className=" justify-center items-center mt-2">
        <div className="flex justify-center">
          <h3 className="text-lg font-bold">Available Streaming Services</h3>
        </div>
        <div className="flex justify-center items-center -mt-12">
          <ul className="list-disc p-16 columns-1 md:columns-2">
            <li>Streaming capable on various platforms</li>
            <li>In-studio or on-site streaming</li>
            <li>Optimized for travel</li>
            <li>International streaming available</li>
            <li>Single cam or multicam</li>
            <li>Incorporate live remote guests</li>
            <li>Live and pre-recorded content</li>
            <li>Facilitate live closed captioning</li>
            <li>Prompter for speakers</li>
            <li>Confidence screens</li>
            <li>Collaboration with in-house or third party vendors</li>
            <li>Long-term livestream hosting</li>
            <li>Interactive options</li>
            <li>
              Will collaborate with your events team to ensure a smooth process
            </li>
            <li>Small to large audience size</li>
            <li>Online, in-person, and hybrid</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
