// import from next
import Image from "next/image";
// import teamData
import { teamData } from "../lib/data.js";
// import components
import TeamMemberCard from "./teamMemberCard";



export default function TeamGallery() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 gap-8 justify-items-center p-12 mt-4">
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
