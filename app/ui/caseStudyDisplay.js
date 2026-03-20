// import components
import CaseStudySection from "./caseStudySection";
import CaseStudyResultVideoDisplay from "./caseStudyResultVideoDisplay";

export default function CaseStudyDisplay({ caseStudy }) {
  const caseStudyImages = caseStudy.images;
  const portraitImages = caseStudyImages.filter(
    (image) => image.width < image.height,
  );
  const landscapeImages = caseStudyImages.filter(
    (image) => image.orientation === "landscape",
  );

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {caseStudy ? (
        <div className="w-full max-w-6xl mx-auto">
          <CaseStudySection
            heading="The Challenge"
            text={caseStudy.challenge}
            media={caseStudy.preview_image}
            mediaType="image"
          />
          <CaseStudySection
            heading="The Approach"
            text={caseStudy.approach}
            media={portraitImages}
            // media={landscapeImages}
            mediaType="gallery"
            reverse
          />
          <CaseStudyResultVideoDisplay
            videos={caseStudy.videos}
            orientation={caseStudy.videos[0]?.orientation || "horizontal"}
            numOfVids={caseStudy.videos.length}
          />
          <div className="w-full h-auto flex flex-col justify-center items-center ">
            {caseStudy.result.map((item, index) => (
              <p
                className="lg:px-60 md:text-lg 2xl:text-xl italic font-medium my-2"
                key={index}>
                {item}
              </p>
            ))}
          </div>
          <CaseStudySection
            heading={
              caseStudy.partnership.type === "long-term"
                ? "Long-term Partnership"
                : "New Partnership"
            }
            text={caseStudy.partnership.text}
            media={landscapeImages}
            // media={portraitImages}
            mediaType="gallery"
          />
        </div>
      ) : (
        <p>Case study data is not available.</p>
      )}
    </div>
  );
}
