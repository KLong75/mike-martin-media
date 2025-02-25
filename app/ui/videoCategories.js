"use client";
// import from react
import { useState, useEffect } from "react";
// import from next
// import { usePathname } from "next/navigation";
// import icons
// import { MdAnimation } from "react-icons/md";
// import { TbDrone } from "react-icons/tb";
// import { HiAcademicCap } from "react-icons/hi2";
// import { HiBriefcase } from "react-icons/hi2";
// import { HiGlobeAlt } from "react-icons/hi2";
// import { FaVideo, FaCameraRetro } from "react-icons/fa6";
// import { FaKitMedical } from "react-icons/fa6";
// import { BsBroadcast } from "react-icons/bs";
// import { TfiVideoClapper } from "react-icons/tfi";
// import { ImVideoCamera } from "react-icons/im";

export default function VideoCategories({
  onCategorySelected,
  selectedCategories,
}) {
  // const pathname = usePathname();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const categoryOptions = [
    {
      name: "All",
      // icon: <FaVideo size={24} />
    },
    {
      name: "Video Editing",
      // icon: <TfiVideoClapper size={24} />
    },
    {
      name: "Video Production",
      // icon: <ImVideoCamera size={24} />
    },
    {
      name: "Drone",
      // icon: <TbDrone size={24} />
    },
    {
      name: "Livestream",
      // icon: <BsBroadcast size={24} />
    },
    {
      name: "Animation",
      // icon: <MdAnimation size={24} />
    },
    {
      name: "Photography",
      // icon: <FaCameraRetro size={24} />
    },
    {
      name: "Corporate",
      // icon: <HiBriefcase size={24} />
    },
    {
      name: "Education",
      // icon: <HiAcademicCap size={24} />
    },
    {
      name: "Medical",
      // icon: <FaKitMedical size={24} />
    },
    {
      name: "Nonprofit",
      // con: <HiGlobeAlt size={24} />
    },
  ];

  const handleCategorySelected = (category) => {
    onCategorySelected((prevSelectedCategories) => {
      if (category === "All") {
        return ["All"];
      } else {
        const isSelected = prevSelectedCategories.includes(category);
        const updatedCategories = isSelected
          ? prevSelectedCategories.filter((cat) => cat !== category)
          : prevSelectedCategories
              .filter((cat) => cat !== "All")
              .concat(category);
        return updatedCategories.length === 0 ? ["All"] : updatedCategories;
      }
    });
  };

  // const selectedCategoryObjects = categoryOptions.filter((category) =>
  //   selectedCategories.includes(category.name)
  // );

  return (
    <section className="bg-black text-white py-6">
      {/* if isMobile is true displkay this h3 and menu */}

      {isMobile ? (
        <>
          <h3 className="font-bold text-center">
            Filter by Capability and Industry:
          </h3>
          <ul className="flex flex-col items-center">
            <li
              key={categoryOptions[0].name}
              onClick={() => handleCategorySelected(categoryOptions[0].name)}
              className={`text-sm cursor-pointer px-4 rounded-full my-2 mx-4 ${
                selectedCategories.includes(categoryOptions[0].name)
                  ? "bg-white text-black font-bold"
                  : "font-semibold text-white hover:bg-white hover:text-black"
              }`}>
              <span>{categoryOptions[0].icon}</span>
              <span className="mt-2 -mb-4">{categoryOptions[0].name}</span>
            </li>
            <div className="flex flex-wrap justify-center px-6 lg:py-4">
              {categoryOptions.slice(1).map((category) => (
                <li
                  key={category.name}
                  onClick={() => handleCategorySelected(category.name)}
                  className={`text-sm cursor-pointer px-4 rounded-full my-2 mx-4 ${
                    selectedCategories.includes(category.name)
                      ? "bg-white text-black font-bold"
                      : "font-semibold text-white md:hover:bg-white md:hover:text-black"
                  }`}>
                  <span className="mt-2">{category.name}</span>
                </li>
              ))}
            </div>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex flex-wrap justify-center px-6 lg:py-4">
            {categoryOptions.map((category) => (
              <li
                key={category.name}
                onClick={() => handleCategorySelected(category.name)}
                className={`text-sm cursor-pointer px-4 rounded-full my-2 mx-4 ${
                  selectedCategories.includes(category.name)
                    ? "bg-white text-black font-bold"
                    : "font-semibold text-white hover:bg-white hover:text-black"
                }`}>
                {/* <span>{category.icon}</span> */}
                <span className="mt-2">{category.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* <h3 className="font-bold text-center">Filter by Category:</h3>
      <ul className="flex flex-col items-center">
        <li
          key={categoryOptions[0].name}
          onClick={() => handleCategorySelected(categoryOptions[0].name)}
          className={`text-sm cursor-pointer px-4 rounded-full my-2 mx-4 ${
            selectedCategories.includes(categoryOptions[0].name)
              ? "bg-white text-black font-bold"
              : "font-semibold text-white hover:bg-white hover:text-black"
          }`}>
          <span>{categoryOptions[0].icon}</span>
          <span className="mt-2 -mb-4">{categoryOptions[0].name}</span>
        </li>
        <div className="flex flex-wrap justify-center px-6 lg:py-4">
          {categoryOptions.slice(1).map((category) => (
            <li
              key={category.name}
              onClick={() => handleCategorySelected(category.name)}
              className={`text-sm cursor-pointer px-4 rounded-full my-2 mx-4 ${
                selectedCategories.includes(category.name)
                  ? "bg-white text-black font-bold"
                  : "font-semibold text-white hover:bg-white hover:text-black"
              }`}>
              <span className="mt-2">{category.name}</span>
            </li>
          ))}
        </div>
      </ul> */}

      {/* <div className="flex justify-center items-center bg-black text-white text-xl md:text-2xl grid grid-cols-1 w-full h-28 md:h-32 text-center -mt-4">
        <h3 className="font-bold mt-2">Currently Viewing:</h3>
        <div className="flex justify-center items-center space-x-4">
          {selectedCategoryObjects.map((category) => (
            <div key={category.name} className="mb-1 flex flex-col items-center">
              <span>{category.icon}</span>
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
