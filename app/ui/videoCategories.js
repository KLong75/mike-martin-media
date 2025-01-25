"use client";
// import from react
import { useState } from "react";
// import icons
import { MdAnimation } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { HiAcademicCap } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { FaKitMedical } from "react-icons/fa6";

export default function VideoCategories({ onCategorySelected }) {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");
  const handleCategorySelected = (category) => {
    setSelectedCategory(category);
    onCategorySelected(category);
  };

  const categoryOptions = [
    { name: "All Videos", icon: <FaVideo size={24} /> },
    { name: "Animation", icon: <MdAnimation size={24} /> },
    { name: "Drone", icon: <TbDrone size={24} /> },
    { name: "Corporate", icon: <HiBriefcase size={24} /> },
    { name: "Education", icon: <HiAcademicCap size={24} /> },
    { name: "Medical", icon: <FaKitMedical size={24} /> },
    { name: "Nonprofit", icon: <HiGlobeAlt size={24} /> },
  ];

  const selectedCategoryObject = categoryOptions.find(
    (category) => category.name === selectedCategory
  );

  return (
    <section>
      <h2 className="text-lg font-bold text-center -mb-6">
        SELECT A CATEGORY:
      </h2>
      <ul className="flex flex-wrap justify-center gap-4 p-6 md:mb-4">
        {categoryOptions.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategorySelected(category.name)}
            className={`text-sm flex flex-col items-center justify-center relative transition-transform cursor-pointer m-3 ${
              selectedCategory === category.name
                ? "font-bold scale:105"
                : "text-black hover:transform hover:scale-105 hover:rotate-3 hover:font-medium"
            }`}>
            {category.icon}
            <span className="mt-2">{category.name}</span>
          </li>
        ))}
      </ul>
      <div className="bg-black text-white text-xl md:text-2xl grid grid-cols-1 w-full h-28 md:h-32 text-center -mt-4">
        <h3 className="font-bold  mt-2 ">Currently Viewing:</h3>
        <div className="flex justify-center items-center ">
          {selectedCategoryObject && selectedCategoryObject.icon}
        </div>
        <h4 className="font-bold  mb-2 ">
        {selectedCategory === "All Videos"
          ? selectedCategory
          : `${selectedCategory} Videos`}
          </h4>
      </div>
    </section>
  );
}
