//import components
import Image from "./image";

export default function FourPicGrid({src_one, src_two, src_three, src_four, width, height, priority}) {
  return(
    //resonsive grid for four pictures of equal dimensions to take up full width and height of container
    <div className="grid grid-cols-2 w-full h-full">
      <div className="w-full h-full">
        <Image
          src={src_one}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src={src_two}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src={src_three}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
      <div className="w-full h-full">
        <Image
          src={src_four}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
    </div>
  );
}