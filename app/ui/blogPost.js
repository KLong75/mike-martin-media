// import from next
import Image from "next/image";
// import components
import MMMLineLogoBlack from "../ui/mmmLineLogoBlack";
// import icons
import { IoIosArrowRoundForward } from "react-icons/io";
// import from utils
import { formatDate } from "../lib/utils";

export default function BlogPost({
  title,
  image_src,
  image_width,
  image_height,
  text,
  post_date,
}) {

 


  const shortenPostText = (text, num) => {
    if (text.length > num) {
      return text.slice(0, num) + "...";
    } else {
      return text;
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-auto mb-12 shadow-2xl relative">
      <div id="image-div" className="w-72 h-72 mb-1">
        <Image
          className="shadow-xl mt-6"
          priority
          src={image_src}
          width={image_width}
          height={image_height}
          alt={`Image for ${title} blog post`}
        />
      </div>
      <div className="text-center w-72">
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-sm mt-2 text-center">
          {formatDate(post_date)}
        </span>

        <p className="mb-6 text-pretty text-balance text-wrap text-left text-md mt-2">
          {shortenPostText(text, 300)}
          <span className="inline-flex items-center font-bold text-yellow-800 hover:cursor-pointer">
            READ MORE <IoIosArrowRoundForward className="text-2xl" />
          </span>
        </p>
      </div>
      <div className="absolute bottom-0">
        <MMMLineLogoBlack />
      </div>
    </div>
  );
}
