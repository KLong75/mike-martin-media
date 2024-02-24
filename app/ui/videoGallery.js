// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { videoData } from "../lib/data";

export default function VideoGallery({ selectedCategory, excludedCategory }) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ${
        selectedCategory === "Livestreaming"
          ? "lg:grid-cols-2"
          : "lg:grid-cols-3"
      } gap-0`}>
      {/* {videoData
        .filter(
          (video) =>
            (selectedCategory === "All Videos" ||
              video.category === selectedCategory) 
        )
        .map((video) => ( */}
       
        {/* {videoData
        .filter(video => 
          selectedCategory === "All Videos" ||
          video.category.indexOf(selectedCategory) !== -1 // Using indexOf instead of includes
        )
        .map((video) => ( */}

        {videoData
        // Filter based on the selectedCategory and handle exclusion logic more selectively
        .filter(video => {
          // Condition for selectedCategory
          const isSelectedCategory = selectedCategory === "All Videos" || video.category.includes(selectedCategory);
          
          // Ensure video is not excluded if it has more than one category,
          // even if one of them is the excludedCategory
          const isNotExclusivelyExcludedCategory = !(video.category.length === 1 && video.category.includes(excludedCategory));
          
          return isSelectedCategory && isNotExclusivelyExcludedCategory;
        })
        .map((video) => (



          <div
            key={video.client}
            className="text-white w-full h-auto hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform">
            <ClientVideoFrame
              src={video.src}
              client={video.client.toUpperCase()}
              category={video.category}
              thumbnail_src={video.thumbnail_src}
            />
          </div>
        ))}
    </div>
  );
}
