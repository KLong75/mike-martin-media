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
      <div className="absolute bottom-0 left-0 w-full h-1/8 z-50 bg-black bg-opacity-50 flex flex-col justify-center text-white p-4  group-hover:bg-opacity-100 transition-bg duration-2000 ease-in-ou ">
        <p className="font-semibold text-xl text-shadow-black-background-black">
          {name}
        </p>
        <p className="font-semibold text-xs uppercase text-shadow-black-background-black">
          {role}
        </p>
        <div className="relative mt-1 w-full">
          <div className="mt-[.5px] border-b border-white w-0 group-hover:w-full transition-all duration-2000 ease-in-out"></div>
          <div className="absolute right-[-2px] top-0 h-full w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all duration-3000 ease-in-out">
            <div className="border-b border-white transform -rotate-35 origin-bottom-right"></div>
            <div className="border-b border-white transform rotate-35 origin-top-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}