// import components
import Image from "next/image";

export default function BannerImage({ src, alt, width, height, priority }) {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <Image
        alt={alt}
        src={src}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
