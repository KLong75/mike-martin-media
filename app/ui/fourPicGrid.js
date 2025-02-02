//import components
import Image from "./image";
// import from next
import Link from "next/link";

export default function FourPicGrid({
  src_one,
  src_two,
  src_three,
  src_four,
  href_one,
  href_two,
  href_three,
  href_four,
  width,
  height,
  priority,
}) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 w-full h-full max-w-[1728px]">
        <div className="w-full h-full overflow-hidden">
          <Link href={href_one}>
            <Image
              src={src_one}
              width={width}
              height={height}
              priority={priority}
              className="transform transition-transform duration-2000 hover:scale-125 ease-in-out"
            />
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden">
          <Link href={href_two}>
            <Image
              src={src_two}
              width={width}
              height={height}
              priority={priority}
              className="transform transition-transform duration-2000 hover:scale-125 "
            />
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden">
          <Link href={href_three}>
            <Image
              src={src_three}
              width={width}
              height={height}
              priority={priority}
              className="transform transition-transform duration-2000 hover:scale-125"
            />
          </Link>
        </div>
        <div className="w-full h-full overflow-hidden">
          <Link href={href_four}>
            <Image
              src={src_four}
              width={width}
              height={height}
              priority={priority}
              className="transform transition-transform duration-2000 hover:scale-125"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
