export default function FormattedTextBlock({ heading, heading_level, sub_heading, text }) {
  return (
    <div>
      {/* <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">
        {heading}
      </h6> */}
      {/* use heading level prop to set h */}
      {heading_level === "h1" && <h1 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h1>}
      {heading_level === "h2" && <h2 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h2>}
      {heading_level === "h3" && <h3 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h3>}
      {heading_level === "h4" && <h4 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h4>}
      {heading_level === "h5" && <h5 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h5>}
      {heading_level === "h6" && <h6 className="font-bold text-xl lg:text-2xl xl:text-4xl mb-4 lg:mb-8">{heading}</h6>}
      <p className="font-semibold sm:text-lg">{sub_heading}</p>
      <p className="sm:text-lg">{text}</p>
    </div>
  );
}
