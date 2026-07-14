// import components
import CaseStudySection from "./caseStudySection";
import CaseStudyResultVideoDisplay from "./caseStudyResultVideoDisplay";

export default function CaseStudyDisplay({ caseStudy }) {
  const portraitImages = caseStudy.portrait_images;
  const landscapeImages = caseStudy.landscape_images;

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
            resultText={caseStudy.result}
            orientation={caseStudy.videos[0]?.orientation || "horizontal"}
            numOfVids={caseStudy.videos.length}
          />
          <CaseStudySection
            heading={
              caseStudy.partnership.type === "long-term"
                ? "Long-term Partnership"
                : "Growing Partnership"
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
