// import from next
import Link from "next/link";
// import components
import Image from "next/image";

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
          className="w-full h-full object-cover transform transition-transform duration-2000 lg:group-hover:scale-125 ease-in-out"
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 600px, (max-width: 1280px) 1200px, 1600px"
        />
        <div className="absolute inset-0 bg-black opacity-0 lg:group-hover:opacity-50 transition-opacity duration-2000 ease-in-out"></div>

        {/* 
            1. This container covers full height and is slightly wider than the label. 
            2. The background fills in black on hover. 
          */}
        <div className="absolute top-0 left-0 h-full w-24 pointer-events-none lg:group-hover:bg-black transition-colors duration-2000 ease-in-out">
          {/* 
              3. Rotated label and border at bottom of this container. 
              Use pointer-events-auto on label so the link still works. 
            */}
          <div className="absolute bottom-0 left-[1rem] md:left-[2rem] lg:bottom-[1rem] lg:left-[3rem] text-white transform -rotate-90 origin-left pointer-events-auto font-bold text-sm sm:text-lg lg:text-xl xl:text-2xl xl:text-3xl">
            <div className="relative inline-block">
              <span className="text-shadow-black-background-black">
                {label}
              </span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-6 border-b-2 border-white w-0 lg:group-hover:w-32 xl:group-hover:w-36 2xl:group-hover:w-48 3xl:group-hover:w-52 4xl:group-hover:w-96 5xl:group-hover:w-128 6xl:group-hover:w-144 opacity-0 lg:group-hover:opacity-100 transition-all duration-2000 ease-in-out" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}