
// import components
import ClientVideoFrame from "../ui/clientVideoFrame";
// import data
import { videoData } from "../lib/data";

export default function VideoGallery( {selectedCategory}) {
  // return (
  //     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
  //       {videoData
  //       .filter((video) => video.category === selectedCategory)
  //       .map((video) => (
  //         <div key={video.client} className="text-white w-full h-auto hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform">
  //           <ClientVideoFrame
  //             src={video.src}
  //             client={video.client}
  //             category={video.category}
  //             thumbnail_src={video.thumbnail_src}
  //           />
  //         </div>
  //       ))}
  //     </div>
  // );
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 ${selectedCategory === 'Livestreaming' ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
      {videoData
        .filter((video) => video.category === selectedCategory)
        .map((video) => (
          <div key={video.client} className="text-white w-full h-auto hover:transform hover:scale-110 hover:z-40 hover:text-black transition-transform">
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
