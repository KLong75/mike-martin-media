// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { videoData } from "../lib/videoData";
// import icons
import { IoCloseCircleOutline } from "react-icons/io5";

export default function VideoGallery({
  selectedCategories,
  excludedCategory,
  numberOfVideos,
  clearSelectedCategories,
}) {
  const filteredVideos = videoData.filter((video) => {
    // Check if "All Videos" is selected
    if (selectedCategories.includes("All Videos")) {
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
          <p>There are no videos matching these categories.</p>
          <button
            className="mt-4"
            onClick={clearSelectedCategories}
          >
            <IoCloseCircleOutline size={24} />
          </button>
          <span>clear selected categories</span>
        </div>
      ) : (
        <div
          className={`w-full h-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ${
            selectedCategories.includes("Livestream") || selectedCategories.length === 0
              ? "lg:grid-cols-2"
              : "lg:grid-cols-3"
          } gap-0`}>
          {filteredVideos
            .slice(0, numberOfVideos) // Limit the number of videos displayed
            .map((video) => (
              <div key={video.id} className="text-white w-full h-auto">
                <ClientVideoFrame
                  src={video.src}
                  client={video.client}
                  title={video.title}
                  category={video.category}
                  image_src={video.image_src}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}