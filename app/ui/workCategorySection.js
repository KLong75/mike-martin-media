// import from next
import Image from "next/image";
// import from react
import React from "react";
// import components
import MMMLineLogoBlack from "./mmmLineLogoBlack";
import WorkCategoryButton from "./workCategoryButton";
import TextSegment from "./textSegment";

export default function WorkCategorySection({
  categoryName,
  categoryText,
  categoryImage,
  categoryIcon,
}) {
  const iconSize = 28;

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {React.cloneElement(categoryIcon, { size: iconSize })}
      </div>
      <span className="text-2xl font-bold"> {categoryName} </span>
      <TextSegment text={categoryText} />
    </div>
  );
}
