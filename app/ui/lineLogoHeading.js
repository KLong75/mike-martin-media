// import components
import Image from "next/image";
import { createElement } from "react";

const validHtmlElements = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"];

export default function LineLogoHeading({ text, htmlElement, textClassName, imageClassName }) {
  const element = validHtmlElements.includes(htmlElement)
    ? htmlElement
    : "h3";

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        {createElement(
          element,
          {
            className: `${textClassName || ""}`,
          },
          text
        )}
        <div className="w-full">
          <Image
            src="/branding/line-logo-black.png"
            alt=""
            width={1440}
            height={65}
            className={`${imageClassName || ""}`}
          />
        </div>
      </div>
    </div>
  );
}