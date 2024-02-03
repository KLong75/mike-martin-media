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
  const iconSize = 36;

  return (
    <div className="flex flex-col justify-center items-center mt-6 mb-2">
      {/* <div className="flex justify-center items-center w-24 h-8 mb-1">
        <Image
          src="/branding/mmm_black.png"
          width={294}
          height={95}
          alt="company logo"
        />
      </div> */}
     
      <div>
        {React.cloneElement(categoryIcon, { size: iconSize })}
      </div>
      <h2 className="text-3xl font-bold mb-2"> {categoryName} </h2>
      {/* <div className="mb-4 flex justify-center items-center w-72 h-auto">
        <Image
          src={categoryImage}
          width={840}
          height={960}
          alt="category image"
        />
      </div> */}
      <TextSegment text={categoryText} />
      {/* <div className="mt-4 mb-4">
        <WorkCategoryButton categoryName={categoryName} />
      </div> */}
      {/* <div className="md:hidden">
        <MMMLineLogoBlack />
      </div> */}
    </div>
  );
}
