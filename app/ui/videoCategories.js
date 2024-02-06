"use client";
// import from react
import { useState } from "react";
// import icons
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
    { name: "Corporate", icon: <HiBriefcase size={24} /> },
    { name: "Education", icon: <HiAcademicCap size={24} /> },
    { name: "Medical", icon: <FaKitMedical size={24} /> },
    { name: "Nonprofit", icon: <HiGlobeAlt size={24} /> },
  ];

  const selectedCategoryObject = categoryOptions.find(category => category.name === selectedCategory);

  return (
    <section>
      <h3 className="text-lg font-bold text-center -mb-6">Select a category:</h3>
      <ul className="flex flex-wrap justify-center gap-4 p-6">
        {categoryOptions.map((category) => (
          <li
            key={category.name}
            onClick={() => handleCategorySelected(category.name)}
            className={`text-sm flex flex-col items-center justify-center relative transition-transform cursor-pointer m-3 ${
              selectedCategory === category.name ? "font-bold scale:110" : "text-black hover:transform hover:scale-110 hover:rotate-3 hover:font-medium"
            }`}
          >
            {category.icon}
            <span className="mt-2">{category.name}</span>
          </li>
        ))}
      </ul>
      <div className="bg-black text-white grid grid-cols-1 w-full h-24 md:h-28 text-center -mt-4">
      <div>
        <h4 className="font-bold text-xl mt-2 ">Currently Viewing:</h4>
        <div className="flex justify-center items-center mt-1">
        {selectedCategoryObject && selectedCategoryObject.icon}
        </div>
        {selectedCategory === 'All Videos' ? selectedCategory : `${selectedCategory} Videos`}
        </div>
      </div>
    </section>
  );
}

