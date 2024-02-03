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
  const iconSize = 32;

  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-2">
      <div>
        {React.cloneElement(categoryIcon, { size: iconSize })}
      </div>
      <h2 className="text-3xl font-bold"> {categoryName} </h2>
      <TextSegment text={categoryText} />
    </div>
  );
}
