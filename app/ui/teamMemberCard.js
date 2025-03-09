"use client";
// import components
import Image from "./image";

export default function TeamMemberCard({ name, role, about, image_src }) {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className="relative w-full h-full overflow-hidden cursor-pointer group"
      onClick={handleClick}>
      <Image
        className="shadow-2xl w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-110 ease-in-out"
        src={image_src}
        alt={name}
        width={900}
        height={1200}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/8 z-50 bg-black bg-opacity-50 flex flex-col justify-center text-white p-4  group-hover:bg-opacity-100 transition-bg duration-2000 ease-in-out .text-shadow-black-background-black">
        <p className="font-semibold text-xl">{name}</p>
        <p className="font-semibold text-xs uppercase">{role}</p>
      </div>
    </div>
  );
}