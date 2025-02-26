// import from next
import Link from "next/link";
// import components
import Image from "./image";

export default function GridPic({
  label,
  href,
  alt,
  src,
  width,
  height,
  priority,
}) {
  return (
    <div className="relative w-full h-full overflow-hidden group">
      <Link href={href}>
        <Image
          alt={alt}
          src={src}
          width={width}
          height={height}
          priority={priority}
          className="w-full h-full object-cover transform transition-transform duration-2000 group-hover:scale-125 ease-in-out"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-2000 ease-in-out"></div>
        <div className="capability-label text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold absolute bottom-0 xl:bottom-[1rem] left-[1rem] sm:left-[1.25rem] md:left-[1.5rem] lg:left-[2.0rem] xl:left-[2.5rem] text-white transform -rotate-90 origin-left">
          <span>{label}</span>
        </div>
      </Link>
    </div>
  );
}