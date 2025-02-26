// import components
import Image from "./image";
import { createElement } from "react";

const validHeadingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

export default function MMMLineLogoHeading({ headline, heading_level }) {
  const HeadingTag = validHeadingLevels.includes(heading_level) ? heading_level : "h3";

  return (
    <div className="flex flex-col items-center">
      <div className="p-6 2xl:p-0">
        {createElement(
          HeadingTag,
          {
            className:
              "lg:px- text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-bold -mb-6 lg:-mb-10 w-3/4",
          },
          headline
        )}
        <div className="xl:-mt-12 w-full">
          <Image
            src="/branding/line-logo-black.png"
            alt=""
            width={1440}
            height={65}
            className="mt-2 lg:mb-6"
          />
        </div>
      </div>
    </div>
  );
}
