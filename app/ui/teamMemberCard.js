// import components
import Image from "./image";

export default function TeamMemberCard({ name, role, about, image_src }) {
 
    return (
      <div className="text-left shadow-2xl bg-white">
        <div className="flex justify-center p-8">
          <div className="w-72 h-auto">
            <Image
              className="shadow-2xl border-2 border-black"
              src={image_src}
              alt={name}
              width={284}
              height={379}
            />
          </div>
        </div>
        <div className="bg-white p-2 sm:p-4 xl:p-8 m-4 mt-0">
          <h3 className="font-bold">{name}</h3>
          <h4 className="font-bold">{role}</h4>
          <p className="text-left overflow-wrap">{about}</p>
        </div>
      </div>
    );
  }
// }
