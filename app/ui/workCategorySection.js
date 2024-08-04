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
        <h3 className="text-xl md:text-3xl 2xl:text-4xl font-semibold underline">
          {" "}
          {categoryName}{" "}
        </h3>
      </div>
      <div className="flex justify-center items-center ">
        <p className="p-2 md:text-lg xl:text-xl 3xl:text-3xl text-center text-balance w-10/12">
          {categoryText}
        </p>
      </div>
    </>
  );
}
