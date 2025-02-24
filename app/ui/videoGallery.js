"use client";
//import from next
import { usePathname } from "next/navigation";
// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import PhotographyGallery from "./photographyGallery";
import PhotoGallery from "./photoGallery";
// import data
// import { videoData } from "../lib/videoData";
import { workSampleData } from "../lib/work-samples";
// import icons
import { IoCloseCircleOutline } from "react-icons/io5";

export default function VideoGallery({
  selectedCategories,
  excludedCategory,
  numberOfVideos,
  clearSelectedCategories,
}) {
  const pathname = usePathname();
  const filteredVideos = workSampleData.filter((video) => {
    // Check if "All" is selected
    if (selectedCategories.includes("All")) {
      return true;
    }
    // Check if video matches all selected categories
    const matchesAllSelectedCategories = selectedCategories.every((cat) =>
      video.category.includes(cat)
    );
    // Check if video is not exclusively in excluded categories
    const isNotExclusivelyExcluded = !video.category.every((cat) =>
      excludedCategory.includes(cat)
    );
    return matchesAllSelectedCategories && isNotExclusivelyExcluded;
  });

  return (
    <div className="flex justify-center w-full bg-black">
      {filteredVideos.length === 0 ? (
        <div className="text-white text-sm md:text-xl flex flex-col items-center">
          <p>There are no results matching your selections.</p>
          <button className="mt-4" onClick={clearSelectedCategories}>
            <IoCloseCircleOutline size={24} />
          </button>
          <span>clear selections</span>
        </div>
      ) : (
        <div
          className={`w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ${
            // selectedCategories.includes("Livestream") ||
            // selectedCategories.includes("Animation") 
            pathname === "/capabilities/live-streaming" ||
            pathname === "/capabilities/animation-motion-graphics" ||
            filteredVideos.length === 2 ||
            filteredVideos.length === 1
            // selectedCategories.length === 0
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          }`}>
          {filteredVideos
            .slice(0, numberOfVideos) // Limit the number of videos displayed
            .map((video, index) => (
              <div key={index} className="text-white w-full h-auto">
                {video.category.includes("Photography") ? (
                  <PhotoGallery
                    src={video.image_src}
                    client={video.client}
                    title={video.title}
                    alt={video.title}
                    category={video.category}
                    image_src={video.image_src}
                    width={1920}
                    height={1080}
                  />
                ) : (
                  <ClientVideoFrame
                    src={video.src}
                    client={video.client}
                    title={video.title}
                    category={video.category}
                    image_src={video.image_src}
                  />
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}