// import from next
import Image from "next/image";

export default function TeamMemberCard({ name, role, about, image_src }) {
  return (
    <div className="text-center rounded-xl bg-gray-500 p-2 shadow-sm">
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
        <div className="w-48 h-64 sm:w-48 sm:h-64 md:w-64 md:h-96 lg:w-72 lg:h-96">
        <Image
          className="object-cover"
          src={image_src}
          alt={name}
          width={900}
          height={1200}
        />
        </div>
      </div>

      <div className=" ">
        <p className="rounded-xl bg-white  text-center overflow-wrap break-words m-2 font-medium">
          {about}
        </p>
      </div>
    </div>
  );
}
