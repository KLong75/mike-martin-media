// import from next
import Image from "next/image";
import Link from "next/link";
// import data
import { ourWorkTilesData } from "../lib/data";

export default function OurWorkTiles() {
  return (
    <div className="flex justify-center items-center w-full h-auto"> 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-3/4 ">
        {ourWorkTilesData.map((tile) => (
          <Link href={tile.href} key={tile.title}>
          <div className="relative pb-8 md:pb-0">
            <div className="w-full h-auto ">
              <Image
                src={tile.image_src}
                width={593}
                height={334}
                alt={tile.title}
              />
            </div>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">{tile.title}</span>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
