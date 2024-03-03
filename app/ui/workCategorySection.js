// import from react
import React from "react";

export default function WorkCategorySection({
  categoryName,
  categoryText,
  categoryIcon,
}) {
  const iconSize = 36;

  return (
    <>
      <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform">
        <div>{React.cloneElement(categoryIcon, { size: iconSize })}</div>
        <span className="text-2xl md:text-3xl font-semibold underline">
          {" "}
          {categoryName}{" "}
        </span>
      </div>
      <div className="flex justify-center items-center ">
        <p className="p-2 md:text-xl text-center text-balance w-10/12">
          {categoryText}
        </p>
      </div>
    </>
  );
}
