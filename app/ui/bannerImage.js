// import from next
// import Image from "next/image";
// import components
import Image from "./image"

export default function BannerImage({ src, alt, width, height }) {
  return (
    <section className="grid grid-cols-1">
      <div className="relative flex justify-center">
        <div
          className="w-full banner-video-aspect-ratio-container"
          >
          <Image 
            src={src} 
            alt={alt} 
            width={width} 
            height={height}
          />
        </div>
      </div>
    </section>
  );
}
