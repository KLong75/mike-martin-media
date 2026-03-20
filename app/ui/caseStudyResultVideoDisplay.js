// import components
import ClientVideoContainer from "./clientVideoContainer";
import LineLogoHeading from "./lineLogoHeading";
import SlideInOnScroll from "./slideInOnScroll";
import FadeInOnScroll from "./fadeInOnScroll";
export default function CaseStudyResultVideoDisplay({
  videos,
  orientation,
  numOfVids,
}) {
  return (
    <div>
      <SlideInOnScroll>
        <LineLogoHeading
          text="The Result"
          htmlElement={"h5"}
          textClassName="font-bold -mb-2 sm:-mb-4 md:-mb-6 lg:-mb-8 xl:-mb-12 text-lg sm:text-xl md:text-2xl"
        />
      </SlideInOnScroll>

      <FadeInOnScroll>
        <div className="">
          {/* <ClientVideoContainer video={videos[0]} /> */}
          {videos.map((video, index) => (
            <div
              key={index}
              className={`my-6 ${numOfVids === 1 ? "w-full" : "w-full lg:w-1/2"}`}>
              <ClientVideoContainer video={video} />
            </div>
          ))}
        </div>
      </FadeInOnScroll>
    </div>
  );
}
