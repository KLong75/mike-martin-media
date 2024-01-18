// import from next
import Image from "next/image";
// import teamData
import { teamData } from "../lib/data.js";
// import components
import TeamMemberCard from "./teamMemberCard";
import TextSegment from "./textSegment.js";

export default function TeamGallery() {
  // console.log(teamData);
  return (
    <div className="">
      {/* <div className="flex justify-center items-center mt-10 mb-10">
        <div className="w-24 h-8 mx-2 mb-1">
          <Image
            src="/branding/mmm_black.png"
            width={294}
            height={95}
            alt="company logo"
          />
        </div>
        <h2 className="text-4xl font-bold -ml-2">eet The Team</h2>
      </div> */}
      {/* <div className="flex justify-center items-center ">
      <p className="text-center w-3/4">Our team brings decades of combined experience from the broadcast and production industries.  We are a tight-knit team, and we keep our work in-house. We work hard, play hard, and spend a lot of time laughing.
      </p>
    </div> */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-12 mt-4">
        {teamData.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            about={member.about}
            image_src={member.image_src}
          />
        ))}
      </div>
    </div>
  );
}
