// import clsx
import clsx from "clsx";
// import components
import ClientVideoFrame from "./clientVideoFrame";
import ClientVideoContainer from "./clientVideoContainer";
import LineLogoHeading from "./lineLogoHeading";
import SlideInOnScroll from "./slideInOnScroll";
import FadeInOnScroll from "./fadeInOnScroll";
export default function CaseStudyResultVideoDisplay({
  videos,
  resultText,
  orientation,
  numOfVids,
}) {
  return (
    <div className="my-8">
      <SlideInOnScroll>
        <LineLogoHeading
          text="The Result"
          htmlElement={"h5"}
          textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
        />
      </SlideInOnScroll>

      <FadeInOnScroll>
        <>
          <div className="w-full h-auto flex flex-col my-6 gap-4">
            {resultText.map((item, index) => (
              <p
                className="md:w-md lg:w-lg xl:w-xl 2xl:w-4xl mx-auto lg:text-lg italic font-medium "
                key={index}>
                {item}
              </p>
            ))}
          </div>
          {/* CHANGED: Using clsx for dynamic grid columns based on numOfVids */}
          <div
            className={clsx("mx-auto grid grid-cols-1 gap-8", {
              "lg:grid-cols-1 w-xs":
                numOfVids === 1 && orientation === "vertical",
              "lg:grid-cols-1 w-full md:w-md lg:w-lg xl:w-xl mx-auto ":
                numOfVids === 1 && orientation === "horizontal",
              "lg:grid-cols-2 md:w-md lg:w-full lg:px-12":
                numOfVids === 2 && orientation === "horizontal",
              "lg:grid-cols-2 md:w-md lg:w-3xl":
                numOfVids === 2 && orientation === "vertical",
              " ":
                numOfVids === 3 && orientation === "horizontal",
              "lg:grid-cols-3 md:w-md lg:w-5xl":
                numOfVids === 3 && orientation === "vertical",
            })}>
            {videos.map((video, index) => (
              <ClientVideoContainer video={video} key={index} />
            ))}
            {/* {videos.map((video, index) => (
              <ClientVideoFrame
                src={video.src}
                key={index}
                client={video.client}
                title={video.title}
                category={video.category}
                image_src={video.image_src}
                slug={video.slug}
              />
            ))} */}
          </div>
          {/* <div className="w-full h-auto flex flex-col lg:mb-16 mt-6 gap-4">
            {resultText.map((item, index) => (
              <p
                className="md:w-md lg:w-lg xl:w-xl 2xl:w-4xl mx-auto lg:text-lg italic font-medium "
                key={index}
              >
                {item}
              </p>
            ))}
          </div> */}
        </>
      </FadeInOnScroll>
    </div>
  );
}
