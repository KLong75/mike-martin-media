// import from next
import Image from "next/image";
// import from react
import React from "react";
// import components
import TextSegment from "./textSegment";

export default function WorkCategorySection({
  categoryName,
  categoryText,
  categoryIcon,
}) {
  const iconSize = 36;

  return (
    <>
    <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform">
      <div>
        {React.cloneElement(categoryIcon, { size: iconSize })}
      </div>
      <span className="text-2xl md:text-3xl font-bold underline"> {categoryName} </span>
    </div>
    <div className="flex justify-center items-center ">
      <p className="p-2 md:text-xl text-center text-balance w-10/12 md:w-1/2 font-semibold">{categoryText}</p>
    </div>
    </>
  );
}
