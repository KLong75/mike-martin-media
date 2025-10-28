//import components
// import Image from "next/image";
import GridPic from "./gridPic";
// import from next
// import Link from "next/link";
// import data
import { gridPics } from "../lib/gridPics";

export default function FourPicGrid() {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-2 w-full h-full">
        {gridPics.map((gridPic) => (
          <GridPic
            key={gridPic.label}
            label={gridPic.label}
            href={gridPic.href}
            alt={gridPic.alt}
            src={gridPic.src}
            width={gridPic.width}
            height={gridPic.height}
            priority={gridPic.priority}
          />
        ))}
      </div>
    </div>
  );
}