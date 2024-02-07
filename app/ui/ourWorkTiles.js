// import from next
import Image from "next/image";
import Link from "next/link";
// import data
import { ourWorkTilesData } from "../lib/data";

export default function OurWorkTiles() {
  return (
    <div className="flex justify-center items-center w-full h-auto"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-10/12 md:w-full">
        {ourWorkTilesData.map((tile) => (
          <Link href={tile.href} key={tile.title}>
          <div className="text-white relative pb-8 md:pb-0 hover:transform md:hover:scale-110 hover:z-40 hover:text-black transition-transform">
            <div className="w-full h-auto ">
              <Image
                priority
                src={tile.image_src}
                width={960}
                height={540}
                alt={`thumbnail image for ${tile.title} category`}
              />
            </div>
            <span className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl lg:text-4xl font-bold pb-8 md:pb-0 ">{tile.title.toUpperCase()}</span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
