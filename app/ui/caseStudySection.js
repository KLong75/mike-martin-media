import SlideInOnScroll from "./slideInOnScroll";
import FadeAndZoomInOnScroll from "./fadeAndZoomInOnScroll";
import LineLogoHeading from "./lineLogoHeading";

/**
 * Props:
 * - heading: string
 * - headingClassName?: string
 * - left: ReactNode
 * - right: ReactNode
 * - reverse?: boolean (if true, swaps left/right columns)
 * - gridClassName?: string
 * - wrapperClassName?: string
 */
export default function CaseStudySection({
  heading,
  headingClassName = "",
  left,
  right,
  reverse = false,
  gridClassName = "",
  wrapperClassName = "",
}) {
  return (
    <div className={wrapperClassName}>
      <SlideInOnScroll>
        <LineLogoHeading
          text={heading}
          htmlElement="h5"
          textClassName={headingClassName}
        />
      </SlideInOnScroll>
      <FadeAndZoomInOnScroll>
        <div
          className={
            "w-full mx-auto grid grid-cols-1 lg:grid-cols-2 flex justify-center items-center gap-6 " +
            gridClassName
          }
        >
          {reverse ? (
            <>
              <div>{right}</div>
              <div>{left}</div>
            </>
          ) : (
            <>
              <div>{left}</div>
              <div>{right}</div>
            </>
          )}
        </div>
      </FadeAndZoomInOnScroll>
    </div>
  );
}