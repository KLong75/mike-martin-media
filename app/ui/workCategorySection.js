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
  const iconSize = 28;

  return (
    <>
    <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform">
      <div>
        {React.cloneElement(categoryIcon, { size: iconSize })}
      </div>
      <span className="text-2xl font-semibold"> {categoryName} </span>
    </div>
    <TextSegment text={categoryText} />
    </>
  );
}
