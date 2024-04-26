// import from next
"use client";
// import from react
import { useState, useEffect } from "react";

export default function BannerVideoWithFadeNoLogo({ src, title }) {
  
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const videoFadeTimer = setTimeout(() => {
      setShowVideo(true);
    }, 0);
    return () => {
      clearTimeout(videoFadeTimer);
    };
  }, []);

  return (
    <section className="grid grid-cols-1">
     <div className={`relative flex justify-center transition-colors duration-9000 ease-in-out ${showVideo ? 'bg-white' : 'bg-black'}`}>
        <div
          className={`banner-video-aspect-ratio-container w-full transition-opacity duration-3000 ease-in-out ${
            showVideo ? "opacity-100" : "opacity-0"
          }`}
          style={{
            
            paddingTop:
              title === "About_Page_Banner_Video"
                ? "42.19%"
                :  title === "Our_Work_Page_Banner_Video"
                ? "42.19%"  
                : "" 
          }}>
          <iframe
            title={title}
            src={src}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-0 left-0 w-full h-full"></iframe>
        </div>
      </div>
    </section>
  );
}
