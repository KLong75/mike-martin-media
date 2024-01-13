// import from next
import Image from "next/image";

export default function TeamMemberCard({ name, role, about, image_src }) {
  return (
    <div className="text-center rounded-2xl bg-gray-300 p-2 shadow-xl border-4 border-black">
      <h3 className="font-bold">{name}</h3>
      <h4 className="font-bold">{role}</h4>
      
      {/* <div className="flex justify-center p-2 aspect-w-3 aspect-h-4 w-48 h-64 sm:w-48 sm:h-64 md:w-56 md:h-82 lg:w-64 lg:h-96">
        <Image
          className="object-cover"
          src={image_src}
          alt={name}
          width={900}
          height={1200}
        />
      </div> */}
      <div className="flex justify-center p-2">
        <div className="w-48 h-64 sm:w-48 sm:h-64 md:w-64 md:h-96 lg:w-72 lg:h-96 rounded-2xl">
        <Image
          className="object-cover rounded-2xl border-2 border-gray-800"
          src={image_src}
          alt={name}
          width={900}
          height={1200}
        />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-1 border-2 border-gray-800">
        <p className="text-center overflow-wrap font-medium">
          {about}
        </p>
      </div>
    </div>
  );
}
