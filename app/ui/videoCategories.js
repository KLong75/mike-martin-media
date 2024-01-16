"use client";
// import from react
import { useState } from "react";

// import icons
import { HiAcademicCap } from "react-icons/hi2";
import { HiBriefcase } from "react-icons/hi2";
import { HiGlobeAlt } from "react-icons/hi2";
import { FaVideo } from "react-icons/fa6";
import { FaKitMedical } from "react-icons/fa6";

export default function VideoCategories( {onCategorySelected}) {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");

  const handleCategorySelected = (category) => {
    setSelectedCategory(category);
    onCategorySelected(category);
  };

  const categoryOptions = [
    {
      name: "All Videos",
      icon: <FaVideo size={24} />,
    },
    {
      name: "Corporate",
      icon: <HiBriefcase size={24} />,
    },
    {
      name: "Education",
      icon: <HiAcademicCap size={24} />,
    },
    {
      name: "Medical",
      icon: <FaKitMedical size={24} />,
    },
    {
      name: "Nonprofit",
      icon: <HiGlobeAlt size={24} />,
    },
  ];

  return (
    <section className="mb-12">
      <ul className="flex flex-wrap justify-center p-6 m-6  sm:space-x-12 md:space-x-14 lg:space-x-16">
        {categoryOptions.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategorySelected(category.name)}
            className={`text-sm flex flex-col items-center justify-center relative z-10 hover:z-20 transition-transform cursor-pointer m-3 ${
              selectedCategory === category.name
                ? "font-bold scale-110"
                : "text-black hover:transform hover:scale-110 hover:font-medium hover:rotate-3"
            }`}
          >
            {category.icon}
            <span className="mt-2">
              {category.name}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center -mt-4">
        <h3 className="text-xl font-bold">Currently Viewing {selectedCategory}</h3>
      </div>
    </section>
  );
}