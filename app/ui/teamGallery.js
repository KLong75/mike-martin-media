// import teamData
import { teamData } from "../lib/data.js";
// import components
import TeamMemberCard from "./teamMemberCard";

export default function TeamGallery() {
  // console.log(teamData);
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center p-6">
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
  )
}