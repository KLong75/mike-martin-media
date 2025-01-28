// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { videoData } from "../lib/videoData";

export default function VideoGallery({ selectedCategory, excludedCategory, numberOfVideos }) {
  return (
    <div
      className={` grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ${
        selectedCategory === "Livestream" || selectedCategory === "" ? "lg:grid-cols-2" : "lg:grid-cols-3"
      } gap-0`}>
      {videoData
        .filter((video) => {
          // Check if video is in selectedCategory
          const isSelectedCategory =
            selectedCategory === "All Videos" ||
            video.category.includes(selectedCategory);
          // Check if video is not exclusively in excluded categories
          const isNotExclusivelyExcluded = !video.category.every((cat) =>
            excludedCategory.includes(cat)
          );
          return isSelectedCategory && isNotExclusivelyExcluded;
        })
        .slice(0, numberOfVideos) // Limit the number of videos displayed
        .map((video) => (
          <div
            key={video.id}
            className="text-white w-full h-auto">
            <ClientVideoFrame
              src={video.src}
              client={video.client.toUpperCase()}
              title={video.title.toUpperCase()}
              category={video.category}
              image_src={ video.image_src }
            />
          </div>
        ))}
    </div>
  );
};
