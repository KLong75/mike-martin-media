// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { livestreamData } from "../lib/photographyWorkSampleData";

export default function LivestreamGallery() {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 `}>
      {livestreamData.map((stream) => (
        <div
          key={stream.client}
          className="text-white w-full h-auto hover:transform hover:scale-105 hover:z-40 hover:text-black transition-transform">
          <ClientVideoFrame
            src={stream.src}
            client={stream.client.toUpperCase()}
            category={stream.category}
            thumbnail_src={stream.thumbnail_src}
          />
        </div>
      ))}
    </div>
  );
}
