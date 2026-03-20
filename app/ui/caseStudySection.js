import SlideInOnScroll from "./slideInOnScroll";
import FadeInOnScroll from "./fadeInOnScroll";
import LineLogoHeading from "./lineLogoHeading";
import Image from "next/image";
import AutoFadeImageGallery from "./autoFadeImageGallery";

/**
 * Props:
 * - heading: string
 * - text: array of strings
 * - media: image object or array of images (for gallery)
 * - mediaType: "image" | "gallery"
 * - reverse?: boolean
 */
export default function CaseStudySection({
  heading,
  text,
  media,
  mediaType,
  reverse = false,
}) {
  // Text block
  const textBlock = (
    <div className="md:w-md h-auto flex flex-col justify-center items-center mx-auto gap-4">
      {text.map((item, index) => (
        <p className="lg:text-lg" key={index}>
          {item}
        </p>
      ))}
    </div>
  );

  // Media block
  let mediaBlock = null;
  if (mediaType === "image" && media) {
    mediaBlock = (
      <div className="md:w-md mx-auto h-auto flex justify-center items-center">
        <Image
          src={media.url}
          alt={media.alt || "Case Study Image"}
          width={media.width}
          height={media.height}
          className=""
        />
      </div>
    );
  } else if (mediaType === "gallery" && Array.isArray(media)) {
    mediaBlock = (
      <div className="w-full h-auto flex justify-center items-center">
        <AutoFadeImageGallery
          images={media}
          orientation={media[0]?.orientation || "landscape"}
        />
      </div>
    );
  }

  // Order
  const content = reverse ? [mediaBlock, textBlock] : [textBlock, mediaBlock];

  return (
    <div className="my-8">
      <SlideInOnScroll>
        <LineLogoHeading
          text={heading}
          htmlElement="h5"
          textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-10 text-lg sm:text-xl md:text-2xl"
        />
      </SlideInOnScroll>
      <FadeInOnScroll>
        <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 lg:mt-12 lg:mb-16 items-center">
          {content.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}
