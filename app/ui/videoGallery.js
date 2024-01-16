
// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { videoData } from "../lib/data";

export default function VideoGallery( {selectedCategory}) {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-6">
        {videoData
        .filter((video) => selectedCategory === "All Videos" || video.category === selectedCategory)
        .map((video) => (
          <div key={video.client} className="mb-6">
            <ClientVideoFrame
              src={video.src}
              client={video.client}
              category={video.category}
              thumbnail_src={video.thumbnail_src}
            />
          </div>
        ))}
      </div>
  );
}
