// import from next
import Image from "next/image";
// import data
import { weTextBlockData } from "../lib/data";
// import components
import ContactUsButton from "../ui/contactUsButton";
import WeTextBlock from "../ui/weTextBlock";
import MeetTheTeamButton from "../ui/meetTheTeamButton";
// import TeamGallery from "../ui/teamGallery";

export default function Page() {
  return (
    <main>
      <h2 className="text-center font-bold text-4xl mt-4">About MMM</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:p-16">
        <div className="flex flex-col justify-center items-center h-full p-6">
          <div className=" lg:h-3/4 ">
            <p className="text-left lg:text-2xl w-full shadow-2xl p-6">
              For over 15 years, MMM has combined the latest technology with the
              best in-house talent to create impactful videos for organizations
              all over the United States and the world. We partner with
              corporations, medical and educational institutions, and nonprofit
              organizations to bring their vision to life. Our expertise
              provides a seamless production experience that you probably didn’t
              know could exist. We produce the quality work and client
              experience that you need along with a valuable partnership that
              will bring growth and success.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center p-6">
          <div className="mb-6 w-full flex justify-center lg:w-3/4">
            <Image
              src="/images/aboutPage/mike-van.jpg"
              width={2048}
              height={1363}
              alt="Mike in van with camera"
             
            />
          </div>
          <div className="w-full flex justify-center lg:w-1/2 ">
            <Image
              src="/images/aboutPage/mike-standing-camera.jpg"
              width={1152}
              height={2048}
              alt="Mike standing with camera"
            />
          </div>
        </div>
      

      </div>
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          {weTextBlockData.map((block) => (
            <WeTextBlock
              key={block.headline}
              headline={block.headline}
              text={block.text}
            />
          ))}
        </div>
      </section>
      {/* <div className="w-full">
        <MMMLineLogoBlack />
      </div> */}
      <div className="flex justify-center items-center mb-4 p-6">
        <ContactUsButton />
      </div>
      <div className="flex justify-center items-center mb-4 p-6">
        <MeetTheTeamButton />
      </div>
      {/* <section>
        <div>
          <div className="flex justify-center items-center">
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
          <TeamGallery />
        </div>
      </section> */}
    </main>
  );
}
